import { WebSocketBCActionTypeEnum } from '../actions-enums'
import { Middleware } from './middleware'

// ---

export const webSocketBCMiddleware: Middleware = ({
	getState,
	dispatch
}) => next => action => {
	// const {
	// 	cells: { data: cellData }
	// } = getState()
	console.log('weboskcet touched')
	if (action.type === WebSocketBCActionTypeEnum.REQUIRE_SESSION) {
		console.log(action.payload)
	}

	next(action)
}
