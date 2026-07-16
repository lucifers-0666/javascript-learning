    // this is some example of string methods


    // in javascript string is inmutable. it means that the string cannot be changed once it is created. if you want to change a string, you need to create a new string.
    let str = "Hello, World!";
    // length property : returns the number of characters in a string.
    console.log(str.length); // Output: 13

    // toUpperCase() method : returns a new string with all the characters in uppercase.
    console.log(str.toUpperCase()); // Output: HELLO, WORLD!

    // toLowerCase() method : returns a new string with all the characters in lowercase.
    console.log(str.toLowerCase()); // Output: hello, world!

    // trim() method : returns a new string with whitespace removed from both ends of the string.
    let str1 = "   Hello, World!   ";
    console.log(str1.trim()); // Output: Hello, World!

    // slice() method : extracts a section of a string and returns it as a new string, without modifying the original string.
    let str2 = "Hello, World!";
    console.log(str2.slice(0, 5));

    // concat() method : concatenates two or more strings and returns a new string.
    let str3 = "Hello";
    let str4 = "World";
    console.log(str3.concat(", ", str4, "!")); // Output: Hello, World!

    // repolace() method : returns a new string with some or all matches of a pattern replaced by a replacement. it can be a string or a regular expression.
    let str5 = "Hello, World!";
    console.log(str5.replace("World", "Universe")); // Output: Hello, Universe!

    // chartAt() method : returns the character at a specified index in a string.
    let str6 = "Hello, World!";
    console.log(str6.charAt(0));


    // indexOf() method : returns the index of the first occurrence of a specified value in a string. If the value is not found, it returns -1.
    console.log(str.indexOf("World")); // Output: 7
    console.log(str.indexOf("Universe")); // Output: -1


    // startsWith() method : determines whether a string starts with the characters of a specified string, returning true or false as appropriate.
    let str7 = "Hello, World!";
    console.log(str7.startsWith("Hello"));

    // endsWith() method : determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
    console.log(str7.endsWith("World!"));
