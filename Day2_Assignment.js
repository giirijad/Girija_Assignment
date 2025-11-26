let genderType;
genderType = "Female";
let color = "Blue";

function printGender()
{
    let color = "Brown";

    if (genderType.startsWith("F"))
    {
        var age = 30;
        let color = "Pink";
        console.log("Inside If Block Color is:", color); // Pink
    }
    console.log("Outside If Block: Age is", age); // 
    console.log("Outside If Block: colour is", color); // Brown
}
console.log("Outside function Block: colour is", color);
console.log("Outside function Block: Gender is", genderType);

printGender();