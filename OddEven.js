function isOddOrEven(num)
{
    let result;
    if((num % 2)==0)
    {
        result = console.log(num,"is Even Number");
    }
    else
    {
        result = console.log(num,"is Odd Number");
    }
    return result;
}

isOddOrEven(11);
isOddOrEven(44);
isOddOrEven(73);
isOddOrEven(100);   


function numberType(intVal)
{
    let outcome;
    if(intVal > 0)
    {
        outcome = console.log(intVal,"is postive Number");
    }
    else if(intVal <0)
    {
        outcome = console.log(intVal,"is Negative Number");
    }
    else if(intVal === 0)
    {
        outcome = console.log("The given number is 0");
    }
    else
    {
        outcome = console.log("Invalid Input");
    }
    return outcome;
}
numberType(25);
numberType(-10);
numberType(0);
numberType("Testleaf"); 