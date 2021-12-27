let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('input-field');


addToDoButton.addEventListener('click' , function(){
  //creat a paragraph element
  var paragraph = document.createElement ('p');
  // add a paragraph calssName
  paragraph.className = 'paragraph-styling'
  // set the paragraph to the input value
  paragraph.innerHTML = inputField.value;
  // append paragraph to the toDoContainer (div)
  toDoContainer.appendChild(paragraph);
  //show alert whenever its added
  if(inputField.value ===''){
    showThis('Please check again')
  function showThis(thisIsTheError){
  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.body');
  const heading = document.querySelector('.head');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(thisIsTheError));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);

  // Clear error
function clearError(){
  document.querySelector('.alert').remove();
}
}
  }
  // remove inputeFiled after adding the paragraph
  inputField.value = '';


  //add a listener on the paragraph
  paragraph.addEventListener('click' , function(e){
    paragraph.style.textDecoration = 'line-through';  
  })
  
  paragraph.addEventListener('dblclick' , function(e){
    toDoContainer.removeChild(paragraph); 
  })
})


