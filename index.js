//Variable Declaration
var firstName = 'John';
const user = 'Doe John';
let userName = 'Mike';
let age = 24;
let address = 'Cavitex';

//debugging 
//console.log("Howdy, I'm " + userName + ", " + age + " years old. I live in " + address);
//console.log(`How's it going. I'm ${user}, ${age} years old and I live in ${address}`);

//1. DATA TYPES

    //String
    let dString = "Jimmy Neutron";
    let dStringSingle = 'test@gmail.com';
    // console.log(dString);
    // dString = "Sheen Chavez";
    // console.log(dString);
        //length
        //console.log(dString.length);
        //replace  
        let dStringReplace = dStringSingle.replace("gmail.com", "sdca.edu.ph")
        //indexOf
        let posString = dStringSingle.indexOf("@");
        //slice
        let sliceString = dStringSingle.slice(5, 10);
        //substr
        let subString = dStringSingle.substr(1, 5);
        //Autosuggest email;
        let stringEmail = 'test@hotmail.com';
        let posAt = dStringSingle.indexOf("@");
        let mailSlice = stringEmail.slice(posAt);
        let replaceEmail = stringEmail.replace(mailSlice, "@sdca.edu.ph");
        // console.log(replaceEmail);



    //Integer
        age = 21;

        let ageOfPerson = "24";
        //console.log(24 + Number(ageOfPerson)); //wraps string to int similar with parseFloat
        //parseInt
        //parseFloat
        //Number
        //modulo

    //Boolean
        let isAdmin = true;
        let isLogIn = true;
        let isPaid = false;

    //Null
        let nothing = null;

    //Undefined
        let undefinedVar;
        // console.log(undefinedVar);

    //Symbol
        const fixedValue = Symbol("Test");
        // console.log(fixedValue);

    //BigInt
        let userCode = BigInt(69696969696969696969696969696969696969696969696969696);
        // console.log(userCode);

    //Array 
        let userData1 = ["Jimmy Neutron", 12, true, "Sheen Chavez", false, true];
        let userData3 = ["Jimmy Neutron", 12, true, "Sheen Chavez", false, true];
        // console.log(userData1);
        // console.log(userData1[0]);

        //length
        // console.log(userData1.length);
        //indexOf
        // console.log(userData1.indexOf(true));
        //concat
        let combineUser = userData1.concat(userData3);
        //include
        // console.log(userData1.push("I", "Dig", "It"));
        // console.log(userData1);
        //pop removes teh previous entry or last element in the array
        userData1.pop();
        //shift removes the first element int he array
        userData1.shift();
        //includes check is an item is inside teh array, returns true or false
        // console.log(userData1.includes("Jimmy Neutron"));
        
    //Object
        let userData2 = {
            fName: "Timmy",
            sName: "Turner",
            jAge: 12,
            add: "Dimsdale"
        };

        let keyObject = "add";
        // console.log(userData2);
        // console.table(userData2.fName); //more readable
        // console.table(userData2[keyObject]); //more flexible

    //Date
        const dateToday = new Date();
        // console.log(dateToday.toString());

        const year = dateToday.getFullYear();
        const month = dateToday.getMonth() + 1;
        const day = dateToday.getDate();

        const fullDate = `${year}-${month}-${day}`;
        // console.log(fullDate);

//2. OPERATION AND EXPRESSION
    //equal
    let password = "admin";
    let inputpassword = "";
    //let inputpassword = prompt("Type your password: ");
    //strict equal
    let numberVal = 250;
    let stringValue = "250";
    if (numberVal === stringValue){
        console.log("Same");
    } else {
        console.log("Not Same");
    }
    //not equal
    //greater than
    //greater than or equal
    //less than
    //less than or equal
    //logical AND
    //logical OR
    //logical NOT


//3. CONDITIONAL STATEMENT
    //If-else
        //password condition
        //years of experience
        //pwd discount
        //withdrawal amount


    //switch-case
        //tier- ss,s,a,b,c,d
        //transporation fare/mode = jeep 13, bus 15, aircon-20, minibus-12, grab-200,lrt-15
        

//4. LOOPS AND ITERATION
    //for loops
        //months loop
        //print loop
        //process loop
        

    
    //while loop
        


//5. FUNCTIONS
    //basic function
    //parameterize function
    //using return and function assignment

    //examples
    //additional function

    //create a function that accepts distance(km) as an input, where you calculate the grab fare distance for 10peso per km. The starting fare begins at 200.

    //create a function that accepts two input, the amount tendered(amount due) and a boolean for pwd, compute for the net amount, and return the computed value.

    //create a function that accepts first name and last name, and generate an automatic email for it, using the format 
    //(first letter of the firstname).(lastname)@sdca.edu.ph
    //f.barbon@sdca.edu.ph


//Objects
    //Object structure
    //accessing objects
    //modifying objects
    //adding keys
    //looping objects
    //looping array of objects
    