document.getElementById('logButt').addEventListener('click', function(){
    ex1(document.getElementById('userLog').value, document.getElementById('passLog').value);
})

function ex1(userName, password) {
    if(userName === 'admin' && password === '123456') {
        document.getElementById('logMsg').textContent = 'התחברת בהצלחה!';
    }
    else {
        document.getElementById('logMsg').textContent = 'שם המשתמש או הסיסמה אינם נכונים';       
    }
}