// Test Environment Config

// In CI/CD pipelines, tests run against different environments. 
// This program takes an environment name and prints its configuration.

// Use const for fixed values
const DEV_URL = "https://dev.api.example.com";
const DEV_KEY_PATTERN = "DEV_KEY_***";
const DEV_TIMEOUT = 5000;
const DEV_DESC = "Development environment for daily builds";

const STAG_URL = "https://staging.api.example.com";
const STAG_KEY_PATTERN = "STG_KEY_***";
const STAG_TIMEOUT = 8000;
const STAG_DESC = "Staging environment for release candidates";

const QA_URL = "https://qa.api.example.com";
const QA_KEY_PATTERN = "QA_KEY_***";
const QA_TIMEOUT = 10000;
const QA_DESC = "Quality Assurance environment for testing";

const PROD_URL = "https://api.example.com";
const PROD_KEY_PATTERN = "PROD_KEY_***";
const PROD_TIMEOUT = 15000;
const PROD_DESC = "Production environment with live user data";


let envName = "qa";

// Assembled config using let
let baseUrl;
let apiKeyPattern;
let timeout;
let description;

switch (envName) {
    case "dev":
        baseUrl = DEV_URL;
        apiKeyPattern = DEV_KEY_PATTERN;
        timeout = DEV_TIMEOUT;
        description = DEV_DESC;
        break;

    case "staging":
        baseUrl = STAG_URL;
        apiKeyPattern = STAG_KEY_PATTERN;
        timeout = STAG_TIMEOUT;
        description = STAG_DESC;
        break;

    case "qa":
        baseUrl = QA_URL;
        apiKeyPattern = QA_KEY_PATTERN;
        timeout = QA_TIMEOUT;
        description = QA_DESC;
        break;

    case "production":
    case "prod":
        baseUrl = PROD_URL;
        apiKeyPattern = PROD_KEY_PATTERN;
        timeout = PROD_TIMEOUT;
        description = PROD_DESC;
        break;

    default:
        console.log(`Error: Unknown environment '${envName}'`);
        process.exit(1);
}

// Print the configuration
console.log(`===== CI/CD Environment Configuration =====`);
console.log(`Environment  : ${envName.toUpperCase()}`);
console.log(`Description  : ${description}`);
console.log(`Base URL     : ${baseUrl}`);
console.log(`API Key Ref  : ${apiKeyPattern}`);
console.log(`Timeout      : ${timeout} ms`);
console.log(`=========================================`);


