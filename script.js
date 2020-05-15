document.getElementById('logButt').addEventListener('click', function () {
    ex1(document.getElementById('userLog').value, document.getElementById('passLog').value);
})

function ex1(userName, password) {
    if (userName === 'admin' && password === '123456') {
        document.getElementById('logMsg').textContent = 'התחברת בהצלחה!';
    }
    else {
        document.getElementById('logMsg').textContent = 'שם המשתמש או הסיסמה אינם נכונים';
    }
}

document.getElementById('namesBtn').addEventListener('click', function () {
    ex2();
})

function ex2() {
    var names = Array('אריאל', 'לילך', 'ברק', 'נדב', 'כפיר');
    document.getElementById('names').textContent = '';
    for (i = 0; i < names.length; i++) {
        document.getElementById('names').textContent += names[i] + ', ';
        console.log(names[i]);
    }
}

document.getElementById('threeBtn').addEventListener('click', function () {
    ex3(3);
})

document.getElementById('fourBtn').addEventListener('click', function () {
    ex3(4);
})

document.getElementById('evenBtn').addEventListener('click', function () {
    ex3(2);
})

function ex3(divBy) {
    var nums = Array(10);
    document.getElementById('numMsg').textContent = '';
    for (i = 0; i < nums.length; i++) {
        nums[i] = i + 1;
    }
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % divBy == 0) {
            document.getElementById('numMsg').textContent += nums[i] + ', ';
        }
    }

}