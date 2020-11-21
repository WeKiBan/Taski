/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _storage_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage-data */ \"./src/storage-data.js\");\n// IMPORTED MODULES\n;\n\n\n// EVENT LISTENERS\n// on window load retrieved saved data and render\ndocument.addEventListener('DOMContentLoaded', function () {\n  // render the lists when dom loads\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderLists();\n  // if there are lists to render render the tasks\n  if (_storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.lists.length !== 0) {\n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderTasks(_storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.findSelectedList().tasks);\n  }\n});\n\n// Event listener on toggle button\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.menuToggle.addEventListener('click', function () {\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.openAndCloseSideMenu();\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('menu');\n});\n\n// Event listener for side menu close btn\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.closeSideMenuBtn.addEventListener('click', function () {\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.openAndCloseSideMenu();\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('menu');\n});\n\n// Event listener on overlay to close side menu\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.overlay.addEventListener('click', function () {\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.openAndCloseSideMenu();\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('menu');\n});\n\n// Event listener to create new list\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.newListForm.addEventListener('submit', function (e) {\n  // Get new list name from input\n  const listName = _ui__WEBPACK_IMPORTED_MODULE_0__.ui.newListInput.value;\n\n  if (listName === '') return;\n  // Create new list item\n  _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.createList(listName);\n  // Render lists in side menu\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderLists();\n  // Clear input value\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.newListInput.value = '';\n  // Render the tasks\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderTasks(_storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.findSelectedList().tasks);\n  // play add sound\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('add');\n  // show Alert\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.showAlert('New List Created Successfully', 'green');\n  // Save to local storage\n  _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.saveToLocalStorage();\n  // close the side menu on submit\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.openAndCloseSideMenu();\n  e.preventDefault();\n});\n\n// Event Listener to submit new task\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.submitTaskBtn.addEventListener('click', function (e) {\n  // Get task title\n  const taskName = _ui__WEBPACK_IMPORTED_MODULE_0__.ui.taskTitle.value.toLowerCase();\n  // Get task notes\n  const taskNotes = _ui__WEBPACK_IMPORTED_MODULE_0__.ui.taskNotes.value;\n  // Get task date\n  const taskDate = _ui__WEBPACK_IMPORTED_MODULE_0__.ui.taskDate.value;\n  // Get task priority\n  let priority;\n  // loop through radio buttons and find selected option\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.priorityRadio.forEach((radio) => {\n    // check if radio button is selected if selected assign value to priority\n    if (radio.checked === true) {\n      priority = radio.value;\n    }\n  });\n  // Create a new task\n  _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.createNewTask(taskName, taskNotes, taskDate, priority);\n\n  // clear inputs\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.taskTitle.value = '';\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.taskDate.value = '';\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.taskNotes.value = '';\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.priorityRadio[0].checked = true;\n\n  // play add sound\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('add');\n  // show Alert\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.showAlert('New Task Added', 'green');\n  // render the tasks to the display\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderTasks(_storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.findSelectedList().tasks);\n  // save to local storage\n  _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.saveToLocalStorage();\n\n  e.preventDefault();\n});\n\n//  event listener to submit new task with enter key\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.newTaskForm.onkeypress = function (e) {\n  // if enter key is pressed\n  var key = e.charCode || e.keyCode || 0;\n  if (key == 13) {\n    // click submit task btn\n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.submitTaskBtn.click();\n    e.preventDefault();\n  }\n};\n\n// Event listener to delete current list\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.deleteListConfirmBtn.addEventListener('click', function (e) {\n  // if there is no selected list return\n  if (typeof _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.findSelectedList() === undefined) return;\n  // Delete the currently selected list\n  _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.deleteList(_storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.selectedListId);\n  // Remove list name from ui\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.currentListName.textContent = '';\n  // Play Delete sound\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('trash');\n  // show Alert\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.showAlert('List Deleted Successfully', 'yellow');\n  // Render lists in side menu\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderLists();\n  // show list deleted message\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.showListDeletedMessage();\n  // Save to local storage\n  _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.saveToLocalStorage();\n});\n\n// Event listener to clear completed tasks\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.clearCompleteBtn.addEventListener('click', function (e) {\n  // clear the completed tasks\n  _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.clearCompletedTasks();\n  // render tasks\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderTasks(_storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.findSelectedList().tasks);\n  // save to local storage\n  _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.saveToLocalStorage();\n  // play delete sound\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('trash');\n  // show Alert\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.showAlert('Tasks Cleared Successfully', 'yellow');\n  e.preventDefault();\n});\n\n//Event listener for sort dropdown\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.sortDropdown.addEventListener('change', function (e) {\n  // render tasks\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderTasks(_storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.findSelectedList().tasks);\n});\n\n// Event listener on lists in side menu to select individual list\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.allLists.addEventListener('click', function (e) {\n  // check if element clicked is an li node\n  if (e.target.nodeName === 'LI') {\n    // Get the id of the element saved to the data set\n    const id = e.target.dataset.id;\n    // set new selected list id\n    _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.setSelectedListId(id);\n    // re-render the lists and tasks\n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderLists();\n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderTasks(_storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.findSelectedList().tasks);\n    // close the side menu on click\n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.openAndCloseSideMenu();\n  }\n});\n\n// Event listener on current list container for buttons on cards\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.currentListContainer.addEventListener('click', function (e) {\n  // IF DELETE BUTTON IS CLICKED ON CARD\n  if (e.target.parentElement.classList.contains('deleteBtn')) {\n    // get id of card\n    const id =\n      e.target.parentElement.parentElement.parentElement.parentElement.dataset\n        .id;\n    // get card\n    const card =\n      e.target.parentElement.parentElement.parentElement.parentElement;\n\n    // shrink the card\n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.shrinkCard(card);\n\n    // play sound\n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('trash');\n\n    // set timeout to delay the remainder of functions allowing time for card to shrink\n    setTimeout(function () {\n      _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.deleteTask(id);\n      // render the tasks again\n      _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderTasks(_storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.findSelectedList().tasks);\n      // show alert\n      _ui__WEBPACK_IMPORTED_MODULE_0__.ui.showAlert('Task Deleted Successfully', 'yellow');\n      // save to local storage\n      _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.saveToLocalStorage();\n    }, 200);\n    e.preventDefault();\n\n    // IF CHECKMARK IS CLICKED ON CARD\n  } else if (e.target.classList.contains('checkmark')) {\n    // get id of card\n    const id =\n      e.target.parentElement.parentElement.parentElement.parentElement.dataset\n        .id;\n    // get card\n    const card =\n      e.target.parentElement.parentElement.parentElement.parentElement;\n    // check if checkbox is checked and play appropriate sound effect\n    if (e.target.previousElementSibling.checked) {\n      _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('click off');\n    } else {\n      _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('click on');\n    }\n\n    // when checkbox is clicked toggle completed\n    card.classList.toggle('completed');\n    // change task to complete or incomplete\n    _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.toggleCompletedStatus(id);\n    // save to local storage\n    _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.saveToLocalStorage();\n\n    // IF EDIT BUTTON IS CLICKED ON CARD\n  } else if (e.target.parentElement.classList.contains('editBtn')) {\n    e.preventDefault();\n    // get task id\n    const id = e.target.parentElement.parentElement.dataset.id;\n    // set current task edit id\n    _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.taskEditId = id;\n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.populateEditModal(id);\n  }\n});\n\n// event listener to submit the edited task\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.submitTaskBtnEdit.addEventListener('click', function (e) {\n  // Submit the edit\n  _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.editTask();\n  // Save the edit to local storage\n  _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.saveToLocalStorage();\n  // re render the tasks\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderTasks(_storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.findSelectedList().tasks);\n  // play sound\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('add');\n  // show alert\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.showAlert('Task Edited Successfully', 'yellow');\n\n  e.preventDefault();\n});\n\n//  event listener to submit the edited task with enter key\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.editTaskForm.onkeypress = function (e) {\n  // if enter key is pressed\n  var key = e.charCode || e.keyCode || 0;\n  if (key == 13) {\n    // click submit edit task btn\n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.submitTaskBtnEdit.click();\n    e.preventDefault();\n  }\n};\n\n// Event listener for search input\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.searchInput.addEventListener('input', function (e) {\n  // get input value from search box\n  const input = _ui__WEBPACK_IMPORTED_MODULE_0__.ui.searchInput.value;\n  // filter the tasks using the input\n  const filteredTasks = _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.filterTasks(input);\n  // render the filtered tasks to page\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderTasks(filteredTasks);\n});\n\n// Event listener to add border to search box when in focus\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.searchInput.addEventListener('focus', function () {\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.searchBox.classList.toggle('focus-border');\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.searchBox.classList.toggle('search-background');\n});\n\n// Even listener to play sound when search button is clicked\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.magGlassBtn.addEventListener('click', function(){\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('menu')\n})\n\n// Even listener to play sound when search button is hovered over\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.magGlassBtn.addEventListener('mouseenter', function(){\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('menu')\n})\n\n\n// Event listener to remove border to search box when not in focus\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.searchInput.addEventListener('blur', function (e) {\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.searchBox.classList.toggle('focus-border');\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.searchBox.classList.toggle('search-background');\n});\n\n// add event listener to edit list name btn to set list name in input box when modal is opened\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.editListNameBtn.addEventListener('click', function (e) {\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.listNameModalInput.value = _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.findSelectedList().name;\n});\n\n// Even Listener to rename List\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.editListModalSubmitBtn.addEventListener('click', function (e) {\n  // get input value\n  _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.findSelectedList().name = _ui__WEBPACK_IMPORTED_MODULE_0__.ui.listNameModalInput.value;\n  // re-render the tasks\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderTasks(_storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.findSelectedList().tasks);\n  // re-render the lists\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.renderLists();\n  // play sound\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSound('add');\n  // show alert\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.showAlert('Name Change Successful', 'yellow');\n  // save\n  _storage_data__WEBPACK_IMPORTED_MODULE_1__.storageAndData.saveToLocalStorage();\n  // clear any search inputs\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.searchInput.value = '';\n});\n\n// event listener to listen to form submit so enter button can be used.\n_ui__WEBPACK_IMPORTED_MODULE_0__.ui.editListNameForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  _ui__WEBPACK_IMPORTED_MODULE_0__.ui.editListModalSubmitBtn.click();\n});\n\n\n//# sourceURL=webpack://to-do-reworked/./src/index.js?");

