// Import modules
import { add } from 'date-fns';
import { storageAndData } from './storage-data';

// CREATE UI CLASS

class UI {
  constructor() {
    // QUERY SELECTORS
    this.menuToggle = document.querySelector('.menu-toggle');
    this.closeSideMenuBtn = document.querySelector('.close-btn');
    this.main = document.querySelector('#main');
    this.overlay = document.querySelector('.overlay');
    this.header = document.querySelector('.header');
    this.currentListContainer = document.querySelector(
      '.current-list-container'
    );
    this.listWrapper = document.querySelector(
      '.current-list-container-wrapper'
    );
    this.emptyMessageContainer = document.querySelector(
      '.empty-message-container'
    );
    this.allLists = document.querySelector('.lists');
    this.currentListName = document.querySelector('.list-name');
    this.newListForm = document.querySelector('.new-list-form');
    this.newListInput = document.querySelector('.new-list-input');
    this.sortDropdown = document.querySelector('#sort');
    // query selectors for modal new task
    this.taskTitle = document.querySelector('#task-title');
    this.taskNotes = document.querySelector('#task-notes');
    this.taskDate = document.querySelector('#task-date');
    this.taskTime = document.querySelector('#task-time');
    this.taskPriority = document.querySelector('#task-priority');
    this.submitTaskBtn = document.querySelector('#submit-task-btn');
    this.priorityRadio = Array.from(document.querySelectorAll('.radio'));
    // query selectors for buttons at bottom of screen
    this.clearCompleteBtn = document.querySelector('.clear-complete-btn');
    this.deleteListBtn = document.querySelector('.delete-list-btn');
    // modal btn delete list
    this.deleteListConfirmBtn = document.querySelector(
      '.confirm-delete-list-btn'
    );
  }

  // FUNCTION TO OPEN AND CLOSE SIDE MENU
  openAndCloseSideMenu() {
    document.body.classList.toggle('open');
  }

  // FUNCTION TO RENDER TASKS TO UI
  renderTasks() {
    // clear element before rendering
    this.clearElement(this.currentListContainer);
    // get selected list
    let list = storageAndData.findSelectedList();

    // set list name
    this.currentListName.textContent = storageAndData.findSelectedList().name;

    // check if there are any tasks
    if (list.tasks.length === 0) {
      // if no tasks show empty tasks message
      this.currentListContainer.innerHTML = `<div class="empty-message-container" data-empty-message-container><img
      src="https://img.icons8.com/ios/100/000000/empty-box.png" />
      <p data-message-paragraph>No tasks created<br> use the plus to create a new task</p>
      </div>`;
    } else {
      // get tasks from list and sort
      let tasks = storageAndData.sortTasks(list.tasks);

      // loop through tasks
      tasks.forEach((task) => {
        // create task-card element
        const taskCard = document.createElement('div');

        // add id task id in dataset to task card
        taskCard.dataset.id = task.id;

        //check priority level and apply appropriate classes
        if (task.priority === '1') {
          taskCard.className = 'task-card card top-priority';
        } else if (task.priority === '2') {
          taskCard.className = 'task-card card mid-priority';
        } else {
          taskCard.className = 'task-card card low-priority';
        }

        // set innerHtml using values from task
        taskCard.innerHTML = `
      <div class="task-card-header text-center mt-3">${task.name}</div>
          <p class="date-deadline text-muted text-center">${task.date}</p>
          <div class="card-body text-muted pt-0 text-center">
            ${task.notes}
          </div>
          <div class="task-card-footer mb-1">
            <div class="complete-label">mark as complete:</div>
            <div class="task-card-btns-container">
              <label class="checkbox-container">
                <input class="checkbox" type="checkbox">
                <span class="checkmark"></span>
              </label>
              <a href=""class="deleteBtn"><i class="fas fa-trash-alt text-muted"></i></a></div>
          </div>
      `;

        // Select checkbox and delete btns
        const checkbox = taskCard.querySelector('.checkbox');
        const deletebtn = taskCard.querySelector('.deleteBtn');

        // Add event listener to checkbox
        checkbox.addEventListener('click', function () {
          // when checkbox is clicked toggle completed
          taskCard.classList.toggle('completed');
          // change task to complete or incomplete
          storageAndData.toggleCompletedStatus(task.id);
          // save to local storage
          storageAndData.saveToLocalStorage();
        });

        // Add event listener to delete btn
        deletebtn.addEventListener('click', function (e) {
          e.preventDefault();
          // get parent element
          const card = e.currentTarget.parentNode.parentNode.parentNode;
;         // delete the task
          ui.shrinkCard(card)
          // set timeout to delay the remainder of functions allowing time for card to shrink
          setTimeout(function(){
            storageAndData.deleteTask(task.id);
            // render the tasks again
            ui.renderTasks(storageAndData.findSelectedList());
            // show alert
            ui.showAlert('Task Deleted Successfully', 'yellow');
            // play sound
            ui.playSound('trash');
            // save to local storage
            storageAndData.saveToLocalStorage();
          }, 200);
          
        });

        // Check if task is complete
        if (task.completed === true) {
          // If task complete, check box add completed class to task card
          checkbox.checked = true;
          taskCard.classList.add('completed');
        }

        // append task card to container
        this.currentListContainer.appendChild(taskCard);
      });
    }
  }

