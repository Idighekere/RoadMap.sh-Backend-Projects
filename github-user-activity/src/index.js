#!/usr/bin/env node

import { displayActivities } from "./git_activities.js";


// console.log(process.argv.slice(2));

const fetchGithubActivity = async (user_name) => {

    try {
        const response = await fetch(`https://api.github.com/users/${user_name}/events`)
        const events = await response.json()

        return  events
    } catch (error) {
        console.error(error);

    }

}


const username = process.argv[2]
if (!username) {
    console.error("Please provide a GitHub username.");
    process.exit(1);
}

fetchGithubActivity(username).then((events) => events.forEach(event => {

    displayActivities(event)

})).catch((err) => {
    console.error(err);
    process.exit(1);
})
