#!/usr/bin/env/ node

import { displayData, fetchData } from "./helpers.js";


const getPlayingNow = async () => {
    console.log('Playing Now Movies');

    const playNowMovies = await fetchData('now_playing')

    displayData(playNowMovies)
}

const getPopularMovies = async () => {
    console.log('Popular Movies');

    const popularMovies = await fetchData('popular')
    displayData(popularMovies)
}

const getTopMovies = async () => {
    console.log('Top Movies');
    const topMovies = await fetchData('top_rated')
    displayData(topMovies)
}
const getUpcomingMovies = async () => {
    console.log('Upcoming Movies');
    const upcomingMovies = await fetchData('upcoming')
    displayData(upcomingMovies)
}

const getArguments = (args) => {
    const firstArg = args[0]
    const secondArg = args[1]
    switch (secondArg) {
        case 'playing':
            getPlayingNow()
            break;
        case 'popular':
            getPopularMovies()
            break;

        case 'top':
            getTopMovies()
            break;
        case 'upcoming':
            getUpcomingMovies()
            break


        default:
            console.error('Invalid --type command, ')
            process.exit(1)

    }
}
const args = process.argv.slice(2)
if (args[0] == '--type') {
    getArguments(args)
} else {
    console.error('Parameter must be --type')
    process.exit(1)
}
