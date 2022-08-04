import Genre from './Genre';

export default interface AnimeItem {
    mal_id: number,
    title: string,
    images: { jpg: { large_image_url: string }},
    score: number,
    type: string,
    synopsis: string,
    genres: Genre[],
    rating: string,
    aired: { string: string },
}