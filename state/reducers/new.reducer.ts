import produce from 'immer'
import { ActionTypeEnum } from '../action-enums'
import { Action } from '../actions-interface'

interface INewState {
	sth: string
}

const initialState: INewState = {
	sth: ''
}

export const newReducer = produce(
	(state: INewState = initialState, action: Action) => {
		switch (action.type) {
			default:
				return state
		}
	}
)