/***/ }),

/***/ "./src/storage-data.js":
/*!*****************************!*\
  !*** ./src/storage-data.js ***!
  \*****************************/
/*! namespace exports */
/*! export storageAndData [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storageAndData\": () => /* binding */ storageAndData\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n// Module imports\n;\n\n\n// Create storage and data class\nclass StorageAndData {\n  constructor() {\n    // local storage keys\n    this.LOCAL_STORAGE_LIST_KEY = 'task.lists';\n    this.LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';\n    // lists and selected list id\n    this.lists = JSON.parse(\n      localStorage.getItem(this.LOCAL_STORAGE_LIST_KEY)\n    ) || [{ id: '1', name: 'My List', tasks: [] }];\n    this.selectedListId =\n      localStorage.getItem(this.LOCAL_STORAGE_SELECTED_LIST_ID_KEY) || '1';\n    this.taskEditId;\n  }\n\n  // Function to delete task from list\n  deleteTask(id) {\n    // Get current list\n    const currentList = this.findSelectedList();\n    // filter tasks to remove deleted task\n    currentList.tasks = currentList.tasks.filter((task) => task.id !== id);\n  }\n  // Function to edit task\n  editTask() {\n    // Get task to edit\n    const task = this.findSelectedList().tasks.find(\n      (task) => task.id === this.taskEditId\n    );\n    // Set task title to value in modal\n    task.name = _ui__WEBPACK_IMPORTED_MODULE_0__.ui.taskTitleEdit.value;\n    // Set task date to value in modal\n    task.date = _ui__WEBPACK_IMPORTED_MODULE_0__.ui.taskDateEdit.value;\n    // Set task notes to value in modal\n    task.notes = _ui__WEBPACK_IMPORTED_MODULE_0__.ui.taskNotesEdit.value;\n    // Set task priority to value in modal\n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.priorityRadioEdit.forEach((radio) => {\n      if (radio.checked === true) {\n        task.priority = radio.value;\n      }\n    });\n  }\n\n  // Function to clear the completed tasks\n  clearCompletedTasks() {\n    // get the current list and tasks\n    let list = this.findSelectedList();\n\n    // filter out completed tasks\n    list.tasks = list.tasks.filter((task) => task.completed === false);\n  }\n\n  // Function to delete a list\n  deleteList(id) {\n    // filter out the list with the given id\n    this.lists = this.lists.filter((list) => list.id !== id);\n  }\n\n  // Function to toggle completed status\n  toggleCompletedStatus(id) {\n    // find task using id\n    let task = this.findSelectedList().tasks.find((task) => task.id === id);\n    // if the task is set to completed change to incomplete\n    if (task.completed) {\n      task.completed = false;\n    } else {\n      // else change to completed\n      task.completed = true;\n    }\n  }\n\n  // Function to create new task\n  createNewTask(name, notes, date, priority) {\n    // Find selected list\n    const selectedList = this.findSelectedList();\n    // Create new task object\n    const task = {\n      id: this.createUniqueId(),\n      name,\n      notes,\n      date,\n      priority,\n      completed: false,\n    };\n    // Push new task to list\n    selectedList.tasks.push(task);\n  }\n\n  // Function to create new list\n  createList(name) {\n    // create a new list object\n    const newList = { id: this.createUniqueId(), name: name, tasks: [] };\n    // set selected list id to new list id\n    this.selectedListId = newList.id;\n    // push new list to lists array\n    this.lists.push(newList);\n  }\n\n  // Function to sort tasks\n  sortTasks(tasks) {\n    // get sort value from dropdown\n    const option = _ui__WEBPACK_IMPORTED_MODULE_0__.ui.sortDropdown.value;\n    //initiate sortedTasks variable\n    let sortedTasks;\n\n    if (option === 'priority') {\n      // if option is priority sort in in order of priority\n      sortedTasks = tasks.sort((a, b) => a.priority - b.priority);\n    } else if (option === 'deadline') {\n      // if option is deadline sort in in order of deadline\n      sortedTasks = tasks.sort((a, b) => new Date(a.date) - new Date(b.date));\n    } else if (option === 'date') {\n      // if option is deadline sort in in order of deadline\n      sortedTasks = tasks.sort((a, b) => a.id - b.id);\n    } else {\n      // if option is a-z sort alphabetically\n      sortedTasks = tasks.sort((a, b) => a.name.localeCompare(b.name));\n    }\n    return sortedTasks;\n  }\n  //function to filter tasks\n  filterTasks(input) {\n    let filteredTasks = this.findSelectedList().tasks.filter((task) => task.name.toLowerCase().includes(input.toLowerCase()));\n    return filteredTasks;\n  }\n\n  // Function to set selectedListId and select the list\n  setSelectedListId(id) {\n    // set selected list id\n    this.selectedListId = id;\n    // save to local storage\n    this.saveToLocalStorage();\n  }\n\n  // Function to generate unique id\n  createUniqueId() {\n    return Date.now().toString();\n  }\n\n  // Function to get selected list\n  findSelectedList() {\n    // filter lists to find one with matching ID\n    const selectedList = this.lists.find(\n      (list) => list.id === this.selectedListId\n    );\n    return selectedList;\n  }\n\n  // Function to save lists to local storage\n  saveToLocalStorage() {\n    // saves lists to local storage\n    localStorage.setItem(\n      this.LOCAL_STORAGE_LIST_KEY,\n      JSON.stringify(this.lists)\n    );\n    // saves selected list id to local storage\n    localStorage.setItem(\n      this.LOCAL_STORAGE_SELECTED_LIST_ID_KEY,\n      this.selectedListId\n    );\n  }\n}\n\n// export storageAndData Object\nconst storageAndData = new StorageAndData();\n\n\n//# sourceURL=webpack://to-do-reworked/./src/storage-data.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! namespace exports */
/*! export ui [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ui\": () => /* binding */ ui\n/* harmony export */ });\n/* harmony import */ var _storage_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage-data */ \"./src/storage-data.js\");\n// Import modules\n;\n\n\n// CREATE UI CLASS\n\nclass UI {\n  constructor() {\n    // QUERY SELECTORS\n    this.menuToggle = document.querySelector('.menu-toggle');\n    this.closeSideMenuBtn = document.querySelector('.close-btn');\n    this.main = document.querySelector('#main');\n    this.overlay = document.querySelector('.overlay');\n    this.header = document.querySelector('.header');\n    this.currentListContainer = document.querySelector(\n      '.current-list-container'\n    );\n    this.listWrapper = document.querySelector(\n      '.current-list-container-wrapper'\n    );\n    this.emptyMessageContainer = document.querySelector(\n      '.empty-message-container'\n    );\n    this.allLists = document.querySelector('.lists');\n    this.currentListName = document.querySelector('.list-name');\n    this.newListForm = document.querySelector('.new-list-form');\n    this.newListInput = document.querySelector('.new-list-input');\n    this.sortDropdown = document.querySelector('#sort');\n    this.sortContainer = document.querySelector('.sort-container');\n    this.searchInput = document.querySelector('.search-txt');\n    this.searchBox = document.querySelector('.search-box');\n    this.magGlassBtn = document.querySelector('.fa-search');\n    // query selectors for modal new task\n    this.taskTitle = document.querySelector('#task-title');\n    this.taskNotes = document.querySelector('#task-notes');\n    this.taskDate = document.querySelector('#task-date');\n    this.taskTime = document.querySelector('#task-time');\n    this.taskPriority = document.querySelector('#task-priority');\n    this.submitTaskBtn = document.querySelector('#submit-task-btn');\n    this.priorityRadio = Array.from(document.querySelectorAll('.radio'));\n    // query selectors for buttons at bottom of screen\n    this.clearCompleteBtn = document.querySelector('.clear-complete-btn');\n    this.deleteListBtn = document.querySelector('.delete-list-btn');\n    // modal btn delete list\n    this.deleteListConfirmBtn = document.querySelector(\n      '.confirm-delete-list-btn'\n    );\n    // query selectors for edit modal\n    this.taskTitleEdit = document.querySelector('#task-title-edit');\n    this.taskNotesEdit = document.querySelector('#task-notes-edit');\n    this.taskDateEdit = document.querySelector('#task-date-edit');\n    this.taskTimeEdit = document.querySelector('#task-time-edit');\n    this.taskPriorityEdit = document.querySelector('#task-priority-edit');\n    this.submitTaskBtnEdit = document.querySelector('#submit-task-btn-edit');\n    this.priorityRadioEdit = Array.from(\n      document.querySelectorAll('.radio-edit')\n    );\n\n    // query selectors for edit list name modal\n    this.listNameModalInput = document.querySelector('#list-name-modal-input');\n    this.editListModalSubmitBtn = document.querySelector(\n      '#submit-edit-list-btn'\n    );\n    this.editListNameBtn = document.querySelector('.edit-list-name-btn');\n    this.editListNameForm = document.querySelector('.edit-list-name-form');\n\n    // query selectors forms\n    this.newTaskForm = document.querySelector('.new-task-form');\n    this.editTaskForm = document.querySelector('.edit-task-form');\n  }\n\n  // FUNCTION TO OPEN AND CLOSE SIDE MENU\n  openAndCloseSideMenu() {\n    document.body.classList.toggle('open');\n  }\n\n  // FUNCTION TO RENDER TASKS TO UI\n  renderTasks(tasks) {\n    // clear element before rendering\n    this.clearElement(this.currentListContainer);\n\n    // set list name\n    this.currentListName.textContent = _storage_data__WEBPACK_IMPORTED_MODULE_0__.storageAndData.findSelectedList().name;\n\n    // check if there are any tasks\n    if (tasks.length === 0) {\n      // if no tasks show empty tasks message\n      this.currentListContainer.innerHTML = `<div class=\"empty-message-container\" data-empty-message-container><img\n      src=\"https://img.icons8.com/ios/100/000000/empty-box.png\" />\n      <p data-message-paragraph>No tasks created<br> use the plus to create a new task</p>\n      </div>`;\n    } else {\n      // get tasks from list and sort\n      const sortedTasks = _storage_data__WEBPACK_IMPORTED_MODULE_0__.storageAndData.sortTasks(tasks);\n\n      // loop through tasks\n      sortedTasks.forEach((task) => {\n        // create task-card element\n        const taskCard = document.createElement('div');\n\n        // add id task id in dataset to task card\n        taskCard.dataset.id = task.id;\n\n        //check priority level and apply appropriate classes\n        if (task.priority === '1') {\n          taskCard.className = 'task-card card top-priority';\n        } else if (task.priority === '2') {\n          taskCard.className = 'task-card card mid-priority';\n        } else {\n          taskCard.className = 'task-card card low-priority';\n        }\n\n        // set innerHtml using values from task\n        taskCard.innerHTML = `\n      <div class=\"task-card-header text-center mt-3\">${task.name}</div>\n      <a href=\"\"class=\"editBtn\"><i class=\"fas fa-edit text-muted\" data-toggle=\"modal\"\n      data-target=\"#editModal\"></i></a>\n          <p class=\"date-deadline text-muted text-center\">${task.date}</p>\n          <div class=\"card-body text-muted pt-0 text-center task-notes\">\n            ${task.notes}\n          </div>\n          <div class=\"task-card-footer mb-1\">\n            <div class=\"complete-label\">mark as complete:</div>\n            <div class=\"task-card-btns-container\">\n              <label class=\"checkbox-container\">\n                <input class=\"checkbox\" type=\"checkbox\">\n                <span class=\"checkmark\"></span>\n              </label>\n              <a href=\"\"class=\"deleteBtn\"><i class=\"fas fa-trash-alt text-muted\"></i></a>\n            </div>\n          </div>\n      `;\n\n        // Select checkbox\n        const checkbox = taskCard.querySelector('.checkbox');\n\n        // Check if task is complete\n        if (task.completed === true) {\n          // If task complete, check box add completed class to task card\n          checkbox.checked = true;\n          taskCard.classList.add('completed');\n        }\n\n        // append task card to container\n        this.currentListContainer.appendChild(taskCard);\n      });\n    }\n  }\n\n  // FUNCTION TO RENDER LISTS\n  renderLists() {\n    // clear element before rendering\n    this.clearElement(this.allLists);\n    // check if there are any lists\n    if (_storage_data__WEBPACK_IMPORTED_MODULE_0__.storageAndData.lists.length === 0) {\n      // if no lists yet made show empty lists message\n      this.currentListContainer.innerHTML = `<div class=\"empty-message-container\" data-empty-message-container><img\n      src=\"https://img.icons8.com/ios/100/000000/empty-box.png\" />\n      <p data-message-paragraph>No lists created.<br> To get started create a new list in the side menu</p>\n      </div>`;\n    } else {\n      // loop through each list\n      _storage_data__WEBPACK_IMPORTED_MODULE_0__.storageAndData.lists.forEach((list) => {\n        // create list element\n        const li = document.createElement('li');\n        // if current list id = selectedList id highlight list\n        if (_storage_data__WEBPACK_IMPORTED_MODULE_0__.storageAndData.selectedListId === list.id) {\n          li.classList.add('active');\n        }\n        // set list text\n        li.textContent = list.name;\n\n        // add list id as data set\n        li.dataset.id = list.id;\n        //append list item to container\n        this.allLists.appendChild(li);\n      });\n    }\n  }\n  // Function to show list deleted message\n  showListDeletedMessage() {\n    this.currentListContainer.innerHTML = `<div class=\"empty-message-container\" data-empty-message-container><img\n      src=\"https://img.icons8.com/ios/100/000000/empty-box.png\" />\n      <p data-message-paragraph>List Deleted.<br></p>\n      </div>`;\n  }\n  // Function to clear element contents\n  clearElement(element) {\n    element.innerHTML = '';\n  }\n  // Function to play sound effects\n  playSound(type) {\n    const trash = new Audio('./audio/delete.mp3');\n    const add = new Audio('./audio/add.wav');\n    const clickOn = new Audio('./audio/clicking-on.mp3');\n    const clickOff = new Audio('./audio/clicking-off.mp3');\n    const menu = new Audio('./audio/menu.wav');\n\n    switch (type) {\n      case 'trash':\n        trash.play();\n        break;\n      case 'add':\n        add.play();\n        break;\n      case 'click on':\n        clickOn.play();\n        break;\n      case 'click off':\n        clickOff.play();\n        break;\n      case 'menu':\n        menu.play();\n        break;\n    }\n  }\n  // Function to show alerts\n  showAlert(message, color) {\n    // Create Alert Element\n    const alert = document.createElement('div');\n    // Add Alert Message\n    alert.textContent = message;\n    // Set Alert appropriate classes\n    if (color === 'green') {\n      alert.className =\n        'alert alert-success alert-div text-center p-1 fade in out';\n    } else if (color === 'red') {\n      alert.className = 'alert alert-danger alert-div text-center p-1 fade in';\n    } else {\n      alert.className = 'alert alert-warning alert-div text-center p-1 fade in';\n    }\n    // Append alert\n    this.listWrapper.appendChild(alert);\n    // use timeout function to fade in the alert\n    setTimeout(function () {\n      alert.classList.add('show');\n    }, 100);\n    // use timeout function to fade out the alert\n    setTimeout(function () {\n      alert.classList.remove('show');\n    }, 3000);\n    // and then delete the alert\n    setTimeout(function () {\n      ui.listWrapper.removeChild(alert);\n    }, 4000);\n  }\n  shrinkCard(card) {\n    card.classList.add('shrink');\n  }\n  populateEditModal(id) {\n    // Get Current Task\n    const currentTask = _storage_data__WEBPACK_IMPORTED_MODULE_0__.storageAndData.findSelectedList()\n      .tasks.find((task) => task.id === id);\n    // Set Modal Values to those saved in task\n    this.taskTitleEdit.value = currentTask.name;\n    this.taskDateEdit.value = currentTask.date;\n    this.taskNotesEdit.value = currentTask.notes;\n    // set radio value\n    this.priorityRadioEdit.forEach((radio) => {\n      if (radio.value === currentTask.priority) {\n        radio.checked = true;\n      }\n    });\n  }\n}\n\n// EXPORT UI\nconst ui = new UI();\n\n\n//# sourceURL=webpack://to-do-reworked/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;