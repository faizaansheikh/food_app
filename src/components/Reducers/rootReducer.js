import { combineReducers } from "redux";
import  cartReducer  from "./reducer";
import incrementNum from './secondreducer'
const rootReducer = combineReducers({
    cartReducer,
    incrementNum
})
export default rootReducer;