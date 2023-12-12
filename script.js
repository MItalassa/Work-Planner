//display the current date inside the paragrapf of ID currentDay
let currentDay = $("#currentDay")

let todayDate = dayjs()
// //Display the current day at the top of the calender when a user opens the planner.


currentDay.text(todayDate.format('dddd DD.MM.YYYY'));
//Present timeblocks for standard business hours when the user scrolls down.
//Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function timeBlockColor() {
    var hour = dayjs().hour();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));
console.log(currHour)
        console.log(this); //each time-block

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};


//Allow a user to enter an event when they click a timeblock

//Save the event in local storage when the save button is clicked in that timeblock.


  // if nothing in localStorage, create a new object to track all task status arrays

// //Persist events between refreshes of a page

var saveBtn = $(".saveBtn");

// /**
//  * FUNCTIONS
//  */

// // WHEN I click the save button for that time block
saveBtn.on("click", function() {

     console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, plan);
});

// // WHEN I refresh the page
// // THEN the saved events persist
function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        console.log(this);
        console.log(currHour);

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

// /**
//  * CALL FUNCTIONS
//  */

timeBlockColor();
usePlanner();

// // delete single task
// $("#trash").droppable({
//   accept: ".card .list-group-item",
//   tolerance: "touch",
//   drop: function(event, ui) {
//     ui.draggable.remove();
//     $(".bottom-trash").removeClass("bottom-trash-active");
//   },
//   over: function(event, ui) {
//     // console.log("over");
//     $(".bottom-trash").addClass("bottom-trash-active");
//   },
//   out: function(event, ui) {
//     // console.log("out");
//     $(".bottom-trash").removeClass("bottom-trash-active");
//   }
// });
           
// // remove all tasks
// $("#remove-tasks").on("click", function() {
//   for (var key in tasks) {
//     tasks[key].length = 0;
//     $("#list-" + key).empty();
//   }
//   saveTasks();
// });

// // load tasks for the first time
// loadTasks();

// setInterval(function () {
//   $(".card .list-group-item").each(function(index, el) {
//     auditTask(el);
//   });
// }, (1000 * 60) * 30);

// $(document).ready(function() {
//     var t = dayjs().format("dddd DD.MM.YYYY");
//     let e = document.getElementById("currentDay");
//     e.textContent = t;
//     var a = dayjs().format("HH");
//     // $("#clearFieldsBtn").click(function(t) {
//     //     t.preventDefault,
//     //     $("textarea").val(""),
//     //     localStorage.clear()
//     // }),
//     $(".time-block").each(function() {
//         var t = $(this).attr("id").split("-")[1];
//         a == t ? ($(this).addClass("present"),
//         $(this).children(".plan")) : a < t ? ($(this).removeClass("present"),
//         $(this).addClass("future")) : t < a && ($(this).removeClass("future"),
//         $(this).addClass("past"))
//     }),
//     $(".saveBtn").click(function(t) {
//         t.preventDefault();
//         var e = $(this).siblings(".time-block").val()
//           , t = $(this).parents().attr("id").split("-")[1];
//         localStorage.setItem(t, e)
//     }),
//     $("#hour-09 .time-block").val(localStorage.getItem("09")),
//     $("#hour-10 .time-block").val(localStorage.getItem("10")),
//     $("#hour-11 .time-block").val(localStorage.getItem("11")),
//     $("#hour-12 .time-block").val(localStorage.getItem("12")),
//     $("#hour-13 .time-block").val(localStorage.getItem("13")),
//     $("#hour-14 .time-block").val(localStorage.getItem("14")),
//     $("#hour-15 .time-block").val(localStorage.getItem("15")),
//     $("#hour-16 .time-block").val(localStorage.getItem("16")),
//     $("#hour-17 .time-block").val(localStorage.getItem("17"))
// });