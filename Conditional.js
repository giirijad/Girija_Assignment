function launchBrowser(browserName)
{
    if(browserName ==="Chrome")
    {
        console.log("Launching Chrome Browser");
    }
    else if(browserName ==="Firefox")
    {
        console.log("Launching Firefox Browser");
    }
    else 
    {
        console.log("Unsupport browser")
    }
}
launchBrowser("Chrome");
launchBrowser("Firefox");
launchBrowser("Safari");

function runTests(testType)
{
    switch(testType)
    {
        case"Unit":
        console.log("Running Unit Tests");
        break;
        case"Regression":
        console.log("Running Regression Tests");
        break;
        case"Sanity":
        console.log("Running Sanity Tests");
        break;
        default:
        console.log("Running Smoke Tests");
        break;
    }
}
runTests("Unit");
runTests("Smoke");
runTests("regression");
runTests("Sanity");