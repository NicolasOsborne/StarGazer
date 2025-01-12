import axios from 'axios'

const API_URL = 'https://127.0.0.1:8000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Fetch closest stars
export const fetchClosestStars = async () => {
  return await api.get('/stars/closest')
}

// Fetch brightest stars
export const fetchBrightestStars = async () => {
  return await api.get('/stars/brightest')
}

// Fetch hottest stars
export const fetchHottestStars = async () => {
  return await api.get('/stars/hottest')
}

// Fetch biggest stars
export const fetchBiggestStars = async () => {
  return await api.get('/stars/biggest')
}

// Fetch planets

// Fetch constellations
export const fetchConstellations = async () => {
  return await api.get('/constellations')
}
