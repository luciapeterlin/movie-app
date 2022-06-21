import { get } from '../utils/http'

export async function getMovie(props) {
  const res = await get(`movie/${(props.match.params.id)}`)
  return res
}