  // FUNCTION TO RENDER LISTS
  renderLists() {
    // clear element before rendering
    this.clearElement(this.allLists);
    // check if there are any lists
    if (storageAndData.lists.length === 0) {
      // if no lists yet made show empty lists message
      this.currentListContainer.innerHTML = `<div class="empty-message-container" data-empty-message-container><img
      src="https://img.icons8.com/ios/100/000000/empty-box.png" />
      <p data-message-paragraph>No lists created.<br> To get started create a new list in the side menu</p>
      </div>`;
    } else {
      // loop through each list
      storageAndData.lists.forEach((list) => {
        // create list element
        const li = document.createElement('li');
        // if current list id = selectedList id highlight list
        if (storageAndData.selectedListId === list.id) {
          li.classList.add('active');
        }
        // set list text
        li.textContent = list.name;

        // add list id as data set
        li.dataset.id = list.id;
        //append list item to container
        this.allLists.appendChild(li);
      });
    }
  }
  // Function to show list deleted message
  showListDeletedMessage() {
    this.currentListContainer.innerHTML = `<div class="empty-message-container" data-empty-message-container><img
      src="https://img.icons8.com/ios/100/000000/empty-box.png" />
      <p data-message-paragraph>List Deleted.<br></p>
      </div>`;
  }
  // Function to clear element contents
  clearElement(element) {
    element.innerHTML = '';
  }
  // Function to play sound effects
  playSound(type) {
    const trash = new Audio('./audio/delete.mp3');
    const add = new Audio('./audio/add.mp3');

    switch (type) {
      case 'trash':
        trash.play();
        break;
      case 'add':
        add.play();
    }
  }
  // Function to show alerts
  showAlert(message, color) {
    // Create Alert Element
    const alert = document.createElement('div');
    // Add Alert Message
    alert.textContent = message;
    // Set Alert appropriate classes
    if (color === 'green') {
      alert.className =
        'alert alert-success alert-div text-center p-1 fade in out';
    } else if (color === 'red') {
      alert.className = 'alert alert-danger alert-div text-center p-1 fade in';
    } else {
      alert.className = 'alert alert-warning alert-div text-center p-1 fade in';
    }
    // Append alert
    this.listWrapper.appendChild(alert);
    // use timeout function to fade in the alert
    setTimeout(function () {
      alert.classList.add('show');
    }, 100);
    // use timeout function to fade out the alert
    setTimeout(function () {
      alert.classList.remove('show');
    }, 3000);
    // and then delete the alert
    setTimeout(function () {
      ui.listWrapper.removeChild(alert);
    }, 4000);
  }
  shrinkCard(card) {
  card.classList.add('shrink');
  }
}

// EXPORT UI
export const ui = new UI();
