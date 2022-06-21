import { get } from '../utils/http'

export async function getTvGenres() {
  const res = await get('genre/tv/list')
  return res.genres
}
