const usernameArea = document.querySelector('#username');
const passwordArea = document.querySelector('#password');

const usernameLabel = document.querySelector('#usernameL');
const passLabel = document.querySelector('#passL');


// Username area label change on focus
usernameArea.addEventListener('focus', function () {
    document.querySelector('#usernameL').style.top = '5px';
    document.querySelector('#usernameL').style.color = 'red';
    document.querySelector('#usernameL').style.fontSize = '15px';
});

usernameArea.addEventListener('focusout', function () {
    if (usernameArea.value !== '') {
        document.querySelector('#usernameL').style.color = 'green';
    }
    else {
        document.querySelector('#usernameL').style.top = '30px';
        document.querySelector('#usernameL').style.color = 'white';
        document.querySelector('#usernameL').style.fontSize = '18px';
    }
});

// Password area label change on focus
passwordArea.addEventListener('focus', function () {
    document.querySelector('#passL').style.top = '5px';
    document.querySelector('#passL').style.color = 'red';
    document.querySelector('#passL').style.fontSize = '15px';
});

passwordArea.addEventListener('focusout', function () {
    if (passwordArea.value !== '') {
        document.querySelector('#passL').style.color = 'green';
    }
    else {


        document.querySelector('#passL').style.top = '30px';
        document.querySelector('#passL').style.color = 'white';
        document.querySelector('#passL').style.fontSize = '18px';
    }
});

// submit form button ---------------------------

function submitForm(){
    let username = usernameArea.value ;
    let password = passwordArea.value ;
    let notice = document.querySelector(".notice");
    // check username length 
    if((username != "")&(username.length < 6)){
        console.log("This is if statement");
        alert("Username must be at least 6 characters");
    }
    // check password length 
    else if((password != "") & (password.length < 4)){
        console.log("This is second if");
        alert("Password must be at least 4 characters");
    }
    // else {
    //     document.querySelector(".notice").style.display ='block';
    //     document.querySelector(".notice").innerText = "Form submitted successfully.";
    // }
    
    else{
        // display a notice of successful 
        document.getElementById("login-form").addEventListener("submit", function(event) {
            event.preventDefault();
            document.querySelector(".notice").style.display = "block";
            document.querySelector(".notice").innerHTML = "Logged in successfully.";
            usernameArea.value = '' ;
            passwordArea.value = '' ;
        });
        
    }
    

}


