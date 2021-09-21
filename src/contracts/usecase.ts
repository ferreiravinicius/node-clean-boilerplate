interface Usecase<I, O = void> {
  execute(arg: I): O
}

export default Usecase
