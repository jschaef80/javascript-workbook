window.addEventListener("load", getAPI)

function getAPI (){
   fetch("https://randomuser.me/api/?results=50")
   .then((res)=>res.json())
   .then((data)=> {
      let output = '<h2> API Post </h2>';
      data.results.forEach(function(post){
         output += `
         <ul>
            <li><button onclick="displayData('${post.login.username}')">More Info</button></li>
            <li>Name: ${post.name.first} ${post.name.last} </li>
            <li><img src="${post.picture.medium}" /></li>
            <li class="${post.login.username}">Age: ${post.dob.age}</li>
            <li class="${post.login.username}">Address: ${post.location.street}<br>City: ${post.location.city}<br>State: ${post.location.state}</li>
            <li class="${post.login.username}">Cell: ${post.cell}</li>
            </ul>
            <style>.${post.login.username}{display: none}</style>
         `
      })
      document.getElementById('output').innerHTML = output;
   }).catch((err)=> console.log(err))
} 

function displayData(extraInfo){
var classObj = document.getElementsByClassName(extraInfo);
   for (var i = 0; i < classObj.length; i++) {
      if (classObj[i].style.display == "block"){
         classObj[i].style.display = "none";
      } else {
         classObj[i].style.display = "block";
      }
   }
}