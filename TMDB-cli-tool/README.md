# TMDB CLI Application 🎬🍿🎥

## Overview 🎯📌🔍

This project is a simple Command Line Interface (CLI) tool that fetches movie data from **The Movie Database (TMDB)** API and displays it in the terminal. It allows users to retrieve lists of popular, top-rated, upcoming, and now-playing movies. 🎞️🎭🎦

This project helps improve programming skills by working with **APIs, JSON data handling, and CLI development**. 🧑‍💻🔗📊

## Features 🚀🛠️💡

- Fetches data from TMDB API
- Displays movies categorized as:
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming
- Command-line interface for easy navigation 🏆🖥️📽️

## Requirements 📌🔧🌐

- **Node.js** (for JavaScript implementation) or **Python** (if using Python)
- Internet connection (to fetch data from TMDB API)
- TMDB API Key (Signup at [TMDB](https://www.themoviedb.org/) to get an API key) 🔑📡🔍

## Installation 🛠️📂📥

1. Clone the repository:
   ```sh
   git clone https://github.com/Idighekere/RoadMap.sh-Backend-Projects.git
   cd tmdb-cli-tool
   npm i -g //To install the cli command globally
   ```
2. Install dependencies (if applicable):
   ```sh
   pnpm install
   ```
3. Set up your API key:
   - Create a `.env` file and add:
     ````sh
     TMDB_ACCESS_TOKEN=your_api_key_here
     ````🎟️🔑📝


## Usage 🎬🎭🎦

Run the CLI tool with one of the following commands:

```sh
# Fetch now playing movies
tmdb-app --type "playing"

# Fetch popular movies
tmdb-app --type "popular"

# Fetch top-rated movies
tmdb-app --type "top"

# Fetch upcoming movies
tmdb-app --type "upcoming"
```

## API Reference 📚🔗🌍

Refer to the TMDB API documentation for details on fetching movie data:

- [Now Playing Movies](https://developer.themoviedb.org/reference/movie-now-playing-list)
- [Popular Movies](https://developer.themoviedb.org/reference/movie-popular-list)
- [Top Rated Movies](https://developer.themoviedb.org/reference/movie-top-rated-list)
- [Upcoming Movies](https://developer.themoviedb.org/reference/movie-upcoming-list) 📝📊🔍

## Contribution 🤝💡🚀

Feel free to contribute by submitting pull requests. Ensure you follow best coding practices and update documentation where necessary. 📝🔧📢

## License 📜⚖️🔒

This project is licensed under the **MIT License**. ✅📄💼

---

### Author ✍️👨‍💻📧

[Idighekere Udo](https://github.com/Idighekere) 🚀💻🌟
