//this function will start when loading
window.onload = function() {
    
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    const empty = isEmpty(user);
    


    if(empty == false){
        let name = document.getElementById('name').innerHTML=`${user.first_name } ${user.last_name } `;
        let description = document.getElementById('description').innerHTML= user.description;
        let address = document.getElementById('address').innerHTML= user.address;
        let phoneList = document.getElementById('phone-list');
        phoneList.innerHTML= user.phone_numbers.map(function (phones) {
            return `<li> ${phones } </li>`;
            
        }).join('');
    
        let relatives = document.getElementById('relatives');
        relatives.innerHTML = user.relatives.map(function (names) {
            return `<p class="user-des relatives"> ${names} </p>`;
        }).join('');
    }else{
        let searchResults = document.getElementById('search-results');
        searchResults.innerHTML = ""
        let h1 = document.createElement("h1");
        h1.innerHTML="User not found please try agian"
        h1.classList.add("noFound");
        searchResults.appendChild(h1);
    }
};

const isEmpty = (obj) => {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}