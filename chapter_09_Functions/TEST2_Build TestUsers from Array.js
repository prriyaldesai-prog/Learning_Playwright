// Build Test Users from Arrays
// Write a JavaScript function that receives two arrays: one with names
// and one with roles. Return a new array of user objects in the format
//  `{ username, email, role }`. The username should be lowercase with spaces
//  replaced by underscores, and the email should use the domain
// `@playwrightbatch.com`.

const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

function generatetestusers(names, roles) {
    users = [];

    for (let i = 0; i < names.length; i++) {

        let username = names[i].toLowerCase().replaceAll(" ", "_");
        let email = username + "@playwrightbatch.com";
        let role = i % roles.length;

        users.push({ username, email, role });
    }
    return users;
}

console.log(generatetestusers(names, roles));
console.log(users);