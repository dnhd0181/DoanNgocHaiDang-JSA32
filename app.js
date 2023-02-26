var username = document.getElementById('regname');
var pw = document.getElementById('regpass');

// Register button

function store() {
    if (username.value == 0 && pw.value == 0) {
        alert("Please fill in all fields");
    } else if (username.value == 0) {
        alert("Please fill in username");
    }else if (pw.value == 0) {
        alert("Please fill in password");
    } else {
    localStorage.setItem('username', username.value);
    localStorage.setItem('pw', pw.value);
    alert("Registration successful");
}}
function check() {

    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('pw');

    var logName = document.getElementById('logname');
    var logPw = document.getElementById('logpass');
    
    if(logName.value == storedName && logPw.value == storedPw) {
        alert('Login successful.');
    }else {
        alert('Incorrect password or username.');
} }
