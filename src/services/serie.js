import { get } from '../utils/http'

export async function getSerie(props) {
  const res = await get(`tv/${(props.match.params.id)}`)
  return res
}