// first way
var str = 'some string';
console.log(str.substr(0,1).toUpperCase() + str.substr(1));

// second way
var str = 'some string';
str = str.split('');
str[0] = str[0].toUpperCase();
console.log(str.join(''));