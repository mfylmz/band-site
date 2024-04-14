"use strict";

// find and store dom elements 
const commentForm = document.querySelector(".comments__form");
const commentUl = document.querySelector(".commentlist");

// attach an event listener 
commentForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const user_name = event.target.user_name.value;
  const comment_description = event.target.comment_description.value;
  //call a function and send the user_name and comment_description
  if (user_name !== "" && comment_description !== "") {
    appendComment(user_name, comment_description);
    event.target.reset(); // reset the form inputs, empty form inputs
  } else {
    alert("please enter a name and comment");
  }
  // appendComment
  addComment(user_name, comment_description);
}

const comments = [
  {
    username: "Victor Pinto",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",

    timestamp: 11 + "/" + 2 + "/" + 2023,
  },
  {
    username: "Christina Cabrera",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    timestamp: 10 + "/" + 28 + "/" + 2023,
  },
  {
    username: "Isaac Tadesse",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    timestamp: 10 + "/" + 20 + "/" + 2023,
  },
];

// create comment list item

function appendComment() {
  commentUl.innerHTML = ""; //clear HTML 
  // sort comments 
  const sortedComments = comments.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
  

  for (let i = 0; i < comments.length; i++) {
    const commentObj = comments[i];

    //  create <div> element 
    const commentDivItemElem = document.createElement("div");
    // add the class 
    commentDivItemElem.classList.add("commentlist__container");

    // create <hr> element 
    const dividerElem = document.createElement("hr");
    // add the class .commentlist__divider
    dividerElem.classList.add("commentlist__divider");

    commentDivItemElem.appendChild(dividerElem);

    //  create <li> element 
    const commentlistLi = document.createElement("li");
    // add the class 
    commentlistLi.classList.add("commentlist__item");

    // create <img> 
    const commentlistImageElem = document.createElement("img");
    commentlistImageElem.setAttribute("src", "./assets/images/User-image.png");
    // add the class .commentlist__userimage
    commentlistImageElem.classList.add("commentlist__userimage");

    commentlistLi.appendChild(commentlistImageElem);

    //  create <div> 
    const commentDivGroupElem = document.createElement("div");
    // add the class .commentlist__group
    commentDivGroupElem.classList.add("commentlist__group");

    //  create <div> 
    const commentDivCommentGroupElem = document.createElement("div");
    // add the class .commentlist__commentgroup
    commentDivCommentGroupElem.classList.add("commentlist__commentgroup");

    //  create <p> 
    const commentUserNameElem = document.createElement("p");
    // add the class 
    commentUserNameElem.classList.add("commentlist__username");
    commentUserNameElem.innerText = commentObj.username;

    //  create <p> element and add timestamp
    const commentTimestampElem = document.createElement("p");
    // add the class .commentlist__timestamp
    commentTimestampElem.classList.add("commentlist__timestamp");
    commentTimestampElem.innerText = commentObj.timestamp;

    commentDivCommentGroupElem.appendChild(commentUserNameElem);
    commentDivCommentGroupElem.appendChild(commentTimestampElem);

    //  create <p> element and add usercomment
    const commentUserCommentElem = document.createElement("p");
    // add the class .commentlist__usercomment
    commentUserCommentElem.classList.add("commentlist__usercomment");
    commentUserCommentElem.innerText = commentObj.comment;

    commentDivGroupElem.appendChild(commentDivCommentGroupElem);
    commentDivGroupElem.appendChild(commentUserCommentElem);

    commentlistLi.appendChild(commentDivGroupElem);

    commentDivItemElem.appendChild(commentlistLi);

    commentUl.appendChild(commentDivItemElem);
  }
}

appendComment();

// push to comment array and then re render comment list
function addComment(username, comment, timestamp) {
  var dt = new Date();
  comments.unshift({
    username: username,
    comment: comment,
    timestamp: dt.getMonth() + 1 + "/" + dt.getDate() + "/" + dt.getFullYear(),
  });
  appendComment();
}
