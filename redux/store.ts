import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createRouterMiddleware } from 'connected-next-router'

// ---

import { rootReducer } from './reducers'
import { webSocketBCMiddleware2 } from './middlewares'

// ---

const middlewares = [createRouterMiddleware(), webSocketBCMiddleware2, thunk]

if (process.env.NODE_ENV === 'development') {
	let logger = createLogger()
	middlewares.push(logger as any)
}

const initStates = {}

// ---

export const store = createStore(
	rootReducer,
	initStates,
	applyMiddleware(...middlewares)
)

export type RootStoreType = typeof store
