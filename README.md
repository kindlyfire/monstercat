# Monstercat

`monstercat` is a package to interact with the Monstercat Connect API. It has methods to get releases, tracks and artists. It also has corresponding types for these resources.

Usage example:

```ts
import { MonstercatAPI } from 'monstercat'
;(async () => {
    const api = new MonstercatAPI()

    // Get different resources
    const browse = await api.browse()
    const tracks = await api.tracks()
    const track = await api.track('509d40b59022a12cd7000061')
    const releases = await api.releases()
    const release = await api.release('5cfe8ec275f0ae58132228a9')
    const releaseTracks = await api.releaseTracks('5cfe8ec275f0ae58132228a9')
    const artists = await api.artists()
    const artist = await api.artist('569d69d14372f5a13d5ca9eb')
    const artistReleases = await api.artistReleases('569d69d14372f5a13d5ca9eb')

    // List returned tracks
    for (let track of tracks.results) {
        console.log(`${track.artistsTitle} - ${track.title}`)
    }
})()
```
