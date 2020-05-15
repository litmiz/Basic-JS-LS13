// Ex1

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

// Ex2

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

// Ex3

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

// Ex4

document.getElementById('calcBtn').addEventListener('click', function () {
    ex4(Number(document.getElementById('stuNum').value));
})

function ex4(stuNum) {
     var firstAidKit = Math.floor(stuNum / 30);
     if(stuNum % 30 > 0) {
         firstAidKit++;
     }
     var guard = Math.floor(stuNum / 50);
     if(stuNum % 50 > 0) {
         guard++;
     }
     var medic = Math.floor(stuNum / 100);
     if(stuNum % 100 > 0) {
         medic++;
     }
    document.getElementById('calcmsg').textContent = `כמות החובשים שצריך היא ${medic}, כמות המאבטחים שצריך היא ${guard} וכמות ערכות העזרה ראשונה היא ${firstAidKit}`;
}

// Ex5

document.getElementById('minBtn').addEventListener('click', function () {
    ex5(Number(document.getElementById('minNum').value));
})

function ex5(minNum) {
    var hours = Math.floor(minNum / 60);
    var mins = minNum % 60;
    document.getElementById('minMsg').textContent = `מספר השעות הוא ${hours}. מספר הדקות הוא ${mins}.`;
}