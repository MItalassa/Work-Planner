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

saveBtn.on("click", function() {
     //console.log(this);
    var time = $(this).closest(".hour").text();
    var description = $(this).closest(".description").val();
    localStorage.setItem(time, description);
});

// // WHEN I refresh the page
// // THEN the saved events persist
function usePlanner() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

       // console.log(this);
       

        if(currentPlan !== null) {
            $(this).siblings(".plan").val(currentPlan);
        }
    });
}

colorCode();
usePlanner();