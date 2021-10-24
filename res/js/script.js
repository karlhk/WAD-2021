
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

function addPostsToMainBlock(blockData) {
    //alert(blockData.length);
    //alert(blockData[0].userImage);

    for (var i = 0; i < blockData.length; i++) {
        // create a new div element
        const newPost = document.createElement("div");
        newPost.className = "StatusBlock";
        // HEAD CONTENT
        const newHead = document.createElement("div");
        newHead.className = "flex-container";
        newPost.appendChild(newHead);

        const userImg = document.createElement("img");
        userImg.src = blockData[i].userImage;
        userImg.className = "userImage";
        newHead.appendChild(userImg);

        const postDate = document.createElement("p");
        postDate.innerText = blockData[i].date;
        postDate.className = "date";
        newHead.appendChild(postDate);

        // BODY CONTENT
        const statusImgDiv = document.createElement("div");
        statusImgDiv.className = "StatusImage";
        newPost.appendChild(statusImgDiv);

        const contentImg = document.createElement("img");
        
        if(blockData[i].hasOwnProperty('contentImage')){
            contentImg.src = blockData[i].contentImage;
        } else
        {
            contentImg.src = "";
        }
        contentImg.className = "contentImage";
        statusImgDiv.appendChild(contentImg);
        

        // TAIL CONTENT
        const statusTailDiv = document.createElement("div");
        statusTailDiv.className = "StatusTail";
        newPost.appendChild(statusTailDiv);

        const contentTXT = document.createElement("p");
        contentTXT.innerText = blockData[i].contentText;
        contentTXT.className = "contentText";
        statusTailDiv.appendChild(contentTXT);

        const likeImg = document.createElement("img");
        likeImg.src = "res/images/like.png";
        likeImg.className = "likeImage";
        statusTailDiv.appendChild(likeImg);


        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("MainBlock");
        //document.body.insertBefore(newDiv, currentDiv);
        document.getElementById('MainBlock').appendChild(newPost); 
    }
    
}

document.addEventListener("DOMContentLoaded", function(){

    let request = new XMLHttpRequest();

    
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var JSON_object = JSON.parse(this.responseText);
            addPostsToMainBlock(JSON_object);
        }
    };

    request.open("GET", "https://api.jsonbin.io/b/6172caca4a82881d6c63fe16/2", true);
    request.setRequestHeader("secret-key", "$2b$10$4I6hCPOQ93N4erAPeTYE4uILA4bxVzWqRa1l1R/V34nRSj8gjzbcq");
    //request.open("GET", "res/json/posts.json", true)
    request.send();

});
