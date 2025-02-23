import "dotenv/config"


const fetchData = async (type) => {

    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
            }
        };
        const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`;

        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return data.results

    } catch (error) {
        console.error('Error fetching data:', error.message);
        process.exit(1)
    }
}

const displayData = (movies) => {

    movies.forEach((movie) => {

        console.log(`Title: ${movie.original_title}\nRelease Date:${movie.release_date}\n`);
        // console.log(`\n`);
    })

}

export { fetchData, displayData }
