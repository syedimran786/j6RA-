// let numbers=[2,56,33,43,45,52,81,87,68,63,22,44];

// console.log(numbers);

// for(let number of numbers) {
//     console.log(number)
// }

// for(let number in numbers) {
//     console.log(number)
// }

// function add(a,b)
// {
//     console.log(a(2,3));
//     // console.log(b);
//     console.log(a(4,5)+b)
// }


// add((p,q)=>p+q,7);



//!let numbers=[2,56,33,43,45,52,81,87,68,63,22,44];
// console.log("--------------------------------------")
// numbers.forEach((arrayElement,indexValue,wholeArray)=>
// {
//     // console.log(arrayElement)
// //    console.log(indexValue)
//     console.log(wholeArray)
// })

// for(let i=0;i<numbers.length;i++)
// {
//     if(numbers[i]%2===0)
//     {
//         console.log(numbers[i])
//     }
// }

// let evenNumbers=numbers.filter((arrayElement)=>
// {
//     return arrayElement%2!==0;
// });

// console.log(evenNumbers);

//! Strings and Strings Methods 
// Collection of 2 or more characters enclosed inside "",'',``

let s=`Hello World`;

console.log(s);
console.log(s.length);

// console.log(s.toUpperCase());
// console.log(s.toLowerCase());


//! substr(arg1,arg2);
//? 1.Used to fetch the character from the string
//? 2.It accepts 2 arguments
//? 3.The first argument is Index Position from where we want fetch the characters
//? 4.The second  argument is number of characters to be fetched

// console.log(s.substr(2,5))
// console.log(s.substr(1,2))

//! slice(arg1,arg2)
//? 1.Used to fetch part of the string
//? 2.it Accepts 2  arguments
//? 3.The first argument is start Index Position from where we want fetch the string
//? 4.The second argument is end Index Position till where we want fetch the string
//? 5.it always ignores the string or character which is present at end index
//? 6.It supports negative index values
//? 7.if end index is not present in a string then it returns empty string
//? 8.If we don't pass end index then this method cuts whole string from the start index


// console.log(s.slice(2,6));
// console.log(s.slice(1,7));
// console.log(s.slice(-10,8));
// console.log(s.slice(-7,3));
// console.log(s.slice(2));

//! substring(arg1,arg2)
//? 1.Used to fetch part of the string
//? 2.it Accepts 2  arguments
//? 3.The first argument is start Index Position from where we want fetch the string
//? 4.The second argument is end Index Position till where we want fetch the string
//? 5.it always ignores the string or character which is present at end index
//? 6.It doesn't supports negative index values
//? 7.if end index is not present in a string then it returns empty string
//? 8.If we don't pass end index then this method cuts whole string from the start index

// console.log("---------------Performing substring--------------")
// console.log(s.substring(2,6));
// console.log(s.substring(1,7));
// console.log(s.substring(-10,8));
// console.log(s.substring(-7,3));
// console.log(s.substring(2));    


//! indexOf(arg1,arg2)
//? 1.Used to fetch index value of part of a string
//? 2.It accepts 2 arguments
//? 3.First argument is part of string
//? 4.Second argument is index position from where we want the index value  part of string
//? 5.If we don't pass second argument by default it fetches the index value of first occurrenc
//? 6.If the part of the string(first argument) is not present then it returns -1

// console.log(s.indexOf("l",5));
// console.log(s.indexOf("l",3));
// console.log(s.indexOf("l"));
// console.log(s.indexOf("z"));
// console.log(s.indexOf("el"));

//! lastIndexOf(arg1)
//? 1.Used to fetch  index value of part of a string(last occurrence's)
//? 2.It accepts 1arguments
//? 3.First argument is part of string
//? 4.If the part of the string(first argument) is not present then it returns -1

// console.log(s.lastIndexOf("l"))
// console.log(s.lastIndexOf("o"))
// console.log(s.lastIndexOf("Z"))


