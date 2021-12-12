import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { authorizationReducer } from './reducers'
import { rootSaga } from './sagas'

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const createRootReducer = () =>
  combineReducers({
    authorization: authorizationReducer,
  })

export const store = createStore(
  createRootReducer(),
  composeEnhancer(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
