import { registerReducer } from './store';

let modules = {};

const module = (store) => (name, moduleProvider) => {
  if (modules.hasOwnProperty(name)) {
    return Promise.resolve(modules[name]);
  }
  else {
    return moduleProvider.then(mod => {
      registerReducer(store, name, mod.reducer);
      return mod;
    });
  }
}


export default module