# Top 10 Songs of the Artist Application

This is a simple web application that displays the top 10 songs of a specified artist using the Spotify API. The application is built with JavaScript and allows for changing the Spotify artist ID dynamically, updating the information on the page accordingly.

## Features

- Displays the top 10 songs of a specified artist.
- Allows dynamic updating of the artist by changing the Spotify artist ID.
- Utilizes the Spotify API to fetch and display the artist's top songs.

## Usage

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/daken04/Top-songs-Spotify-API
    cd Top-songs-Spotify-API
    ```

2. Open the `app.js` file in a text editor of your choice.

3. Update the following variables with your desired values:

    ```javascript
    const artistId = 'YOUR_ARTIST_ID'; // Replace with the Spotify artist ID of your preferred artist
    const clientId = 'YOUR_CLIENT_ID'; // Replace with your Spotify API client ID
    const clientSecret = 'YOUR_CLIENT_SECRET'; // Replace with your Spotify API client secret
    ```

4. Save the changes to the `app.js` file.

5. Open the `index.html` file in your preferred web browser.

6. Refresh the web page to see the top 10 songs of the updated artist.

## Getting Spotify Artist ID

To get the Spotify artist ID, you can follow these steps:

1. Visit the [Spotify for Developers](https://developer.spotify.com/) website and log in or create an account.

2. Create a new Spotify application in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).

3. Once the application is created, find the artist you are interested in on the Spotify platform.

4. Click on the artist's name, and in the URL, you will find the artist ID. Copy this ID and use it in the `app.js` file.

## Getting Spotify API Credentials

To obtain Spotify API credentials (client ID and client secret), you need to create a Spotify application in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).

## Technologies Used

- HTML
- CSS
- JavaScript

## Disclaimer

This application relies on the Spotify API, and valid Spotify API credentials are required for fetching artist information. Ensure that you have the necessary credentials and follow Spotify's terms of service.

Feel free to modify, enhance, and share this application! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

Happy music exploration!
