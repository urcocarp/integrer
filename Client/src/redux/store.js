import {createStore, applyMiddleware,compose} from 'redux';
import  ThunkMiddleware from 'redux-thunk';
import  reducer  from "./reducer";

const composeEnhacer= window.
_REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose

const store = createStore(reducer,
    composeEnhacer(applyMiddleware(ThunkMiddleware))
    )


export default store;