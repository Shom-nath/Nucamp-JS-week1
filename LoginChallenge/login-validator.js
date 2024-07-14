function  loginValidator() {
    let email = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;

    console.log(email);
    console.log(password);

    if(emailCheck(email)){
        console.log("email passed");
        alert("email passed");
        if(passwordCheck(password)){
            console.log("password passed");
            alert("password passed");
        } else {
            console.log("password check failed");
            alert("password check failed");
        }
    }else {
        console.log("email check not passed");
    }

}

function emailCheck(email){  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailRegex.test(email)){
        return true;
    } else {
        return false;
    }

}

function passwordCheck(password){  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    if(passwordRegex.test(password)){
        return true;
    } else {
        return false;
    }

}