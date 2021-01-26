import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

// ---

import { rootReducer } from './reducers'
import { webScoketBCMiddleware } from './middlewares'

// ---

const middlewares = [webScoketBCMiddleware, thunk]

// if (process.env.NODE_ENV === 'development') {
// 	let logger = createLogger()
// 	middlewares.push(logger)
// }

const initStates = {}

export const store = createStore(
	rootReducer,
	initStates,
	applyMiddleware(middlewares)
)
