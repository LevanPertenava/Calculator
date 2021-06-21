$(document).ready(function(){
    var btnValue = "";
    var inputValue = "";
    var isEqualled = false;
    let selectedCurrency= "";
    let array = [];

    $(".button").click(function(){        
        btnValue = $(this).val();
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

    $.ajax({
        method: "GET",
        dataType: "json",
        url: "currency.json",
        success: function(currencies){
            $(currencies).each(function(i, currency){      
                $("#currencies").append('<li ><a class="dropdown-item currencies" href="#">'+ currency +'</a></li>');  
                });
            }
        });        
    
    $(".dropdown").on("click",".currencies",function(){
        var currency = $(this).text();
        if(selectedCurrency == currency){ 
            return;
        }
        selectedCurrency= currency;  
        $("#result").val(0);
        $("#dropdownMenuButton2").text("Date");
        $("#dropdownMenuButton2").attr("disabled",false);
        $("#dropdownMenuButton1").text(currency);

        priceHistory(currency);        
    });
//meore nawili json fasebi da tarigebi

    $(".dropdown").on("click", ".dates", function(){
        var selectedDate = $(this).text();
        $("#dropdownMenuButton2").text(selectedDate);
        for (let i = 0; i < array.length; i++) {
            let date = new Date(Object.keys(array[i]))
            if(date.toDateString() == selectedDate){
            $("#result").val(inputValue = Object.values(array[i]));
            }
        } 
    });
    function priceHistory(currency){
            $.ajax({
                method: "GET",
                dataType: "json",
                url: "info.json",
                success: function(result){
                array = result[currency]
                let date;
                let count = 1;
                for(let i = array.length - 1; i > array.length - 8; i--){
                    date = new Date(Object.keys(array[i]));  
                    if($("#dropitem"+ count +"").length == 0) {
                        $("#dates").append('<li ><a class="dropdown-item dates" href="#" id="dropitem'+ count++ +'">'+ date.toDateString() +'</a></li>');          
                    }
                    else{
                        $("#dropitem"+ count++ +"").text(date.toDateString());      
                    }
                }                 
            }
        });
    }
});
