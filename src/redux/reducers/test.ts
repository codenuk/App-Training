interface IAction {
    type: string
    username: string
    password: string
  }
  
  export interface IInitialState {
    username: string
    password: string
  }
  
  const initialState: IInitialState = {
    username: '',
    password: '',
  }
  
  const reducer = (state = initialState, action: IAction): any => {
    switch (action.type) {
      case 'SET_USERNAME':
        return {
          ...state,
          username: action.username,
        }
      case 'SET_PASSWORD':
        return {
          ...state,
          password: action.password,
        }
      default:
        return state
    }
  }
  
  export default reducer