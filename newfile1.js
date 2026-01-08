console.log(typeof "10" == 10);

//fname = "10";
//+fname;
console.log(typeof("fname"))

let counter = 1
///counter
console.log(++counter)


//conditional statements->

if (0) console.log("inside if");

let age = 18;
if (age > 18){
    console.log("you are Welcomed")
} else if (age == 18){
    console.log("Come Next year")
 } else {
    console.log("You are Underage")
}

//Functions->

function sayHello (fname) {
    console.log(`hello ${fname}`);
}

let fname = "Nimish";

//function calling with 2 ways.
sayHello("Nimish");
sayHello(fname);  //Hello_fname_value

//function ref
sayHello


const sayHelloTwo = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
};

// in this we are giving value to fname only and output should show lname = undefined
sayHelloTwo("Nimish");

//conditional statement can be written in other way

//condition ? if : else
true ? console.log(1) : console.log(0);