// for(let i=0;i<s.length;i++)
// {
//     if(s[i]=="l")
//     {
//         console.log(s[i]+": "+i)
//     }
// }

//! includes(arg1)
//? 1.used to check whether the part of string is present or not in a given string
//? 2.It accepts One Argument 
//? 3.The argument is part of string
//? 4.It returns Boolean Value
//? 5.If the part of string is present then it returns true else returns false

// console.log(s.includes("s"));
// console.log(s.includes("hell"));
// console.log(s.includes("Hell"));

//! startsWith(arg1)
//? 1.used to check whether the string is starting with some string or not
//? 2.It accepts One Argument 
//? 3.The argument is string
//? 4.It returns Boolean Value
//? 5.If it is starting with some string then it returns true else returns false

// console.log(s.startsWith("s"));
// console.log(s.startsWith("hell"));
// console.log(s.startsWith("Hell"));

//! endsWith(arg1)
//? 1.used to check whether the string is ending with some string or not
//? 2.It accepts One Argument 
//? 3.The argument is string
//? 4.It returns Boolean Value
//? 5.If it is ending with some string then it returns true else returns false

// console.log(s.endsWith("s"));
// console.log(s.endsWith("hell"));
// console.log(s.endsWith("Hell"));
// console.log(s.endsWith("d"));


//! concat(arg1,arg2,......)
//? 1.Used join 2 or more strings
//? 2.It accepts number of arguments
//? 3.The arguments are new string to be joined


// console.log(s.concat(" Hello Bangalore"," Hello India"));

//! repeat(arg1)
//? 1.used to repeat the given string
//? 2.It accepts 1 argument and  the argument is number type you want to repeat

// console.log(s.repeat(4));

//! replace(arg1,arg2)
//? 1.Used to replace part of old string with new string
//? 2.It accepts 2 arguments 
//? 3.First argument is part of old string
//? 4.Second argument is new string to be replaced
//? 5.It replaces only first occurrence of string
//? 6.If we want to replace all the occurrences  pass first argument as regular expression

// console.log(s.replace("l","X"));
// console.log(s.replace(/l/g, "X"));

//! charAt(arg1)
//? 1.It is used to fetch character present at particular index
//? 2.It accepts 1 argument
//? 3.The argument is index value
//? 4.It return the character present at particular index

// console.log(s.charAt(3));
// console.log(s.charAt(6));

// m1();
//! charCodeAt(arg1)
//? 1.It is used to fetch ASCII value of character present at particular index
//? 2.It accepts 1 argument
//? 3.The argument is index value
//? 4.It return the ASCII value of  character present at particular index

// console.log(s.charCodeAt(3));
// console.log(s.charCodeAt(6));
// console.log(s.charCodeAt(5));
// console.log("%".charCodeAt(0))
// console.log("A".charCodeAt(0))

//! String.fromCharCode(arg1)
//? 1.Used convert ASCII value to actual character
//? 2.It accepts 1 argument
//? 3.The argument is ASCII value

// console.log(String.fromCharCode(65));
// console.log(String.fromCharCode(37));

let s1="     Hello     Bangalore     ";
console.log(s1);

//! trim()
//? 1.Used to remove the spaces from starting and ending of a string
//? 2.It has zero arguments

// console.log(s1.trim());

//! split(arg1)
//? 1.used to split the string when it finds some character or string
//? 2.It Accepts 1 argument
//? 3.the argument is string or character(argument of type string)
//? 4.If we don't pass any argument whole string will be splitted 
//? 5.If we pass empty string as argument then every character of the string will be splitted 
//? 6.The splitted character or string will be stored inside an array as elements


// console.log(s.split());
// console.log(s.split(""));
// console.log(s.split("l"));
// console.log(s.split("o"))


//! Hoisting
//? The Process of Moving variable declaration and function declarations
//? to the top of its scope before execution of a program

console.log(a);
let a="leela";
console.log(a);

// function m1()
// {
//     // var b
//     console.log(b)
//     var b="laila";
//     console.log(b);
// }

