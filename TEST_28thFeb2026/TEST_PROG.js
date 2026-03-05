// //Bug Severity Classifier

// let frequency = "always", impact = "blocker";

// if (frequency === "always" && impact === "blocker") {
//     console.log("P0");
// }
// else if (frequency === "always" && impact === "major") {
//     console.log("P1");
// }
// else if (frequency === "always" && impact === "minor") {
//     console.log("P2");
// }
// else if (frequency === "often" && impact === "blocker") {
//     console.log("P1");
// }
// else if (frequency === "often" && impact === "major") {
//     console.log("P2");
// }
// else if (frequency === "often" && impact === "minor") {
//     console.log("P3");
// }
// else if (frequency === "rarely" && impact === "blocker") {
//     console.log("P2");
// }
// else if (frequency === "rarely" && impact === "major") {
//     console.log("P3");
// }
// else if (frequency === "rarely" && impact === "minor") {
//     console.log("P4");
// }


//PROG2: // API Response Status Code Validator


// let responce_code = 401;

// switch (responce_code) {
//     case 200:
//         console.log("PASS - OK: Request successful");
//         break;

//     case 201:
//         console.log("PASS - Created: Resource created successfully");
//         break;

//     case 301:
//         console.log("WARNING - Moved Permanently: URL has changed");
//         break;

//     case 400:
//         console.log("FAIL - Bad Request: Check request payload");
//         break;

//     case 401:
//         console.log("FAIL - Unauthorized: Check auth token");
//         break;

//     case 403:
//         console.log("FAIL - Forbidden: Insufficient permissions");
//         break;

//     case 404:
//         console.log("FAIL - Not Found: Check endpoint URL");
//         break;

//     case 500:
//         console.log("FAIL - Internal Server Error: Backend issue");
//         break;

//     default:
//         console.log("UNKNOWN - Unhandled status code");
//         break;
// }

// PROG3://  Response Time SLA Analyzer

// let responceTime = [120, 350, 510, 200, 650, 80, 430, 900, 310, 560];

// let i = 0;
// let min = responceTime[0];
// let max = responceTime[0];
// let sum = 0;
// let slabreaches = 0;

// while (i < responceTime.length) {
//     let current = responceTime[i];

//     sum = sum + current;

//     if (current < min) {
//         min = current;
//     }

//     if (current > max) {
//         max = current;
//     }

//     if (current > 500) {
//         slabreaches++;
//     }

//     i++;
// }


// let average = sum / responceTime.length;

// console.log("===== Performance Report =====");
// console.log(`Total Requests     : ${responceTime.length}`);
// console.log(`Min Response Time  : ${min} ms`);
// console.log(`Max Response Time  : ${max} ms`);
// console.log(`Avg Response Time  : ${average} ms`);
// console.log(`SLA Breaches (>500ms): ${slabreaches}`);
// console.log("==============================");



//PROG4: //// Test Environment Config

// const DEV_URL = "https://dev.api.example.com";
// const DEV_KEY_PATTERN = "DEV_KEY_***";
// const DEV_TIMEOUT = 5000;
// const DEV_DESC = "Development environment for daily builds";

// const STAG_URL = "https://staging.api.example.com";
// const STAG_KEY_PATTERN = "STG_KEY_***";
// const STAG_TIMEOUT = 8000;
// const STAG_DESC = "Staging environment for release candidates";

// const QA_URL = "https://qa.api.example.com";
// const QA_KEY_PATTERN = "QA_KEY_***";
// const QA_TIMEOUT = 10000;
// const QA_DESC = "Quality Assurance environment for testing";

// const PROD_URL = "https://api.example.com";
// const PROD_KEY_PATTERN = "PROD_KEY_***";
// const PROD_TIMEOUT = 15000;
// const PROD_DESC = "Production environment with live user data";


// let evtname = "QA";

// switch (evtname) {
//     case "dev":
//         baseUrl = DEV_URL;
//         apiKeyPattern = DEV_KEY_PATTERN;
//         timeout = DEV_TIMEOUT;
//         description = DEV_DESC;
//         break;

//     case "staging":
//         baseUrl = STAG_URL;
//         apiKeyPattern = STAG_KEY_PATTERN;
//         timeout = STAG_TIMEOUT;
//         description = STAG_DESC;
//         break;

//     case "QA":
//         baseUrl = QA_URL;
//         apiKeyPattern = QA_KEY_PATTERN;
//         timeout = QA_TIMEOUT;
//         description = QA_DESC;
//         break;

//     case "production":
//     case "prod":
//         baseUrl = PROD_URL;
//         apiKeyPattern = PROD_KEY_PATTERN;
//         timeout = PROD_TIMEOUT;
//         description = PROD_DESC;
//         break;

//     default:
//         console.log(`Error: Unknown environment '${evtname}'`);
//         break;
// }

// // Print the configuration
// console.log(`===== CI/CD Environment Configuration =====`);
// console.log(`Environment  : ${evtname.toUpperCase()}`);
// console.log(`Description  : ${description}`);
// console.log(`Base URL     : ${baseUrl}`);
// console.log(`API Key Ref  : ${apiKeyPattern}`);
// console.log(`Timeout      : ${timeout} ms`);
// console.log(`=========================================`);


//PROG 5: // Test Data Builder

// In test automation, you often need to create test data dynamically.
//  This program builds a user object using object destructuring and spread syntax.
var counter = 1;  // global counter

const roles = ["admin", "editor", "viewer", "tester", "manager"];

for (let i = 0; i < 10; i++) {

    let id = "USR-" + ("000" + counter).slice(-4);
    let name = "User" + counter;
    let email = "user" + counter + "@test.com";
    let role = roles[i % roles.length];
    let isActive = counter % 3 === 0 ? false : true;

    console.log({
        id: id,
        name: name,
        email: email,
        role: role,
        isActive: isActive
    });

    counter++;
}
