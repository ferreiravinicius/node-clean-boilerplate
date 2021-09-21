import { DisorderStore } from "./contracts/disorder-store"

interface DisorderContext {
  store: DisorderStore
}

interface Context {
  disorder: DisorderContext
}

const context: Context = {} as Context

function save(): void {
  console.log("saved")
}

export function configureProduction(): void {
  context.disorder = {
    store: { save },
  }
}

export default context
