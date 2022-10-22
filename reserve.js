var err;
var fullname, type, quantity, address, package;

function check_alphabet(name){
    for(let i=0; i<name.length; i++){
        if(name.charAt(i) < 'a' || name.charAt(i) > 'z'){
            // kalau bukan dari a-z
            if(name.charAt(i) < 'A' || name.charAt(i) > 'Z'){
                // kalau bukan dari A-Z
                return false;
            }
        }
    }
    return true;
}

function validate_name(){
    fullname = document.getElementById('input_name').value;
    if(fullname.length < 5){
        error.innerHTML = "Name Must Be Minimum 5 Characters long";
        return false;
    }
    else if(check_alphabet(fullname) == false){
        error.innerHTML = "Name Must Be Alphabets Only!"
        return false;
    }
    return true;
}

function validate_type(){
    type = document.getElementById('input_candytype').value
    if(type == ""){
        err.innerHTML = "Candy Type Must Be Chosen!"
        return false;
    }
    return true;
}

function validate_quantity(){
    quantity = document.getElementById('input_quantity').value
    if(isNaN(quantity)){
        err.innerHTML = "Quantity Must Be a Number"
        return false;
    }
    else if(quantity < 1 || quantity > 12){
        err.innerHTML = "Quantity Must Be Between 1 and 12"
        return false;
    }
    return true;
}

function validate_package(){
    var reg = document.getElementById('package_reguler').checked;
    var exc = document.getElementById('package_exclusive').checked;

    if(!reg && exc == false){
        err.innerHTML = "Package Must be Chosen!";
        return false;
    }
    else{
        if(reg){
            package = "Regular"
        }
        else if(exc){
            package = "exclusive"
        }
    }
    return true;
}

function validate_address(){
    address = document.getElementById('input_address').value;
    var check = address.split(' ')

    if(check.length < 5){
        err.innerHTML = "Address Must Have Minimal 5 Words!"
        return false;
    }
    return true;
}

function validate_agree(){
    agree = document.getElementById('input_agree').checked;
    if(!agree){
        err.innerHTML = "You must agree"
    }
}

function validate(){
    err = document.getElementById('error')
    if(validate_name() == false){
        return
    }
    else if(validate_type() == false){
        return
    }
    else if(validate_quantity() == false){
        return
    }
    else if(validate_package() == false){
        return
    }
    else if(validate_address() == false){
        return
    }
    else if(validate_agree() == false){
        return
    }
    else{
        err.innerHTML = ""
        
        var orderconfirm = 
        'Name : ' + fullname + '\n' +
        'candy type : ' + type + '\n' +
        'quantity : ' + quantity + '\n' +
        'package : ' + package + '\n' +
        'address : ' + address + '\n' 

        if(confirm(orderconfirm)){
            //kalau di confirm
            var add_msg = prompt("please input if you have additional message")
            alert("thankyou")
        }
    }
}

function btn_reset(){
    err.innerHTML = ""
    alert("Form Reset")
}