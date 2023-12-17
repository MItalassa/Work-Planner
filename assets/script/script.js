//display the current date inside the paragrapf of ID currentDay
let currentDay = $("#currentDay")

let todayDate = dayjs()
// //Display the current day at the top of the calender when a user opens the planner.
currentDay.text(todayDate.format('dddd DD.MM.YYYY'));
//Present timeblocks for standard business hours when the user scrolls down.
//Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function colorCode() {
    var hour = dayjs().hour();

//Allow a user to enter an event when they click a timeblock
//Save the event in local storage when the save button is clicked in that timeblock.
$(".time-block").each(function() {
    var currentHour = parseInt($(this).attr("id"));
//console.log(currHour)
   // console.log(this); //each time-block

    if (currentHour > hour) {
        $(this).addClass("future");
    } else if (currentHour === hour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }
})
};

  //if nothing in localStorage, create a new object to track all task status arrays

//Persist events between refreshes of a page

var saveBtn = $(".saveBtn");

saveBtn.on("submit", function() {
     //console.log(this);
    var time = $(this).parent().attr("id");
    var description = $(this).closest(".row").find("textarea").val();
    localStorage.setItem(time,      description);
});

// // WHEN I refresh the page
// // THEN the saved events persist
// function usePlanner() {
// var timeBlockHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];

//     $.each( timeBlockHours, function(index, hour) {
//         // var currentHour = $(this).text();
//         // var blockHour = currentHour.split(":")[0];
//         var currentPlan = localStorage.getItem(hour);
//             // console.log(currentHour);
//             console.log(currentPlan);
//             $(hour+ "textarea[name = ' Things to do']").val(currentPlan);
//             console.log( $(hour+ "textarea[name = 'Things to do']"))
//         // //console.log(this);
//     //    console.log(hour)

//         // if(currentPlan !== null) {
//         //     $(this).siblings(".plan").val(currentPlan);
//         // }
//     });
// }

$("#9 textarea[name = 'Things to do']").val(localStorage.getItem("9"));
$("#10 textarea[name = 'Things to do']").val(localStorage.getItem("10"));
$("#11 textarea[name = 'Things to do']").val(localStorage.getItem("11"));
$("#12 textarea[name = 'Things to do']").val(localStorage.getItem("12"));
$("#13 textarea[name = 'Things to do']").val(localStorage.getItem("13"));
$("#14 textarea[name = 'Things to do']").val(localStorage.getItem("14"));
$("#15 textarea[name = 'Things to do']").val(localStorage.getItem("15"));
$("#16 textarea[name = 'Things to do']").val(localStorage.getItem("16"));
$("#17 textarea[name = 'Things to do']").val(localStorage.getItem("17"));
$("#18 textarea[name = 'Things to do']").val(localStorage.getItem("18"));
$("#19 textarea[name = 'Things to do']").val(localStorage.getItem("19"));

colorCode();
// $(document).ready(function(){
//     usePlanner();
// })
