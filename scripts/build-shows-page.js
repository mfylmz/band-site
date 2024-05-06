"use strict";

// Define the API key and API URL
const apiKey = "8283f343-9f66-4104-aacf-f67bf7be4586";
const apiUrl =
  "https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=";

// Function to display the shows data on the webpage
function displayShows(showsList) {
  // Select the subheading element where the column headings will be displayed
  let showsSubheadingEl = document.querySelector(".shows-detail__subheading");

  // Create column headings for the list view (for tablets)
  let heading1TabletEl = document.createElement("p");
  heading1TabletEl.innerText = "DATE";
  heading1TabletEl.classList.add("shows-detail__column");
  heading1TabletEl.classList.add("shows-detail__column--list-view");
  showsSubheadingEl.appendChild(heading1TabletEl);

  let heading2TabletEl = document.createElement("p");
  heading2TabletEl.innerText = "VENUE";
  heading2TabletEl.classList.add("shows-detail__column");
  heading2TabletEl.classList.add("shows-detail__column--list-view");
  showsSubheadingEl.appendChild(heading2TabletEl);

  let heading3TabletEl = document.createElement("p");
  heading3TabletEl.innerText = "LOCATION";
  heading3TabletEl.classList.add("shows-detail__column");
  heading3TabletEl.classList.add("shows-detail__column--list-view");
  showsSubheadingEl.appendChild(heading3TabletEl);

  // Select the table element where the shows data will be displayed
  let showsTableEl = document.querySelector(".shows-detail__table");

  // Loop through the shows data and create table rows for each show
  showsList.forEach((showsListItem) => {
    let tableRowEl = document.createElement("li");
    tableRowEl.classList.add("shows-detail__list");

    // Create columns for the list view
    let heading1MobileEl = document.createElement("p");
    heading1MobileEl.innerText = "DATE";
    heading1MobileEl.classList.add("shows-detail__column");
    heading1MobileEl.classList.add("shows-detail__column--card-view");
    tableRowEl.appendChild(heading1MobileEl);

    let dateEl = document.createElement("p");
    dateEl.innerText = new Date(showsListItem.date).toDateString();
    dateEl.classList.add("shows-detail__list-items");
    tableRowEl.appendChild(dateEl);

    let heading2MobileEl = document.createElement("p");
    heading2MobileEl.innerText = "VENUE";
    heading2MobileEl.classList.add("shows-detail__column");
    heading2MobileEl.classList.add("shows-detail__column--card-view");
    tableRowEl.appendChild(heading2MobileEl);

    let venueEl = document.createElement("p");
    venueEl.innerText = showsListItem.place;
    venueEl.classList.add("shows-detail__list-items");
    tableRowEl.appendChild(venueEl);

    let heading3MobileEl = document.createElement("p");
    heading3MobileEl.innerText = "LOCATION";
    heading3MobileEl.classList.add("shows-detail__column");
    heading3MobileEl.classList.add("shows-detail__column--card-view");
    tableRowEl.appendChild(heading3MobileEl);

    let locationEl = document.createElement("p");
    locationEl.innerText = showsListItem.location;
    locationEl.classList.add("shows-detail__list-items");
    tableRowEl.appendChild(locationEl);

    // Create a button to buy tickets
    let buttonEl = document.createElement("button");
    buttonEl.innerText = "BUY TICKETS";
    buttonEl.classList.add("button");
    buttonEl.classList.add("button--shows-detail");
    tableRowEl.appendChild(buttonEl);

    // Add a click event listener to each table row to handle row selection
    tableRowEl.addEventListener("click", (event) => {
      // Deselect all other rows
      let showsRowEl = document.querySelectorAll(".shows-detail__list");
      showsRowEl.forEach((showsRow) => {
        showsRow.classList.remove("shows-detail__list--selected");
      });
      // Select the clicked row
      tableRowEl.classList.add("shows-detail__list--selected");
    });

    // Append the table row to the shows table
    showsTableEl.appendChild(tableRowEl);
  });
}

// Function to fetch shows data from the API
function fetchShowsData() {
  axios.get(apiUrl + apiKey).then((response) => {
    // Get the shows data from the API response
    let showsData = response.data;
    // Display the shows data on the webpage
    displayShows(showsData);
  });
}

// Call the fetchShowsData function to fetch and display shows data when the page loads
fetchShowsData();
