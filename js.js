
//stuckoverflow 
(function () {
	// Create a "close" button and append it to each list item
	var nodeList = document.querySelectorAll("todo-list");
	
	for (var i = 0; i < nodeList.length; i++) {
		var span 	   = document.createElement("span");
		var txt 	   = document.createTextNode("\u00D7");
		span.className = "close";
		nodeList[i].appendChild(span.appendChild(txt));
	}

	// Click on a close button to hide the current list item
	var close = document.querySelectorAll("close");
	
	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}

	// Add a "checked" symbol when clicking on a list item
	var list = document.querySelector('ul');
	
	list.addEventListener('click', function(ev) {
	  if (ev.target.tagName === 'li') {
		ev.target.classList.toggle('checked');
	  }
	}, false);
})();

// Create a new list item when clicking on the "Add" button
addBtn.addEventListener('click', function(ev) {
	newItemlist();
}, false);

function newItemlist() {
	var li		   = document.createElement("li");
	var datespan   = document.createElement("span");
	var eventspan  = document.createElement("span");
	//var eventinput = document.getElementById("eventinput").value;
	//var dateinput  = document.getElementById("dateinput").value;

	var dateinput  = eventform.dateinput.value;
	//var eventinput = eventform.eventinput.value;
	var eventinput = window['eventinput'].value;
		  
	li.className = "todo-list";
			  
	if(eventinput === '' || dateinput === '') {
	alert("Something is missing!");
	}else{

		var datetext  = document.createTextNode(dateinput + ' | ');
		var eventtext = document.createTextNode(eventinput + ' | ');

		//datespan.className  = "dateList";
		//eventspan.className = "dateList";
		datespan.appendChild(datetext);
		eventspan.appendChild(eventtext);
		
		li.appendChild(datespan);
		li.appendChild(eventspan);
		document.getElementById("todolist").appendChild(li);
		close(li);
	}

	document.getElementById("eventinput").value = "";
	document.getElementById("dateinput").value = "";
	
}

//Close Function
function close(li) {
  
  var close = document.querySelectorAll("close");
  var span  = document.createElement("span");
  var txt   = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function() {
		  var div = this.parentElement;
		  alert('Close');
		  div.style.display = "none";
		}
	 }
}
//Datepicker
$(document).ready(function(){
	$( function() {
		$( "#dateinput" ).datepicker({
			onSelect: function (){
				  $(this).change();
			}
		});
	  });
	  
	jQuery("input").bind("change", function(){
		//console.error("change detected");
	});
});
