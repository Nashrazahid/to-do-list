#! /usr/bin/env node
import inquirer from "inquirer";
let tudos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what do you want to add in your todos?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "do you want to add more?",
            default: "false"
        }
    ]);
    tudos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(tudos);
}
