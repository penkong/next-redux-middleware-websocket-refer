import produce from 'immer'
import { ActionTypeEnum } from '../actions-enums'
import { SthAction } from '../actions-interface'

interface INewState {
	sth: string
}

const initialState: INewState = {
	sth: ''
}

export const sthReducer = produce(
	(state: INewState = initialState, action: SthAction) => {
		switch (action.type) {
			// case ActionTypeEnum.BUNDLE_CREATED :
			default:
				return state
		}
	}
)
