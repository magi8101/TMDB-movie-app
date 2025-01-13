# Galaxy Movie App

Galaxy Movie App is a dynamic and interactive web application for browsing and discovering movies. It leverages the TMDB API to provide users with movie details, trailers, cast information, and more. This app also features a visually appealing design with a background video and a responsive layout for all screen sizes.

---

## Features

- Fetches popular and searched movies from the TMDB API.
- Displays movie details, including trailer, cast, and OTT availability.
- Responsive and mobile-friendly design.
- Caching of movie data for a better user experience.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (Node Package Manager)
- [TMDB API Key](https://www.themoviedb.org/settings/api) for fetching movie data.

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd galaxy-movie-app
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up your `.env` file:

   ```
   API_KEY=<your_tmdb_api_key>
   ```

4. Place your media files in the `public` directory. Ensure the video file `b1.mp4` is in the correct location.

---

## Usage

### Development Mode

Start the development server:

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Production Build

To prepare the app for production:

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the server:

   ```bash
   npm start
   ```

---

## File Structure

```
Galaxy Movie App
├── public
│   ├── b1.mp4
│   ├── sample.html
│   ├── config.js
├── server.js
├── package.json
├── .env
├── README.md
```

---

## Key NPM Commands

- `npm install`: Installs all required dependencies.
- `npm start`: Starts the application in development or production mode.
- `npm run build`: Prepares a production-ready build of the application.

---

## Deployment

The app will soon be hosted online. Stay tuned for updates!

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to suggest enhancements or report bugs.

---

## Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) for movie data.
- [Font Awesome](https://fontawesome.com/) for icons.

---

Feel free to enhance or modify this README as needed. Happy coding!
