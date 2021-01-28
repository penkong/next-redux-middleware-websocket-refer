import { combineReducers } from 'redux'
import { routerReducer } from 'connected-next-router'

// ---

import { sthReducer } from './sth.reducer'
import { webSocketBCReducer } from './webSocketBC.reducer'

// ---

export const rootReducer = combineReducers({
	sth: sthReducer,
	bcSocket: webSocketBCReducer,
	router: routerReducer
})

export type RootState = ReturnType<typeof rootReducer>
