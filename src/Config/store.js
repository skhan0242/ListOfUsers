import {createStore, combineReducers} from "redux";
import listReducers from "../Reducers/reducers"

const rootReducer = combineReducers({
    list: listReducers
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;