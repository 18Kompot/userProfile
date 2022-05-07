fetch("http://localhost:3000/profile")
.then(userInfo=> userInfo.json())
.then(userInfoJSON=> display(userInfoJSON));

function display(userData){
    document.getElementById("printUserName").innerHTML = userData.username;
    document.getElementById("printFullName").innerHTML = userData.fullname;
    document.getElementById("printLanguages").innerHTML = userData.languages;
    document.getElementById("printRank").innerHTML = userData.rank;
}