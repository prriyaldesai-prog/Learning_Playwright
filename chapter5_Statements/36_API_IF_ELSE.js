let statusCode = 200;

if (statusCode === 200) {
    console.log("Success! API call was successful.");
} else if (statusCode === 404) {
    console.log("Error: Resource not found.");
} else if (statusCode === 500) {
    console.log("Error: Internal server error.");
}
else if (statusCode === 401) {
    console.log("Error: Unauthorized.");
}
else {

    console.log("It's not matching statusCode!");

}