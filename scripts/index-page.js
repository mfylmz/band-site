"use strict";

// Define the base URL of the API
const apiUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
// Define the API key for authentication
const apiKey = "8283f343-9f66-4104-aacf-f67bf7be4586";

// Find and store DOM elements to work with
const commentUl = document.getElementById("commentlist"); // Reference to the <ul> element where comments will be displayed
const commentForm = document.querySelector(".comments__form"); // Reference to the comment form

// Attach an event listener to the comment form to handle form submission
commentForm.addEventListener("submit", handleFormSubmit);

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior
  // Get user input from the form
  const user_name = event.target.user_name.value;
  const comment_description = event.target.comment_description.value;
  // Call a function to post the new comment if both name and comment are provided
  if (user_name !== "" && comment_description !== "") {
    newPost(user_name, comment_description);
    event.target.reset(); // Reset the form inputs after submission
  } else {
    alert("Please enter a name and comment"); // Show an alert if either name or comment is missing
  }
}

// Function to fetch comments from the API
function getComments() {
  axios
    .get(`${apiUrl}/comments?api_key=${apiKey}`)
    .then(function (response) {
      console.log("API Response:", response); // Log the API response
      appendToDom(response.data); // Call a function to append comments to the DOM
    })
    .catch(function (error) {
      console.error("Error fetching comments:", error); // Log any errors that occur during fetching comments
    });
}

// Call the function to fetch comments when the page loads
getComments();

// Function to post a new comment to the API
function newPost(name, comment) {
  axios
    .post(`${apiUrl}/comments?api_key=${apiKey}`, {
      name: name,
      comment: comment,
    })
    .then(function (response) {
      console.log("New comment added:", response); // Log the response after successfully adding a new comment
      getComments(); // Fetch comments again after adding a new comment
    })
    .catch(function (error) {
      console.error("Error adding new comment:", error); // Log any errors that occur during adding a new comment
    });
}

// Function to append comments to the DOM
function appendToDom(commentData) {
  commentUl.innerHTML = ""; // Clear existing comments before appending new ones
  // Sort comments by timestamp in descending order
  const sortedComments = commentData.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
  sortedComments.forEach(function (commentObj) {
    // Create DOM elements to display each comment
    const commentDivItemElem = document.createElement("div");
    commentDivItemElem.classList.add("commentlist__container");

    const dividerElem = document.createElement("hr");
    dividerElem.classList.add("commentlist__divider");
    commentDivItemElem.appendChild(dividerElem);

    const commentlistLi = document.createElement("li");
    commentlistLi.classList.add("commentlist__item");

    const commentlistImageElem = document.createElement("img");
    commentlistImageElem.setAttribute("src", "./assets/images/User-image.png");
    commentlistImageElem.classList.add("commentlist__userimage");
    commentlistLi.appendChild(commentlistImageElem);

    const commentDivGroupElem = document.createElement("div");
    commentDivGroupElem.classList.add("commentlist__group");

    const commentDivCommentGroupElem = document.createElement("div");
    commentDivCommentGroupElem.classList.add("commentlist__commentgroup");

    const commentUserNameElem = document.createElement("p");
    commentUserNameElem.classList.add("commentlist__username");
    commentUserNameElem.innerText = commentObj.name;

    const commentTimestampElem = document.createElement("p");
    commentTimestampElem.classList.add("commentlist__timestamp");
    commentTimestampElem.innerText = new Date(
      commentObj.timestamp
    ).toLocaleDateString();

    commentDivCommentGroupElem.appendChild(commentUserNameElem);
    commentDivCommentGroupElem.appendChild(commentTimestampElem);

    const commentUserCommentElem = document.createElement("p");
    commentUserCommentElem.classList.add("commentlist__usercomment");
    commentUserCommentElem.innerText = commentObj.comment;

    commentDivGroupElem.appendChild(commentDivCommentGroupElem);
    commentDivGroupElem.appendChild(commentUserCommentElem);

    commentlistLi.appendChild(commentDivGroupElem);
    commentDivItemElem.appendChild(commentlistLi);
    commentUl.appendChild(commentDivItemElem); // Append each comment to the comments list
  });
}
