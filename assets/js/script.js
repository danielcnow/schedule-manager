var saveBtn = $(".saveBtn");
// display current day
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
// colorcode time blocks based on current time
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));
        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
// enter a timeblock on click
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var event = $(this).siblings(".event").val();
// save text in localstorage
localStorage.setItem(time, event);
});
// saved events persist
function addEvent() {
    $(".hour").each(function() {
        var currHour = $(this).text();
        var currEvent = localStorage.getItem(currHour);
        if(currEvent !== null) {
            $(this).siblings(".event").val(currEvent);
        }
    });
}
timeBlockColor();
addEvent();

