/*Validate the password and some 
errors for when the user 
try to submit the form */
function formValidation(){
    //This is for getting the side panel
    var errors= document.querySelector(".miss");
    // Calling the password and re-enter password
    var password= document.getElementbyId("passw").value;
    var repassword= document.getElementbyId("repassw").value;
    var h4 = document.createElement("h4");
    errors.innerHTML = "";
    h4.appendChild(document.createTextNode("Please Re-Check"));
    //Checking if password match with the re-type one 
    if(password != repassword){
        errors.appendChild(h4);
        errorMess= document.createTextNode("Password does not match");
        errors.appendChild(errorMess);
        return false;
        //cheking for password length, contains character and upper case
    }else if(password.length!= 8 || password.search(/[A-Z]/i) != 0 || password.search(/\d/) == -1 ||password.search(/[A-Z]/) == -1){
        errors.appendChild(h4);
        errorMess= document.createTextNode("Password must be at least 8 characters long, must start with a character, must have a digit and 1 uppercase");
        errors.appendChild(errorMess);
        return false;
    }else{
        return true;
    }
}

// Check if the current input is valid
function isValid(){
    // This is for getting the side panel
    var errors = document.querySelector(".miss");
    // This is for getting inavlid focus field
    var inv = document.querySelector("input:focus:invalid");
    // This is for getting the focus field
    var foc = document.querySelector("input:focus");
    // This is for reseting the side panel
    errors.innerHTML = "";
    var h4 = document.createElement("h4");
    h4.appendChild(document.createTextNode("Please Re-Check"));
    var h3 = document.createElement("h3");

    //Checking again for the password
    if (inv == null && foc != null){
        if(foc.name != "pass" && foc.name != "repass"){
            h3.appendChild(document.createTextNode("Correct Format"));
            errors.appendChild(h3);
        }else{
            // Check if the password is correct
            if(foc.name == "pass" && (foc.value.length != 8|| foc.value.search(/[A-Z]/i) != 0 || foc.value.search(/\d/) == -1 || foc.value.length(/[A-Z]/) == -1)){
                errors.appendChild(h4);
                errorMess= document.createTextNode("Password must be at least 8 characters long, must start with a character, must have a digit and 1 uppercase");
                errors.appendChild(errorMess);
                //check if the same password type as retype password
            }else if(document.getElementById("passw").value != foc.value){
                errors.appendChild(h4);
                errorMess = document.createTextNode("Password does not match");
                errorss.appendChild(errorMess);
                //else it is valid
            }else{
                h3.appendChild(document.createTextNode("Correct Format"));
                errors.appendChild(h3);
            }  
        }
    }else if(foc != null){
        errors.appendChild(h4);
        var errorMess;
        //If theres nothing it will show the text
        if(foc.value.trim() == ""){
            errorMess = document.createTextNode("This field is empty");
            errors.appendChild(errorMess);
        }else{
            // Display different messages for the current input
            switch(foc.name){
                case "streetnam":
                    errorMess= document.createTextNode("Street cannot contain digits");
                    errors.appendChild(errorMess);
                    break;
                case "city":
                    errorMess= document.createTextNode("City must contain only letters");
                    errors.appendChild(errorMess);
                    break;
                case "postalcode":
                    errorMess= document.createTextNode("Postal Code should follow this format (Letter Digit Letter Digit Letter Digit)");
                    errors.appendChild(errorMess);
                    break;
                case "phonenum":
                    errorMess= document.createTextNode("Phone Number should follow this format ###-###-####");
                    errors.appendChild(errorMess);
                    break;
                case "email":
                    errorMess= document.createTextNode("Invalid Email");
                    errors.appendChild(errorMess);
                    break;
                case "username":
                    errorMess= document.createTextNode("Username must start with a letter, must have at least 6 characters");
                    errors.appendChild(errorMess);
                    break;
                default:
                    break;
            }
        }
    }

}

