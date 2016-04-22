//create an empty object
var books = [{
  title : "",
  author : "",
  isbn : "",
  genre : "",
  copies : 0
}];

var index = 0;

console.log(books); // the entire object

var invalidInputError = "Please enter a valid number between 0 and 99";
var missingInputError = "Please enter any missing values";
var success = "Item added successfully to catalog!  ";

var addItemButton = document.getElementById("btn-add-item");
var displayCatButton = document.getElementById("btn-display-cat");
var showInputFormButton = document.getElementById("btn-show-input-form");
var outputError = document.getElementById("error");
var outputSuccess = document.getElementById("success");
var tableHead = '<tr><th>Title</th><th>Author</th><th>Genre</th><th>ISBN</th><th>Copies</th></tr>';
var addFormHtml = null;


addItemButton.addEventListener("click", onClickAddItemToCatalog, false);
displayCatButton.addEventListener("click", onClickDisplayCatalog, false);
showInputFormButton.addEventListener("click", onClickShowInputForm, false);



function onClickShowInputForm(evt){
  
  evt.preventDefault();
  var tableDiv = document.getElementById("display-table");
  tableDiv.innerHTML = "";
  var formDiv = document.getElementById("add-book");
  formDiv.innerHTML = addFormHtml;
  
}


function buildTable(){
  
  var formDiv = document.getElementById("add-book");
  addFormHtml = formDiv.innerHTML;
  formDiv.innerHTML = "";
  
  var tableDiv = document.getElementById("book-catalog");
  var output = tableHead;
  for( var i = 0; i < books.length; i++)
  {
    output += '<tr><td>' + books[i].title + '</td>'
                + '<td>' + books[i].author + '</td>'
                + '<td>' + books[i].genre + '</td>'
                + '<td>' + books[i].isbn + '</td>'
                + '<td>' + books[i].copies + '</td>'
                + '</tr>';
  }
  
  tableDiv.innerHTML = output;
}

function onClickAddItemToCatalog(evt){
  
  evt.preventDefault();
  var target = evt.target;
  console.log(evt.target);
  outputError.innerHTML = "";
  
  //get the input
  //var input = document.getElementById('inputTitle').value;
  books[index].title = document.getElementById('inputTitle').value;
  books[index].title = document.getElementById('inputTitle').value;
  books[index].author = document.getElementById('inputAuthor').value;
  books[index].genre = document.getElementById('inputGenre').value;
  books[index].isbn = document.getElementById('inputISBN').value;
  books[index].copies = document.getElementById('inputCopies').value;
  
  if (isNaN(books[index].copies)) {
    outputError.innerHTML = invalidInputError;
  }
  else if (books[index].title === "" | books[index].author === "" | books[index].genre === "" | books[index].isbn === ""){
    outputError.innerHTML = missingInputError;
  }
  else{
    index++;
    console.log(books);
    outputSuccess.innerHTML = success;
  }
     
 }

function onClickDisplayCatalog(evt){
  
  //evt.preventDefault();
  outputSuccess.innerHTML = "";
  var formDiv = document.getElementById("add-book");
  addFormHtml = formDiv.innerHTML;
  formDiv.innerHTML = "";
  
  var tableDiv = document.getElementById("book-catalog");
  var output = tableHead;
  for( var i = 0; i < books.length; i++)
  {
    output += '<tr><td>' + books[i].title + '</td>'
                + '<td>' + books[i].author + '</td>'
                + '<td>' + books[i].genre + '</td>'
                + '<td>' + books[i].isbn + '</td>'
                + '<td>' + books[i].copies + '</td>'
                + '</tr>';
  }
  
  tableDiv.innerHTML = output;
  
}


window.onload = function()
{
	buildTable(); //or invoke the function
};
