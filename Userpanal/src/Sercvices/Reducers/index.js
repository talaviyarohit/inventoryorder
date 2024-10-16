import { combineReducers } from "redux";
import userReducer from "./userReducers";
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({userReducer,cartReducer})

export default rootReducer