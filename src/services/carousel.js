import { get } from '../utils/http'

export async function getTrendingCarousel() {
  const res = await get('trending/all/day')
  return res.results
}
