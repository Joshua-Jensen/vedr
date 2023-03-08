import { Snacks } from "./Models/Snacks.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
  /** @type {import('Models/Snacks').Snacks[]} */
  snacks = [
    new Snacks({ name: 'doritos', price: 4, remaining: 12, img: 'assets/img/logo.png', }),
    new Snacks({ name: 'lays', price: 3, remaining: 12, img: 'assets/img/lays.png', }),

  ]

  money = 0
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
