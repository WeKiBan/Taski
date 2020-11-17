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
ui.deleteListBtn.addEventListener('click', function (e) {
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
