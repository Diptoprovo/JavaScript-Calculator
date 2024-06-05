
const buttons = document.querySelectorAll(".b");
const opn = document.querySelectorAll(".fnb");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".eq");
const result = document.getElementById("result");
const del = document.querySelector(".del")

buttons.forEach((button) => {
    
    button.addEventListener("click", function() {
        console.log("here");
        let data = button.innerText;
        result.value+=data
    })
})

clear.addEventListener("click" , function(){
    result.value=""
})

del.addEventListener("click", function(){
    // console.log(typeof(result.value))
    
    result.value = result.value.substring(0,result.value.length-1)
})

equals.addEventListener("click" , function(){
    result.value = eval(result.value);
    // result.value = "yes";
})

opn.forEach((button) => {
    button.addEventListener("click", function(){
        let data = button.innerText;
        if(result.value == ""){
            if(data=="-")
                result.value+=data
        }else
            result.value+=data
    })
})