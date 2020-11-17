// Module imports
import { parseISO } from 'date-fns';
import { ui } from './ui';

// Create storage and data class
class StorageAndData {
  constructor() {
    // local storage keys
    this.LOCAL_STORAGE_LIST_KEY = 'task.lists';
    this.LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
    // lists and selected list id
    this.lists = JSON.parse(
      localStorage.getItem(this.LOCAL_STORAGE_LIST_KEY)
    ) || [{ id: '1', name: 'My List', tasks: [] }];
    this.selectedListId =
      localStorage.getItem(this.LOCAL_STORAGE_SELECTED_LIST_ID_KEY) || '1';
  }

  // Function to delete task from list
  deleteTask(id) {
    // Get current list
    const currentList = this.findSelectedList();
    // filter tasks to remove deleted task
    currentList.tasks = currentList.tasks.filter((task) => task.id !== id);
  }

  // Function to clear the completed tasks
  clearCompletedTasks() {
    // get the current list and tasks
    let list = this.findSelectedList();

    // filter out completed tasks
    list.tasks = list.tasks.filter((task) => task.completed === false);
  }

  // Function to delete a list
  deleteList(id) {
    // filter out the list with the given id
    this.lists = this.lists.filter((list) => list.id !== id);
  }

  // Function to toggle completed status
  toggleCompletedStatus(id) {
    // find task using id
    let task = this.findSelectedList().tasks.find((task) => task.id === id);
    // if the task is set to completed change to incomplete
    if (task.completed) {
      task.completed = false;
    } else {
      // else change to completed
      task.completed = true;
    }
  }

  // Function to create new task
  createNewTask(name, notes, date, priority) {
    // Find selected list
    const selectedList = this.findSelectedList();
    // Create new task object
    const task = {
      id: this.createUniqueId(),
      name,
      notes,
      date,
      priority,
      completed: false,
    };
    // Push new task to list
    selectedList.tasks.push(task);
  }

  // Function to create new list
  createList(name) {
    // create a new list object
    const newList = { id: this.createUniqueId(), name: name, tasks: [] };
    // set selected list id to new list id
    this.selectedListId = newList.id;
    // push new list to lists array
    this.lists.push(newList);
  }

  // Function to sort tasks
  sortTasks() {
    // get sort value from dropdown
    const option = ui.sortDropdown.value;
    // get tasks
    const tasks = this.findSelectedList().tasks;
    //initiate sortedTasks variable
    let sortedTasks;

    if (option === 'priority') {
      // if option is priority sort in in order of priority
      sortedTasks = tasks.sort((a, b) => a.priority - b.priority);
    } else if (option === 'deadline') {
      // if option is deadline sort in in order of deadline
      sortedTasks = tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (option === 'date') {
      // if option is deadline sort in in order of deadline
      sortedTasks = tasks.sort((a, b) => a.id - b.id);
    } else {
      // if option is a-z sort alphabetically
      sortedTasks = tasks.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sortedTasks;
  }

  // Function to set selectedListId and select the list
  setSelectedListId(id) {
    // set selected list id
    this.selectedListId = id;
    // save to local storage
    this.saveToLocalStorage();
  }

  // Function to generate unique id
  createUniqueId() {
    return Date.now().toString();
  }

  // Function to get selected list
  findSelectedList() {
    // filter lists to find one with matching ID
    const selectedList = this.lists.find(
      (list) => list.id === this.selectedListId
    );
    return selectedList;
  }

  // Function to save lists to local storage
  saveToLocalStorage() {
    // saves lists to local storage
    localStorage.setItem(
      this.LOCAL_STORAGE_LIST_KEY,
      JSON.stringify(this.lists)
    );
    // saves selected list id to local storage
    localStorage.setItem(
      this.LOCAL_STORAGE_SELECTED_LIST_ID_KEY,
      this.selectedListId
    );
  }
}

// export storageAndData Object
export const storageAndData = new StorageAndData();
