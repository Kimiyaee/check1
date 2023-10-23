function gopage() {
    var gmail= document.getElementById("gmail").value
    if (ValidateEmail(gmail)){
        window.location.href="tenks.html"
    }else{
        document.getElementById("err").innerHTML="Valid email required"
    }
        
}
function gopageMobile(){
    var gmail= document.getElementById("gmail").value
    if (ValidateEmail(gmail)){
        window.location.href="tanksMobile.html"
    }else{
        document.getElementById("err").innerHTML="Valid email required"
    }
}
function backMobile(){
    window.location.href="indexMobile.html"
}
function back(){
    window.location.href="index.html"
}
function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}