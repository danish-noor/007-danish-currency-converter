#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow.bold("\n \t Wellcome to 'DANISH' Currency_Converter\n"));


let exchangeRate: any = {
    "PAK": 280, // Pakistan Rupee 
    "USA": 1.00,   // US Dollar 
    "CAN": 1.25,   // Canadian Dollar 
    "GER": 0.85,   // Euro Dollar
    "AUS": 1.35,   // Australian Dollar 
    "JPN": 110.57, // Japanese Yen 
    "IND": 73.50,  // Indian Rupee 
    "CHN": 6.45,   // Chinese Yuan
    "BRA": 5.20,   // Brazilian Real  
    "SAF": 13.75,  // South African Rand 
    "DIN": 75,  // United Arab Emirates Dirham
    "RIY": 74,  // Saudi Riyal
}
let userAns = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"select the currency to convert from:",
        choices:["PAK","USA","CAN","GER","AUS","JPN","IND","CHN","BRA","SAF","DIN","RIY"],

    },
    {
        name:"to_currency",
        type:"list",
        message:"select the currency to convert into:",
        choices:["PAK","USA","CAN","GER","AUS","JPN","IND","CHN","BRA","SAF","DIN","RIY"],
    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount to convert:",
    }
    
]);

let fromAmount = exchangeRate[userAns.from_currency]
let toAmount = exchangeRate[userAns.to_currency]
let amount = userAns.amount

let basedAmount = amount / fromAmount
let convertedAmount = basedAmount * toAmount

console.log(`Converted Amount = ${chalk.green(convertedAmount.toFixed(2))}`);

