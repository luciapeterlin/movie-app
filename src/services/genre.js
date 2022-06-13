import { get } from '../utils/http'

export async function getGenres() {
  const res = await get('genre/movie/list')
  return res.genres
}
