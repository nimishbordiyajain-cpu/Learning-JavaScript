// # Assignment

// - **Exercise: Level 1**
//     1. Declare a variable named challenge and assign it to an initial value **'50 Days Of JavaScript'**.
//     2. Print the string on the browser console using **console.log()**
//     3. Print the **length** of the string on the browser console using *console.log()*
//     4. Change all the string characters to capital letters using **toUpperCase()** method
//     5. Change all the string characters to lowercase letters using **toLowerCase()** method
//     6. Cut (slice) out the first word of the string using **substr()** or **substring()** method
//     7. Slice out the phrase *Days Of JavaScript* from 5*0 Days Of JavaScript*.
//     8. Check if the string contains a word **Script** using **includes()** method
//     9. Split the **string** into an **array** using **split()** method
//     10. Split the string 50 Days Of JavaScript at the space using **split()** method
//     11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' **split** the string at the comma and change it to an array.
//     12. Change 50 Days Of JavaScript to 50 Days Of Python using **replace()** method.
//     13. What is character at index 15 in '50 Days Of JavaScript' string? Use **charAt()** method.
//     14. What is the character code of J in '50 Days Of JavaScript' string using **charCodeAt()**
//     15. Use **lastIndexOf** to determine the position of the last occurrence of **a** in 50 Days Of JavaScript.
//     16. Use **indexOf** to find the position of the first occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
//     17. Use **lastIndexOf** to find the position of the last occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
//     18. Use **search** to find the position of the first occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
//         1. Use **indexOf** to determine the position of the first occurrence of **a** in 50 Days Of JavaScript
//     19. Use **trim()** to remove any trailing whitespace at the beginning and the end of a string.E.g ' 50 Days Of JavaScript '.
//     20. Use **startsWith()** method with the string *50 Days Of JavaScript* and make the result true
//     21. Use **endsWith()** method with the string *50 Days Of JavaScript* and make the result true
//     22. Use **match()** method to find all the **a**’s in 50 Days Of JavaScript
//     23. Use **concat()** and merge '50 Days of' and 'JavaScript' to a single string, '50 Days Of JavaScript'
//     24. Use **repeat()** method to print 50 Days Of JavaScript 2 times




//1
let challenge = "50 days of Java Script";
//2
console.log(challenge);
//3
console.log(challenge.length);
//4
console.log(challenge.toLowerCase);
//5
console.log(challenge.toUpperCase);
//6
console.log(challenge.substring(0, 2));
//7
console.log(challenge.substring(3));
//8
console.log(challenge.includes("Script"));
//9
console.log(challenge.split(" "));
//10
console.log(challenge.split(""));
//11
let social = "Facebook, Google, Microsoft, Apple, Oracle, IBM, Tesla";
console.log(social.split(","));
//12
console.log(challenge.replace("javascipt", "python"));
//13
console.log(challenge.charAt(15));
//14
console.log(challenge.charCodeAt("J"));
//15
console.log(challenge.lastIndexOf("a"));
//16
let challenge2 = "You cannot end a sentence with because because because is a conjunction";
console.log(challenge2.indexOf("because"));
//17
console.log(challenge2.lastIndexOf("because"))
//18
console.log(challenge2.search("because"));
//19
console.log(challenge2.trim());
//20
console.log(challenge.startsWith("50"));
//21
console.log(challenge.endsWith("Script"));
//22
console.log(challenge.match("a"));
//23
let line1 = "50 Days of";
let line2 = " Java Script";
let result = line1.concat(line2);
console.log(result);
//24
console.log(challenge.repeat(2))