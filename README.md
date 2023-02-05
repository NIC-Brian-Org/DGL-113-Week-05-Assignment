# DGL 113 Week 04 Assignment

1. In the style of event delegation shown in the demo, create a function and 
   use the `addEventListener()` method to listen for "click" events on the
   `<table>` element in the page. Use the `.target` property of the event 
   parameter `e` of your function and toggle the `table-warning` class on the 
   clicked table cell. All elements have a `.classList` property with a 
   `.toggle()` method that you can use to toggle CSS classes on an element. 
   When this is working, you will see the background of the clicked cell in 
   yellow.
1. Modify the function so that it 
   updates the `.innerHTML` property of "Selected Cell Value" 
   region of the page with the `.innerHTML` of clicked cell ( the `.target` 
   property of the event object `e` passed to the function). When this is 
   working, you should also see the value of the cell you clicked on updated 
   in the "Selected Cell Value" region of your page.
1. When everything is working, stage, commit, and sync (push) your changes.
1. In the "Actions" tab for the repository, confirm that all the tests 
   passed.
