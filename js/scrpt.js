//ini script js

let user = prompt("Siapakah nama anda?","");

function replaceName(){
    let user = prompt("Siapakah nama anda?","");
    document.getElementById("user").innerHTML = user
}



function validateForm(){
    const name = document.forms['messages-form']['full-name'].value;
    const birthDate = document.forms['messages-form']['birth-date'].value;
    const gender = document.forms['messages-form']['gender'].value;
    const messages = document.forms['messages-form']['messages'].value;

    if (name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("Tidak boleh ada yang kosong");
        return false;
    }
    setSenderUI(name, birthDate, gender, messages);

    return false;

    console.log(validateForm);
}

function setSenderUI(name, birthDate, gender, messages){
    document.getElementById('sender-full-name').innerHTML = name;
    document.getElementById('sender-birth-date').innerHTML = birthDate;
    document.getElementById('sender-gender').innerHTML = gender;
    document.getElementById('sender-messages').innerHTML = messages;
}