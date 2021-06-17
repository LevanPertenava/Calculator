$(document).ready(function(){
    var btnValue = "";
    var inputValue = "";
    
    $(".button").click(function(){        
        btnValue = $(this).val();

        if(inputValue.length == 0 && btnValue == 0){
            return;
        }
        if(btnValue == "c"){
            inputValue = "";
            btnValue = "";
            $("#result").val(0);
            return;
        }
        if(btnValue == "="){
            inputValue = eval(inputValue);
            $("#result").val(inputValue);
            return;
        }
        inputValue += btnValue;
        $("#result").val(inputValue);
    });
});
