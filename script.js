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

document.getElementById('namesBtn').addEventListener('click', function(){
    ex2();
})

function ex2() {
    var names = Array('אריאל', 'לילך', 'ברק', 'נדב', 'כפיר');
    document.getElementById('names').textContent = '';
    for (i = 0; i < names.length; i++) {
        document.getElementById('names').textContent += names[i] +', ';
        console.log(names[i]);
    }
}
