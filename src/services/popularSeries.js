import { get } from '../utils/http'

export async function getPopularSeries() {
  const res = await get('tv/popular')
  return res.results
}