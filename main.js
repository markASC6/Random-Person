let rand = Math.floor(Math.random()*15);

let main = document.getElementsByClassName("Text")

let randPicture = data.results[rand].picture.large;
let profile = document.getElementsByClassName("pic_1")
profile[0].setAttribute("src", randPicture)

let randTitle = data.results[rand].name.title;;
let randFirstName = data.results[rand].name.first;
let randLastName = data.results[rand].name.last;
let randFullName = `${randTitle} ${randFirstName} ${randLastName}`


let pName = document.createElement("p")
pName.className = "Name"
pName.innerText = randFullName
main[0].appendChild(pName);

let randCity = data.results[rand].location.city;
let randState = data.results[rand].location.state;
let randLocation = `${randCity}, ${randState}`

let pLocation = document.createElement("p")
pLocation.className = "Location"
pLocation.innerText = randLocation
main[0].appendChild(pLocation);

let randAge = data.results[rand].dob.age;
let pAge = document.createElement("p");
pAge.className = "Age"
pAge.innerText = randAge
main[0].appendChild(pAge);

let randNum = data.results[rand].phone;
let pNum = document.createElement("p");
pNum.className = "Num";
pNum.innerText = randNum
main[0].appendChild(pNum);

let randGen = data.results[rand].gender;
let pGen = document.createElement("p");
pGen.className = "Gender";
pGen.innerText = randGen;
main[0].appendChild(pGen);

let randEmail = data.results[rand].email;
let pEmail = document.createElement("p");
pEmail.className = "Email";
pEmail.innerText = randEmail;
main[0].appendChild(pEmail);

