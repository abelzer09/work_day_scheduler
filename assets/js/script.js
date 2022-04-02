var saveButtonEl = $('.BtnSave');
var timeBlockEl = $(".time-block");
var today = moment();
var textArea =$('.description')
var counter = 9;
// sets text of id to current day 
$('#currentDay').text(today.format('dddd, MMMM do'));

//takes value for data-time and textarea and stores them together in local storage when save button is clicked
saveButtonEl.on("click", function(event){
    var text = $(this).parent().children('textarea').val();
    var hour = $(this).parent().data("time");
    localStorage.setItem(hour,text);
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

// takes information in local storage and renders it on the page when reloaded
for (let i = 0; i < textArea.length; i++) {
    if (localStorage.getItem(counter.toString())){
        textArea[i].value = localStorage.getItem(counter.toString())
    }
    counter++
}