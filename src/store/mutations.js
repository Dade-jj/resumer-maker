import objectPath from 'object-path'

export default {
  initState (state, payload) {
    Object.assign(state, payload)
  },
  switchTab (state, payload) {
    state.selected = payload
    localStorage.setItem('state', JSON.stringify(state))
  },
  updateResume (state, {path, value}) {
    objectPath.set(state.resume, path, value)
    localStorage.setItem('state', JSON.stringify(state))
  },
  setUser (state, payload) {
    Object.assign(state.user, payload)
  },
  removeUser (state) {
    state.user.id = ''
  }
}
