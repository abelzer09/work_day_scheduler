var saveButtonEl = $('.BtnSave');
var timeBlockEl = $(".time-block");
var today = moment();

// sets text of id to current day 
$('#currentDay').text(today.format('dddd, MMMM do'));


saveButtonEl.on("click", function(){
    // alert('hello');
    console.log($(this).parent().children('textarea').val());
    var text = $(this).parent().children('textarea').val();
    
})

// takes the timeblock and puts them in an array and applys css base on time of day in correlation to time assigned to each time block
for (let i = 0; i < timeBlockEl.length; i++) {
    if($(timeBlockEl[i]).attr("data-time") < moment().hour()){
        $(timeBlockEl[i]).addClass("past")
    }else if($(timeBlockEl[i]).attr("data-time") > moment().hour()){
        $(timeBlockEl[i]).addClass("future")
    } else{
        $(timeBlockEl[i]).addClass("present")
    }
}
