import usecase, { Presenter, Input } from "@src/features/register-disorder/usecase"
import { configureProduction } from "./context"

const mockPresenter: Presenter = {
  onCreated: (id: string) => {
    console.log("presenter: ", id)
  },
  onNameExists: (): void => {
    console.log("presenter: OnNameExists")
  },
}

configureProduction()
const interactor = usecase(mockPresenter)
interactor.execute({} as Input)
