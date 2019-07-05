import axios from 'axios'
import { BrowseParams, Release, CollectionReply, Track, Artist } from './types'
export * from './types'

function trimLeft(str: string, char: string) {
    if (str.length === 0) return ''
    let idx = 0
    while (str[idx] === char) idx++
    return str.slice(idx)
}

function prepareCommaParams(data: any, keys: string[]) {
    for (let k of keys) {
        if (k in data) {
            data[k] = (data[k] || []).join(',')
        }
    }
    return data
}

export class MonstercatAPI {
    constructor(readonly connectSID?: string) {}

    async get<T = any>(url: string, params: { [key: string]: any } = {}) {
        let res = await axios.request({
            url: `https://connect.monstercat.com/api/${trimLeft(url, '/')}`,
            params,
            headers: {
                cookie: `connect.sid=${this.connectSID}`
            }
        })

        return res.data as T
    }

    browse(params: Partial<BrowseParams> = {}) {
        return this.get<CollectionReply<Release>>(
            '/catalog/browse',
            prepareCommaParams(params, ['types', 'genres', 'tags'])
        )
    }

    tracks() {
        return this.get<CollectionReply<Track>>('/catalog/track')
    }

    track(id: string) {
        return this.get<Track>(`/catalog/track/${id}`)
    }

    releases() {
        return this.get<CollectionReply<Release>>('/catalog/release')
    }

    release(releaseOrCatalogID: string) {
        return this.get<Release>(`/catalog/release/${releaseOrCatalogID}`)
    }

    releaseTracks(id: string) {
        return this.get<CollectionReply<Track>>(`/catalog/release/${id}/tracks`)
    }

    artists() {
        return this.get<CollectionReply<Artist>>('/catalog/artist')
    }

    artist(idOrvanityURI: string) {
        return this.get<Artist>(`/catalog/artist/${idOrvanityURI}`)
    }

    artistReleases(idOrvanityURI: string) {
        return this.get<CollectionReply<Release>>(
            `/catalog/artist/${idOrvanityURI}/releases`
        )
    }
}
