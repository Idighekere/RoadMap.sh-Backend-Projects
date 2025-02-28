# Weather API Service ✨☀⛅

## Overview 🌍📊💡
This project provides a weather API service that fetches and processes weather data from an external weather API. The API returns essential weather details, including temperature, humidity, wind speed, precipitation, and sun/moon information for a given location. ☀⛅✨

## Features 💡⚙️🌍
- Fetch real-time weather data
- Provide location-based weather updates
- Return detailed daily weather summaries
- Include sunrise and sunset times
<!-- - Support hourly weather breakdown (optional) -->

## API Response Structure 📝📈📊
The API processes and structures the response as follows: ✨⛅🌍

```json
{
  "location": {
    "city": "Abuja",
    "resolvedAddress": "Abuja, Federal Capital Territory, Nigeria",
    "timezone": "Africa/Lagos",
    "latitude": 9.06344,
    "longitude": 7.46229
  },
  "weather": {
    "date": "2025-02-28",
    "description": "Similar temperatures continuing with no rain expected.",
    "temperature": {
      "current": 86.1,
      "max": 98.7,
      "min": 75.1,
      "feels_like": 84.7
    },
    "humidity": 44.4,
    "dew_point": 53.6,
    "precipitation": 0.0,
    "wind": {
      "speed": 8.1,
      "direction": 81.4,
      "gusts": 6.7
    },
    "cloud_cover": 45.2,
    "visibility": 8.4,
    "uv_index": 10.0,
    "conditions": "Partially cloudy",
    "icon": "partly-cloudy-day"
  },
  "sun_moon": {
    "sunrise": "06:44:19",
    "sunset": "18:41:09",
    "moon_phase": 0.0
  }
}
```

## Technologies Used ⚛️👨‍💻💪
- Node.js
- Express.js
- External Weather API
<!-- - TypeScript (if applicable) -->

## Installation ⚙️🏢🛠️
1. Clone the repository:
   ```sh
   git clone https://github.com/idighekere/RoadMap.sh-Backend-Projects.git
   ```
2. Navigate to the project directory:
   ```sh
   cd weather-api
   ```
3. Install dependencies:
   ```sh
   pnpm install
   ```

## Usage 🛠️📚🛡️
1. Start the server:
   ```sh
   pnpm run dev
   ```
2. Make a request to the API:
   ```sh
   GET /api/v1/weather?location=Abuja
   ```
3. Receive a structured weather response. 📈☀✨

## Environment Variables 🏢🛠️🔑
Create a `.env` file in the project root and configure the following: 📝🔐✨
```env
PORT=5000
NODE_ENV=<environment>

REDIS_USERNAME=<redis cache username>
REDIS_PASSORD=<redis cache passord>
REDIS_HOST=<redis cache host>
REDIS_PORT=<redis cache port>
CACHE_EXPIRY=<cache expiry time>

WEATHER_API_KEY=your_weather_api_key
```

## Contributing 💪📝👨‍💻
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch (`feature/new-feature`)
3. Commit your changes
4. Push to your branch
5. Submit a pull request

## License 📚🔒📖
This project is licensed under the MIT License. 🌟🔧✨
