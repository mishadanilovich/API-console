export interface InitialState {
  loading?: boolean
  sessionKey?: string | null
  login?: string | null
  subLogin?: string | null
}

export interface Action {
  type: string
  payload?: InitialState
}
