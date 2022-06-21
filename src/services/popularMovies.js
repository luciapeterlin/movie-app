import { get } from '../utils/http'

export async function getPopularMovies() {
  const res = await get('movie/popular')
  return res.results
}