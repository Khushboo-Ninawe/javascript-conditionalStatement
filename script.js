for(var i=0;i<=20;i++)
{
    console.log(i);
}
var arr=[90,80,70,60,50];
for(var i=0;i<arr.length;i++)
{
    console.log("length of array"+arr[i]);
}

var str="hello";
for(var i=0;i<str.length;i++)
{
    console.log("char"+str[i]);
}
var i=10;
while(i>=0)
{
    console.log(i);
    i--;
}

var num = [80, 50, 48, 100, 87];
var userInput = 90;

for (var i = 0; i < num.length; i++) {
  if (num[i] === userInput) {
    console.log("found");
    break;
  }

    else {
       console.log("not");
     }
}

//continue: it will terminate the current iteration
for (var i = 0; i < num.length; i++) {
    console.log("index:" + i);
    continue;
    console.log("element: " + num[i]);
  }

  //alterante example
for (var i = 0; i < num.length; i++) {
    if (num[i] == 48) {
      continue;
    }
    console.log(num[i]);
  }



  // task
// use loops, conditional statements, take input from user
function input()
{
    let age=input("enter your age");
    if(age!==null)
    {
        console.log("your age"+age);
    }
    else{
        console.log("Not")
    }
}
// multiplication table in UI (ask number from user)
//var n = document.getElementById("number").value;
// sum of digits: e.g. (123: 1 + 2 + 3 = 6) or (1234 : 1 + 2 + 3 + 4 = 10) : hint - loops, divisor and modulus
var number=1234;
var sum=0;
// while(number>0)
// {
//     var digit=number%10;
//     sum=+digit;
//     number=math.floor(number/10);
// }
// console.log("Sum of digits",sum);
var sum=0;
var i=4;
while(i>0)
{
    console.log(i);
    
    sum=+i;
    i--;
    console.log(sum);
}
// palindrome string (aca: aca(reverse) is a palindrome, abc: cba is not a palindrome): use loops

// display even numbers upto n number (ask user for number)
// ask user for the input, whether char is vowel or consonant
// count of even and odd number from 1 to 999
// count occurrence of a particular character in a string (hello: count of l is 2): loops
// sum and average of array elements [1, 9, 8];
// largest number in an array (do with loops)
// From 1 to 100, print "foo" if multiple of 3, "bar" if multiple of 5, if multiple of both display "hello" or else print the number
// e.g.
// 1
// 2
// foo
// 4
// bar
// foo