// Select all HTML elements with a class of "box".
var boxes = document.querySelectorAll(".box");

// For the 1st box (index = 0), change the background color to "blue".
boxes[0].style.backgroundColor = "green";

boxes[1].style.backgroundColor = "purple";

// For the 3rd box (index = 2), change the background color to "yellow".
boxes[2].style.backgroundColor = "#191919";

boxes[3].style.backgroundColor = "blanchedalmond";

// Variable used to add to the left margin.
var moveAmount = 5;

// Variable to hold the current left margin.
var leftMargin = 0;

// Variable used to add to the left margin.
var moveAmount = 20;

// Function that adds moveAmount to leftMargin then appends leftMargin
// to the first box's margin left. Basically moving the box to the right.
function boxClicked() {

    // 'console.log()' only displays in the browser console.
    // It's useful for you, the developer, to debug your code.
    console.log("Hey, box clicked!");
    leftMargin += moveAmount;
    boxes[0].style.marginLeft = (leftMargin - 15) + "px";
}

function box2Clicked() {

    // 'console.log()' only displays in the browser console.
    // It's useful for you, the developer, to debug your code.
    console.log("Hey, box clicked!");
    leftMargin += moveAmount;
    boxes[1].style.marginLeft = (leftMargin - 10) + "px";
}

function box3Clicked() {

    // 'console.log()' only displays in the browser console.
    // It's useful for you, the developer, to debug your code.
    console.log("Hey, box clicked!");
    leftMargin += moveAmount;
    boxes[2].style.marginLeft = (leftMargin - 5) + "px";
}

function box4Clicked() {

    // 'console.log()' only displays in the browser console.
    // It's useful for you, the developer, to debug your code.
    console.log("Hey, box clicked!");
    leftMargin += moveAmount;
    boxes[3].style.marginLeft = leftMargin + "px";
}

function box5Clicked() {

    // 'console.log()' only displays in the browser console.
    // It's useful for you, the developer, to debug your code.
    console.log("Hey, box clicked!");
    leftMargin += moveAmount;
    boxes[4].style.marginTop = leftMargin + "px";
}

// When anyone clicks on the first box, call the function "boxClicked".
boxes[0].addEventListener("click", boxClicked);
boxes[1].addEventListener("click", box2Clicked);
boxes[2].addEventListener("click", box3Clicked);
boxes[3].addEventListener("dblclick", box4Clicked);
boxes[4].addEventListener("click", box5Clicked);