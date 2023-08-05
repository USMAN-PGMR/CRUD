// ----year
var now= new Date();
var year= now.getFullYear();
document.getElementById("year").innerText=year;

// --------get the vale 
const getValue =(id)=>{
    return document.getElementById(id).value
}

//---------output function
const showOutput = (output) =>{
    document.getElementById('output').innerHTML=output;
}
//-------- clear inputfields
const clearInput=()=>{
    document.getElementById("name").value=" ",
    document.getElementById("city").value=" ";
    document.getElementById("country").value=" ";

}

// ---------show toastify-----
const showToastify=(msg,color)=>{
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:color, //"linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
// ------------

// var users= JSON.parse(localStorage.getItem("users")) || []
// var user={ name,city,country}

// ----------handle creater----------
const handleCreate=()=>{
    event.preventDefault();
    let name=getValue("name");
    let city=getValue("city");
    let country=getValue("country");
    
    name=name.trim();
    city=city.trim();
    country=country.trim();
    
    if (name.length < 3)  return showToastify("Please Enter your Name Correctly","linear-gradient(to right, pink, red)")
    if (city.length < 3)  return  showToastify("Please Enter your City Correctly","linear-gradient(to right, pink, red)")
    if (country.length < 3)  return showToastify("Please Enter your Country Correctly","linear-gradient(to right, pink, red)")

    var user={ name,city,country}
    user.id=Math.random().toString(36).slice(2)

    var users= JSON.parse(localStorage.getItem("users")) || []
    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    // console.log("user has been adedd")
    showToastify("A new user has been added","linear-gradient(to right, aqua, #38ef7d")
clearInput();

}

// ----------handleRead------------
const handleRead=()=>{
// var users= JSON.parse(localStorage.getItem("users")) || []

    let users=JSON.parse(localStorage.getItem("users"))
if(!users){
return  showToastify("There is no user available","linear-gradient(to right, pink, red)")
}else{
    console.log(users)
    showTable()
}
// console.log(users)
// showTable()

}

// -----------handleupdate---------
const handleUpdate=()=>{
    let userData=JSON.parse(localStorage.getItem("users"));
    console.log(userData)


    let name=getValue("name");            // get the new data from user
    let city=getValue("city");
    let country=getValue("country");
    
    name=name.trim();
    city=city.trim();
    country=country.trim();
    
    if (name.length < 3)  return showToastify ("Please Enter your Name Correctly","linear-gradient(to right, pink, red)")
    if (city.length < 3)  return  showToastify("Please Enter your City Correctly","linear-gradient(to right, pink, red)")
    if (country.length < 3)  return showToastify("Please Enter your Country Correctly","linear-gradient(to right, pink, red)")

    let newData={ name,city,country}
    newData.id=Math.random().toString(36).slice(2)
    console.log(newData)

    // let newData=handleCreate();
    // let userData={name:"ahmad",city:"sangla",country:"pak"}
    // let newData={name:"ahmad",city:"sangla hill",country:"pak"}
    let updatedData={...userData, ...newData}
console.log(updatedData)
    // showTable for updated data
    let updateArry=[]
    updateArry.push(updatedData)
    localStorage.setItem("users",JSON.stringify(updateArry))
    var users=updateArry;
    let tabStringCode= '<div class="table-responsive"><table class="table">';
let tableHead='<thead><tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">City</th><th scope="col">Country</th><th scope="col">ID</th></tr></thead>';
let tabEndCode='</table></div>';

let tableBody="";
for(let i=0;i<users.length;i++){
tableBody +='<tr><th scope="row">'+(i+1)+ '</th><td>'+(users[i].name)+'</td><td>'+(users[i].city)+'</td><td>'+(users[i].country)+'</td><td>'+(users[i].id)+'</td><tr>'
}
let table=tabStringCode+tableHead+'<tbody>'+tableBody+'</tbody>'+tabEndCode;
 showOutput(table)
 showToastify("User has been updated successfully","linear-gradient(to right, aqua, #38ef7d");
}


//-----------hadleDelete--------
const handleDelete=()=>{
    localStorage.removeItem("users");
    // console.log("user is deleted")
    showToastify("User has been Deleted","linear-gradient(to right, aqua, #38ef7d");
showOutput("<div class='pt-4' style='color:red;font-family: cursive'>User has been Deleted &#10004;</div>")
}

//-------- show table------
function showTable(){
var users= JSON.parse(localStorage.getItem("users")) 
    
    if(!users.length){
        showToastify("There is no single user available." ,"linear-gradient(to right, pink, red)");
    return;
    }

    let tabStringCode= '<div class="table-responsive"><table class="table">';
let tableHead='<thead><tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">City</th><th scope="col">Country</th><th scope="col">ID</th></tr></thead>';
let tabEndCode='</table></div>';

let tableBody="";
for(let i=0;i<users.length;i++){
tableBody +='<tr><th scope="row">'+(i+1)+ '</th><td>'+(users[i].name)+'</td><td>'+(users[i].city)+'</td><td>'+(users[i].country)+'</td><td>'+(users[i].id)+'</td><tr>'
}
let table=tabStringCode+tableHead+'<tbody>'+tableBody+'</tbody>'+tabEndCode;
 showOutput(table)
}
