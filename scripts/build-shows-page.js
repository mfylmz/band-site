let showsList = [
  {
    Date: "Mon Sept 06 2021",
    Venue: "Ronald Lane",
    Location: "San Francisco, CA",
  },
  {
    Date: "Tue Sept 21 2021",
    Venue: "Pier 3 East",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Oct 15 2021",
    Venue: "View Lounge",
    Location: "San Francisco, CA",
  },
  {
    Date: "Sat Nov 06 2021",
    Venue: "Hyatt Agency",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Nov 26 2021",
    Venue: "Moscow Center",
    Location: "San Francisco, CA",
  },
  {
    Date: "Wed Dec 15 2021",
    Venue: "Press Club",
    Location: "San Francisco, CA",
  },
];

let showsSubheadingEl = document.querySelector(".shows-detail__subheading");

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

let showsTableEl = document.querySelector(".shows-detail__table");

showsList.forEach((showsListItem) => {
  let tableRowEl = document.createElement("li");
  tableRowEl.classList.add("shows-detail__list");

  let heading1MobileEl = document.createElement("p");
  heading1MobileEl.innerText = "DATE";
  heading1MobileEl.classList.add("shows-detail__column");
  heading1MobileEl.classList.add("shows-detail__column--card-view");
  tableRowEl.appendChild(heading1MobileEl);

  let dateEl = document.createElement("p");
  dateEl.innerText = showsListItem.Date;
  dateEl.classList.add("shows-detail__list-items");
  dateEl.classList.add("shows-detail__list-items--date");
  tableRowEl.appendChild(dateEl);

  let heading2MobileEl = document.createElement("p");
  heading2MobileEl.innerText = "VENUE";
  heading2MobileEl.classList.add("shows-detail__column");
  heading2MobileEl.classList.add("shows-detail__column--card-view");
  tableRowEl.appendChild(heading2MobileEl);

  let venueEl = document.createElement("p");
  venueEl.innerText = showsListItem.Venue;
  venueEl.classList.add("shows-detail__list-items");
  tableRowEl.appendChild(venueEl);

  let heading3MobileEl = document.createElement("p");
  heading3MobileEl.innerText = "LOCATION";
  heading3MobileEl.classList.add("shows-detail__column");
  heading3MobileEl.classList.add("shows-detail__column--card-view");
  tableRowEl.appendChild(heading3MobileEl);

  let locationEl = document.createElement("p");
  locationEl.innerText = showsListItem.Location;
  locationEl.classList.add("shows-detail__list-items");
  tableRowEl.appendChild(locationEl);

  let buttonEl = document.createElement("button");
  buttonEl.innerText = "BUY TICKETS";
  buttonEl.classList.add("button");
  buttonEl.classList.add("button--shows-detail");
  tableRowEl.appendChild(buttonEl);

  showsTableEl.appendChild(tableRowEl);
});

let showsRowEl = document.querySelectorAll(".shows-detail__list");

showsRowEl.forEach((showsRow) => {
  showsRow.addEventListener("click", (event) => {
    showsRowEl.forEach((showsRow) => {
      showsRow.classList.remove("shows-detail__list--selected");
    });
    showsRow.classList.add("shows-detail__list--selected");
  });
});
