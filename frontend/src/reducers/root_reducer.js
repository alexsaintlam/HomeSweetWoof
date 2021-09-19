import { combineReducers } from "redux";
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";
// import entitiesReducer from "./entities_reducer";

const RootReducer = combineReducers({
    // entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
});

export default RootReducer;