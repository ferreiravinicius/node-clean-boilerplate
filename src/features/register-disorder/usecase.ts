// import context from "@src/context"
import Usecase from "@src/contracts/usecase"

export interface Input {
  name: string
}

export interface Presenter {
  onCreated(id: string): void
  onNameExists(): void
}

function usecase(presenter: Presenter): Usecase<Input> {
  return {
    execute: (disorder: Input): void => {
      console.log("input: ", disorder)
      return presenter.onCreated("onCreated")
    },
  }
}

export default usecase
