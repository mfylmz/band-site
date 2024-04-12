"use strict";

// find and store dom elements to work with
const commentForm = document.querySelector(".comments__form");
const commentUl = document.querySelector(".commentlist");

// attach an event listener to the comment form
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
  // appendComment(user_name,comment_description);
  addComment(user_name, comment_description);
}

const comments = [
  {
    username: "Victor Pinto",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that  makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains",
    timestamp: 11 + "/" + 2 + "/" + 2023,
  },
  {
    username: "Gary Wong",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so i can really enjoy myself!",
    timestamp: 12 + "/" + 12 + "/" + 2020,
  },
  {
    username: "Theodore Duncan",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it everyday. Everytime I see him I feel instantly happy! He's definitely my favorite ever!",
    timestamp: 11 + "/" + 15 + "/" + 2018,
  },
];

// create comment list item <li class=".comment__item"

function appendComment() {
  commentUl.innerHTML = ""; //clear HTML to avoid doubling
  // sort comments here
  const sortedComments = comments.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
  // const sortedCommentsTime = sortedComments.sort((a, b) => new Date(b.date) - new Date(a.date));

  for (let i = 0; i < comments.length; i++) {
    const commentObj = comments[i];

    //  create <div> element called commentDivItem
    const commentDivItemElem = document.createElement("div");
    // add the class .commentlist__container
    commentDivItemElem.classList.add("commentlist__container");

    // create <hr> element called divider
    const dividerElem = document.createElement("hr");
    // add the class .commentlist__divider
    dividerElem.classList.add("commentlist__divider");

    commentDivItemElem.appendChild(dividerElem);

    //  create <li> element called commentlistItem
    const commentlistLi = document.createElement("li");
    // add the class .commentlist__item
    commentlistLi.classList.add("commentlist__item");

    // create <img> element called commentlistImage
    const commentlistImageElem = document.createElement("img");
    commentlistImageElem.setAttribute("src", "./assets/images/User-image.png");
    // add the class .commentlist__userimage
    commentlistImageElem.classList.add("commentlist__userimage");

    commentlistLi.appendChild(commentlistImageElem);

    //  create <div> element called commentDivGroup
    const commentDivGroupElem = document.createElement("div");
    // add the class .commentlist__group
    commentDivGroupElem.classList.add("commentlist__group");

    //  create <div> element called commentDivCommentGroup
    const commentDivCommentGroupElem = document.createElement("div");
    // add the class .commentlist__commentgroup
    commentDivCommentGroupElem.classList.add("commentlist__commentgroup");

    //  create <p> element and add user name
    const commentUserNameElem = document.createElement("p");
    // add the class .commentlist__username
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
// runs on page load
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
