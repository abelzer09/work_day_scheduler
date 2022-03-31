var saveButtonEl = $('.BtnSave');
var timeBlockEl = $(".time-block");
var today = moment();


$('#currentDay').text(today.format('dddd, MMMM do'));


saveButtonEl.on("click", function(){
    var text = $(this).parent().children('textarea').val();
    
    
})

for (let i = 0; i < timeBlockEl.length; i++) {
    if($(timeBlockEl[i]).attr("data-time") < moment().hour()){
        $(timeBlockEl[i]).addClass("past")
    }else if($(timeBlockEl[i]).attr("data-time") > moment().hour()){
        $(timeBlockEl[i]).addClass("future")
    } else{
        $(timeBlockEl[i]).addClass("present")
    }
}
