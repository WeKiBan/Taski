// IMPORTED MODULES
import { ui } from './ui';
import { storageAndData } from './storage-data';

// EVENT LISTENERS
// on window load retrieved saved data and render
document.addEventListener('DOMContentLoaded', function () {
  // render the lists when dom loads
  ui.renderLists();
  // if there are lists to render render the tasks
  if (storageAndData.lists.length !== 0) {
    ui.renderTasks();
  }
});

// Event listener on toggle button
ui.menuToggle.addEventListener('click', ui.openAndCloseSideMenu);

// Event listener for side menu close btn
ui.closeSideMenuBtn.addEventListener('click', ui.openAndCloseSideMenu);

// Event listener on overlay to close side menu
ui.overlay.addEventListener('click', ui.openAndCloseSideMenu);

// Event listener to create new list
ui.newListForm.addEventListener('submit', function (e) {
  // Get new list name from input
  const listName = ui.newListInput.value;

  if (listName === '') return;
  // Create new list item
  storageAndData.createList(listName);
  // Render lists in side menu
  ui.renderLists();
  // Clear input value
  ui.newListInput.value = '';
  // Render the tasks
  ui.renderTasks();
  // play add sound
  ui.playSound('add');
  // show Alert
  ui.showAlert('New List Created Successfully', 'green');
  // Save to local storage
  storageAndData.saveToLocalStorage();
  // close the side menu on submit
  ui.openAndCloseSideMenu();
  e.preventDefault();
});

// Event Listener to submit new task
ui.submitTaskBtn.addEventListener('click', function (e) {
  // Get task title
  const taskName = ui.taskTitle.value.toLowerCase();
  // Get task notes
  const taskNotes = ui.taskNotes.value;
  // Get task date
  const taskDate = ui.taskDate.value;
  // Get task priority
  let priority;
  // loop through radio buttons and find selected option
  ui.priorityRadio.forEach((radio) => {
    // check if radio button is selected if selected assign value to priority
    if (radio.checked === true) {
      priority = radio.value;
    }
  });
  // Create a new task
  storageAndData.createNewTask(taskName, taskNotes, taskDate, priority);

  // clear inputs
  ui.taskTitle.value = '';
  ui.taskDate.value = '';
  ui.taskNotes.value = '';
  ui.priorityRadio[0].checked = true;

  // play add sound
  ui.playSound('add');
  // show Alert
  ui.showAlert('New Task Added', 'green');
  // render the tasks to the display
  ui.renderTasks();
  // save to local storage
  storageAndData.saveToLocalStorage();

  e.preventDefault();
});

// Event listener to delete current list
ui.deleteListConfirmBtn.addEventListener('click', function (e) {
  // if there is no selected list return
  if (typeof storageAndData.findSelectedList() === undefined) return;
  // Delete the currently selected list
  storageAndData.deleteList(storageAndData.selectedListId);
  // Remove list name from ui
  ui.currentListName.textContent = '';
  // Play Delete sound
  ui.playSound('trash');
  // show Alert
  ui.showAlert('List Deleted Successfully', 'yellow');
  // Render lists in side menu
  ui.renderLists();
  // show list deleted message
  ui.showListDeletedMessage();
  // Save to local storage
  storageAndData.saveToLocalStorage();
});

// Event listener to clear completed tasks
ui.clearCompleteBtn.addEventListener('click', function (e) {
  // clear the completed tasks
  storageAndData.clearCompletedTasks();
  // render tasks
  ui.renderTasks();
  // save to local storage
  storageAndData.saveToLocalStorage();
  // play delete sound
  ui.playSound('trash');
  // show Alert
  ui.showAlert('Completed Tasks Cleared Successfully', 'yellow');
  e.preventDefault();
});

//Event listener for sort dropdown
ui.sortDropdown.addEventListener('change', function (e) {
  // render tasks
  ui.renderTasks();
});

// Event listener on lists in side menu to select individual list
ui.allLists.addEventListener('click', function (e) {
  // check if element clicked is an li node
  if (e.target.nodeName === 'LI') {
    // Get the id of the element saved to the data set
    const id = e.target.dataset.id;
    // set new selected list id
    storageAndData.setSelectedListId(id);
    // re-render the lists and tasks
    ui.renderLists();
    ui.renderTasks();
    // close the side menu on click
    ui.openAndCloseSideMenu();
  }
});

// Event listener on current list container for buttons on cards
ui.currentListContainer.addEventListener('click', function (e) {
  // IF DELETE BUTTON IS CLICKED ON CARD
  if (e.target.parentElement.classList.contains('deleteBtn')) {
    // get id of card
    const id =
      e.target.parentElement.parentElement.parentElement.parentElement.dataset
        .id;
    // get card
    const card =
      e.target.parentElement.parentElement.parentElement.parentElement;

    // shrink the card
    ui.shrinkCard(card);

    // set timeout to delay the remainder of functions allowing time for card to shrink
    setTimeout(function () {
      storageAndData.deleteTask(id);
      // render the tasks again
      ui.renderTasks(storageAndData.findSelectedList());
      // show alert
      ui.showAlert('Task Deleted Successfully', 'yellow');
      // play sound
      ui.playSound('trash');
      // save to local storage
      storageAndData.saveToLocalStorage();
    }, 200);
    e.preventDefault();

    // IF CHECKMARK IS CLICKED ON CARD
  } else if (e.target.classList.contains('checkmark')) {
    // get id of card
    const id =
      e.target.parentElement.parentElement.parentElement.parentElement.dataset
        .id;
    // get card
    const card =
      e.target.parentElement.parentElement.parentElement.parentElement;

    // when checkbox is clicked toggle completed
    card.classList.toggle('completed');
    // change task to complete or incomplete
    storageAndData.toggleCompletedStatus(id);
    // save to local storage
    storageAndData.saveToLocalStorage();

    // IF EDIT BUTTON IS CLICKED ON CARD
  } else if (e.target.parentElement.classList.contains('editBtn')) {
    e.preventDefault();
    // get task id
    const id = e.target.parentElement.parentElement.dataset.id;
    // set current task edit id
    storageAndData.taskEditId = id;
    ui.populateEditModal(id);
  }
});

ui.submitTaskBtnEdit.addEventListener('click', function (e) {
  // Submit the edit
  storageAndData.editTask();
  // Save the edit to local storage
  storageAndData.saveToLocalStorage();
  // re render the tasks
  ui.renderTasks();
  // show alert
  ui.showAlert('Task Edited Successfully', 'yellow');

  e.preventDefault();
});

// Submit with enter key
ui.editTaskForm.onkeypress = function (e) {
  // if enter key is pressed
  var key = e.charCode || e.keyCode || 0;
  if (key == 13) {
    // click submit edit task btn
    ui.submitTaskBtnEdit.click();
    e.preventDefault();
  }
};

ui.newTaskForm.onkeypress = function (e) {
  // if enter key is pressed
  var key = e.charCode || e.keyCode || 0;
  if (key == 13) {
    // click submit task btn
    ui.submitTaskBtn.click();
    e.preventDefault();
  }
};
