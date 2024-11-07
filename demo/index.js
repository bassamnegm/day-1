// console.log("first"); // first 

// function show() {
//     console.log("third");
// }
// // function getData database  conn 
// setTimeout(show, 2000)
// setTimeout(show, 3000)
// setTimeout(show, 1000)  // after 2 sec third
// console.log("second");
// first
// second
// third
// sync  async 
// single threed 
// threed =>   small unit of cpu role for exe any operations
// var obj = {
//     name: "ali",
//     age: 22
// } // heap 
// // obj=10;
// const fs = require("fs"); // import lib filesystem

// console.log("before")

// fs.writeFile("./iti.txt", "hi in file2", function (err, data) {
//     if (err) {
//         console.log("errir")
//     }
//     else {
//         console.log("done");
//     }
// })
// fs.readFile('./iti.tx', function (err, data) {

//     if (err) {
//         console.log(err);
//     }
//     else
//         console.log(data.toString());
// })
// todo list :=> 1- add todo show todos  delete todo by index 

const readline = require('readline');
const fs = require('fs');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function show() {
    console.log("choose option:");
    console.log("1 for add todo");
    console.log("2 for show todos");
    console.log("3 for delete todo");
    input.question("enter your choise:", inputChoise)

}

function inputChoise(data) {
    switch (data) {
        case "1":
            addTodo();
            break;
        case "2":
            showTdoos();
            break;
        case "3":
            deleteTodo();
            break;
        default:
            exit();


    }
}
let arr = [];
function addTodo() {
    input.question('enter your todo', function (data) {
        arr.push(data);
        // arr fromat [] =>> in string
        fs.writeFile('todo.txt', JSON.stringify(arr), function (err) {
            if (err) {
                console.log(err)
            }
            else
                show();
        })

    })
}
function showTdoos() {
    fs.readFile('todo.txt', function (err, data) {
        let arrData = JSON.parse(data)
        for (let val of arrData) {
            console.log(val);
        }
        show();
    })





}
function deleteTodo() {
    input.question('enter your todo need to delete', function (index) {
        // arr.splice(index, 1);
        // console.log("todo is removed");
        // show();
        // read file get arr todos
        // arr.spilce
        // write new arr in same file

    })


}

function exit() {
    input.close();

}

show();

// let nums = [10, 20, 304];

// console.log(nums);

// nums.splice(0, 2);
// console.log(nums);