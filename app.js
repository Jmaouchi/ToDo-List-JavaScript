let clickBtn = document.getElementById('addToDo');
let inputField = document.getElementById('input-field');
let toDoContainer = document.getElementById('toDoContainer');


clickBtn.addEventListener('click', function(){

//Phase One and its the phase of creating the element and adding it to the Dom

  //creat a paragraph whenever we click the button and add it to the toDoContainer div
  const paragraph = document.createElement('p');
  //add a calass name 
  paragraph.className= 'paragraph-styling';
  // the paragraph should be the input value
  paragraph.innerHTML = inputField.value;
  paragraph.style.color='white';
  // append p to toDoContainer div
  toDoContainer.appendChild(paragraph);
  // add X to paragraph
  const X = document.createElement('button');
  // a className
  X.className = 'delete';
  //add the icon html
  X.innerHTML = 'delete dbl click';
  X.style.marginLeft = '15px';
  X.style.padding = '15px'
  //append the link to li
  paragraph.appendChild(X);
  // adding a warning whenever the input value is none 
  if( inputField.value === ''){
    showThis('Please check again')
  function showThis(thisIsTheError){
  
  paragraph.appendChild(X).remove()
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
//Phase Two and its the phase of deleting the paragraph from the Dom 

  // listener to click and make a line through the paragraph 
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = 'line-through'
  })
  // listener of double click to remove the paragraph from the Dom
  paragraph.addEventListener('dblclick', function(){
    toDoContainer.appendChild(paragraph).remove();
  })
  //
})
