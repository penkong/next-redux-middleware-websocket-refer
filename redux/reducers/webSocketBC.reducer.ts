import produce from 'immer'

// ---

import { STHActionTypeEnum } from '../actions-enums'
import { SthAction } from '../actions-interface'

// ---

interface INewState {}

const initialState: INewState = {}

// ---

export const webSocketBCReducer = produce(
	(state: INewState = initialState, action: SthAction) => {
		switch (action.type) {
			case STHActionTypeEnum.STH:
				return { sth: 'this is changed' }
			default:
				return state
		}
	}
)
