let emailUrl  = "https://cors-anywhere.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?email=";
let mailIsCorrect = false; 

 //Calls to the api  checks first if the email is correct to use.
 const searchEmail =  async() => {
   let inputEmail = document.getElementById('inputEmail').value;



   if(mailIsCorrect == true){
    emailUrl = emailUrl + inputEmail;
    console.log(emailUrl);
    const response = await fetch(emailUrl)
        .then(response => response.json())
        .then(data => localStorage.setItem('user', JSON.stringify(data)));
        location.replace("/results.html");
   }


}

// Email validaton using a simple regex to check if the email is correct and adding classes for the input
const emailValidator = () => {
    let inputEmail = document.getElementById('inputEmail');

    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputEmail.value.match(mailformat)){
         mailIsCorrect = true;
         inputEmail.classList.add("good");
         inputEmail.classList.remove("error");
    }else{
         mailIsCorrect = false; 
         inputEmail.classList.remove("good");
         inputEmail.classList.add("error")
    }
}
