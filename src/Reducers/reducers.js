const initialState = {
    items: []
  }

const listReducers = (state=initialState, action) =>{
    switch(action.type){
        case "FETCH":
        return {
            ...state,
            items: action.payload
        }
        default:
        return state;
    }
}

export default listReducers;