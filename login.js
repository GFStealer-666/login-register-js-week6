window.onload = loginLoad;
function loginLoad(){
	var backButton = document.getElementById("back");
	backButton.onclick = backToRegister;

	var logButton = document.getElementById("login");
	logButton.onclick = checkLogin;
}

function checkLogin(){
	
	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	const password = urlParams.get('password');

	var loginusername = document.forms["myLogin"]["username"].value;
	var loginpassword = document.forms["myLogin"]["password"].value;


	if(username == loginusername && password == loginpassword){
		alert("Login completed! , Welcome to the websites");
		return true;
	}
	else{
		alert("Invalid Username or Password , Please try again");
		return false;
	}

	


}

function backToRegister(){
	location.href = 'register.html';
}

			