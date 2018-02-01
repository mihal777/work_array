//our data
let vacancies = {
    backEndDeveloper: {
        html: 8,
        php: 10,
        laravel: 9,
        javaScript: 6,
        git: 8,
        sql: 9
    },
    frontEndDeveloper: {
        html: 9,
        css: 8,
        javaScript: 8,
        git: 6,
        angular: 5
    },
    htmlDeveloper: {
        html: 10,
        css: 9,
        sass: 9,
        git: 6,
        jQuery: 8
    },
    nodeJsDeveloper: {
        html: 7,
        nodeJs: 9,
        npm: 8,
        expressJs: 9,
        mongoDB: 8,
        sql: 7
    },
    angularDeveloper: {
        angular: 10,
        javaScript: 9,
        mongoDB: 8,
        git: 8,
        html: 8,
        typeScript: 10,
    },
    fullStackDeveloper: {
        javaScript: 10,
        php: 10,
        nodeJs: 10,
        typeScript: 10,
        html: 10,
        angular: 10,
        react: 10,
        mongoDB: 10,
        sql: 10
    }
}

var skills = []; //array of skills in vacancies
var str = new String(prompt()) //{"frontEndDeveloper": 2, "angularDeveloper": 1}

// general function
function getStatistic(obj) {
    var input_data = JSON.parse(str);
///////////////////////////////////////////////// make list of all skills
    for (x in vacancies) {
        for (y in vacancies[x]) {
            if (skills.indexOf(y) == -1) {
                skills.push(y)
            }
        }
    }

///////////////////////////////////////////////// make calculations
    var result_arr = fillArray(0, skills.length);

    for (x in input_data) {
        for (y in vacancies[x]) {
            result_arr[skills.indexOf(y)] += input_data[x] * vacancies[x][y];
        }
    }

///////////////////////////////////////////////// 
    //sorting
    bubbleSort(result_arr, skills);
    var answer = [];
    for (let index = 0; index < result_arr.length; index++) {
        if (result_arr[index] == 0) break;
        answer.push(skills[index] + "(" + result_arr[index] + ")");
    }

/////////////////////////////////////////////////
    alert(answer.toString());
}
// add Listener
document.getElementById("mybutton").addEventListener("click", function () {
    getStatistic();
});



//create array with 0s
function fillArray(value, len) {
    if (len == 0) return [];
    var a = [value];
    while (a.length * 2 <= len) a = a.concat(a);
    if (a.length < len) a = a.concat(a.slice(0, len - a.length));
    return a;
}


//sorting
function bubbleSort(a, b) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;


                var temp = b[i];
                b[i] = b[i + 1];
                b[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    a = a.reverse();
    b = b.reverse();
}  