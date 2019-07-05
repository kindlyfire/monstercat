export interface CollectionReply<T = any> {
    limit?: number
    skip?: number
    total: number
    results: T[]
    hiddenTracks?: number
}

export interface ResourceURL {
    _id: string
    platform: string
    short: string
    original: string
}

export interface Release {
    _id: string
    title: string
    renderedArtists: string
    upc: string
    grid: string
    catalogId: string
    type: string
    genrePrimary: string
    genreSecondary: string
    releaseDate: string
    preReleaseDate: string | null
    showOnWebsite: boolean
    label: string
    coverUrl: string
    noEarlyAccess: boolean
    tags: string[]
    freeDownloadForUsers: boolean
    urls: ResourceURL[]
    downloadable: boolean
    streamable: boolean
    inEarlyAccess: boolean
}

export type AlbumType = 'Single' | 'EP' | 'Podcast' | 'Album'

export type BrowseSortField =
    | 'title'
    | 'release'
    | 'bpm'
    | 'time'
    | 'date'
    | 'artists'

export type BrowseSortDirection = -1 | 1

export interface BrowseParams {
    search: string
    playlistId: string
    albumId: string
    isrc: string
    types: AlbumType[]
    genres: string[]
    tags: string[]
    sortOn: BrowseSortField
    sortDirection: BrowseSortDirection
}

export interface ArtistRelationship {
    _id: string
    vendor: string
    role: string
    name: string
    artistId: string
}

export interface TrackAlbum {
    _id: string
    albumId: string
    trackNumber: number
    isFree: boolean
    streamHash: string
}

export interface Track {
    _id: string
    title: string
    artistsTitle: string
    genrePrimary: string
    genreSecondary: string
    label: string
    created: string
    isrc: string
    duration: number
    bpm: number
    artistRelationships: ArtistRelationship[]
    hasErrors: boolean
    tags: string[]
    licensable: boolean
    youTubeVideoId: any[] // TODO: not yet mapped
    albumCatalogIds: string[]
    albumNames: string[]
    albums: TrackAlbum[]
    remixers: any[] // TODO: not yet added
    featuring: any[] // TODO: not yet added
}

export interface Artist {
    _id: string
    bookings: string
    management: boolean
    managementDetail: string
    name: string
    public: boolean
    profileImageBlobId: string
    vanityUri: string
    imagePositionY: number | null
    profileImageUrl: string
    shopifyCollectionId: string
    imagePositionX: number | null
    about: string
    url: ResourceURL[]
    years: Array<number | null>
}
