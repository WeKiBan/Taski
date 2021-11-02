# Taski Todo List App

A Responsive Todo list app built with Bootstrap.

### Screenshot

![](dist/img/Taski.png)

### Built with

- HTML/SCSS
- Javascript
- [Bootstrap](https://getbootstrap.com/)- CSS Framework

### Features

The user is presented with a default list which is empty. To add a new task they must click the plus in the right hand corner and fill in each of sections. upon completion a task will be added and an alert will be shown to advise the user they were successful.

![](dist/img/addNote.gif)

When there are multiple tasks in a list they can be sorted by priority, deadline, date created or alphabetically by selecting the sort by button.

![](dist/img/sortFunction.gif)

this sort functionality was achieved using an event listener on the dropdown box which renders the sorted list each time its fired.

```javascript
ui.sortDropdown.addEventListener('change', function (e) {
  // render tasks
  ui.renderTasks(storageAndData.findSelectedList().tasks);
});
```

The user can also clear any completed tasks or delete the list entirely by using the buttons in the bottom right corner.

![](dist/img/clearDelete.gif)

To create a new list the user can open the side menu and enter the list name in the input box, clicking the plus button to confirm.

![](dist/img/addNewList.gif)

### Potential Future Features

- Adding a log-in feature so tasks can be accessed from different machines.
