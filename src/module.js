import { registerReducer } from './store'

let modules = {}

export default function module(store) {
  return (name, moduleProvider) => {
    if (modules.hasOwnProperty(name)) {
      return Promise.resolve(modules[name])
    } else {
      return moduleProvider.then((mod) => {
        registerReducer(store, name, mod.reducer)
        return mod
      })
    }
  }
}
