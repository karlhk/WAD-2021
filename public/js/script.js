$( "#bind" ).click(function() {
   $(this).attr("disabled", "disabled");
   $("#unbind").removeAttr("disabled");
});
$( "#unbind" ).click(function() {
     $(this).attr("disabled", "disabled");
     $("#bind").removeAttr("disabled");
});

function incrementValue(likes_id, button_id)
{
    var p = document.getElementById(likes_id);
    var text = p.textContent;
    var number = Number(text);
    number = isNaN(number) ? 0 : number;
    number++;
    document.getElementById(likes_id).innerHTML = number;

    document.getElementById(button_id).disabled = true;
}

function userDropdownFunction() {
  document.getElementById("userDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function menuDropdownFunction() {
  document.getElementById("menuDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
