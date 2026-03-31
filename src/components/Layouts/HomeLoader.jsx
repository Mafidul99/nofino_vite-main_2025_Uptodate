// In homeLoader.js
import { defer } from 'react-router-dom'

export const homeLoader = async () => {
  // Immediately return defer object with promises
  return defer({
    // Critical data - load immediately
    user: await api.getUser(),
    // Deferred data - load after page renders
    items: api.getItems(), // This is a promise
    stats: api.getStats()  // This is a promise
  })
}
