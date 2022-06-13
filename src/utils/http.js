import { languages } from './lang'

const BASE_URL = process.env.REACT_APP_MOVIE_URL
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

export async function get(endpoint, options = {}) {
  // language can be passed as an option. If it's not there, then pass ES as default
  const defaultOptions = {
    language: languages.ES,
    page: 1,
    include_adult: false
  }
  const args = []

  // we should be able to pass other options as well
  const allOptions = { ...defaultOptions, ...options }
  Object.keys(allOptions).forEach(key => {
    args.push(`${key}=${allOptions[key]}`)
  })
  // ... and we add the api key :)
  args.push(`api_key=${API_KEY}`)

  const result = await fetch(`${BASE_URL}/${endpoint}?${args.join('&')}`)
  return result.json() // note: still returning a Promise!
}

// TODO: add post and fetch methods for future cases
