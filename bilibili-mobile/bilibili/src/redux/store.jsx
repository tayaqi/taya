import { createStore } from 'redux'
import reducers from './reducers'

export default function getStore () {
  const store = createStore(
    reducers
  )
  return store
} 