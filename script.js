$(document).ready(function(){
    var btnValue = "";
    var inputValue = "";
    var isEqualled = false;

    $(".button").click(function(){        
        btnValue = $(this).val();
/*         try{
        if(inputValue.includes(".") && btnValue == "."){
            return;
        }}
        catch(e){
            alert(e.message);
        } */
         if(inputValue.length == 0 && btnValue == 0){
            return;
        }
        if(inputValue.length == 0 && isNaN(btnValue) && btnValue != "c"){
            inputValue = "0";
            inputValue += btnValue;
            $("#result").val(inputValue);
            return;
        }
        if(btnValue == "c"){
            reset();
            $("#result").val(0);
            return;
        } 
        if(btnValue == "="){
            inputValue = eval(inputValue);
            $("#result").val(inputValue);
            isEqualled = true;
            return;
        }
         if(isEqualled == true && !isNaN(btnValue)){                      
            reset();   
            $("#result").val(inputValue = btnValue); 
            return;
        }           
        isEqualled = false;
        inputValue += btnValue;       
        $("#result").val(inputValue);
    });

    function reset(){
        inputValue ="";
        isEqualled = false; 
    }
});
