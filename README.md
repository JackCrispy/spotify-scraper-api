# Spotify Scraper API
Get various statistics from Spotify that aren't displayed in their Web API.

## Documentation
#### Base Route: https://spotify.permissions.tech/api/

### Monthly Listeners
`api/artist/UUID/monthly_listeners`
- Replace UUID with the artist's UUID.

## Self host
You may choose to selfhost the scraper rather then use the public version.
**Steps**
1. `git clone https://github.com/JackCrispy/spotify-scraper-api.git`
2. Install depends. `npm install` (make sure if using on linux you have installed puppeter's depends, like chrome. 
3. Run `node index.js`

## Ratelimt
There is a limit of 25 requests per 15 minutes, contact me if you need this raised.

## Support
I will provide support and feature requests on discord: https://discord.gg/fcYZ44F4CB
