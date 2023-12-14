document.addEventListener('DOMContentLoaded', () => {
    const artistId = '3TVXtAsR1Inumwj472S9r4'; //drake (change as you prefer)
    const clientId = '';
    const clientSecret = '';

    async function requestAccessToken()
    {
        const tokenUrl = 'https://accounts.spotify.com/api/token';
        const headers = {
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        const body = 'grant_type=client_credentials';

        try {
            const response = await fetch(tokenUrl, {
                method: 'POST',
                headers,
                body,
            });

            if(response.ok)
            {
                const data = await response.json();
                return data.access_token;
            }
            else
            {
                throw new Error('Error fetching access token');
            }
        }
        catch (error) {
            console.error('Error requesting access token:', error);
            return null;
        }
    }

    async function loadTopSongs()
    {
        const accessToken = await requestAccessToken();

        if(!accessToken) 
        {
            return;
        }

        const artistEndpoint = `https://api.spotify.com/v1/artists/${artistId}`;
        const songsEndpoint = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`;

        const headers = {
            Authorization: `Bearer ${accessToken}`,
        };

        try {
            const [artistResponse, songsResponse] = await Promise.all([
                fetch(artistEndpoint, { headers }),
                fetch(songsEndpoint, { headers }),
            ]);

            if (artistResponse.ok && songsResponse.ok) 
            {
                const [artistData, songsData] = await Promise.all([
                    artistResponse.json(),
                    songsResponse.json(),
                ]);

                const artistHeading = document.getElementById('artist-heading');
                artistHeading.innerHTML = `<img src="${artistData.images[0].url}" alt="${artistData.name}" class="artist-photo">
                    Top 10 Songs of ${artistData.name}
                `;

                const songsContainer = document.getElementById('songs-container');
                songsContainer.innerHTML = '<h2>Top 10 Songs</h2>';
                songsData.tracks.slice(0, 10).forEach((song, index) => {
                    const songDiv = document.createElement('div');
                    songDiv.className = 'song-card';
                    songDiv.innerHTML = `
                        <div class="song-image">
                            <img src="${song.album.images[0].url}" alt="${song.name}">
                        </div>
                        <div class="song-details">
                            <p class="song-name">${index + 1}. ${song.name}</p>
                            <p class="artist-name">Artist: ${song.artists[0].name}</p>
                            <p class="album-name">Album: ${song.album.name}</p>
                            <p class="release-date">Release Date: ${song.album.release_date}</p>
                            <p class="duration">Duration: ${formatDuration(song.duration_ms)}</p>
                        </div>
                    `;
                    songsContainer.appendChild(songDiv);
                });
            } 
            else 
            {
                throw new Error('Error loading data');
            }
        } 
        catch (error) 
        {
            console.error('Error loading data', error);
        }
    }

    loadTopSongs();
});

function formatDuration(durationInMs) 
{
    const minutes = Math.floor(durationInMs / 60000);
    const seconds = ((durationInMs % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
}
