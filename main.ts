#! /usr/bin/env node 

import inquirer from "inquirer";

let myBalance: number = 10000; // in dollar
let myPin: number = 8080; // in dollar

let pinAnswer =  await inquirer.prompt(
    [   
        {

          name:"pin",
          message: "Enter your pin:",
          type: "number",

        }
    ]
);

// console.log(pinAnswer.pin);

if (pinAnswer.pin === myPin ){
    console.log("Congratulations Your pin is correct!!!");
    
    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message: "please select option",
                type: "list",
                choices:["withdraw","check balance" ]              

            }

        ]
    );

    console.log(operationAns);

    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount : ",
                    type: "number"
                }
            ]
        );
        // =, -=, +=
        myBalance -= amountAns.amount;

        console.log("Your remaining balance is: " + myBalance );

    } 
    else if(operationAns.operation === "check balance"){
      console.log("Your balance is : " + myBalance);
    }
}

else {
    console.log("Please enter correct pin ");
}