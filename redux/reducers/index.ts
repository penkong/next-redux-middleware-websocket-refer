import { combineReducers } from 'redux'
import { sthReducer } from './sth.reducer'

export const rootReducer = combineReducers({
	sth: sthReducer
})

export type RootState = ReturnType<typeof rootReducer>
