import { Middleware } from './middleware'
import { ActionTypeEnum } from '../actions-enums'

// ---

export const webScoketBCMiddleware: Middleware = ({
	getState,
	dispatch
}) => next => action => {
	// const {
	// 	cells: { data: cellData }
	// } = getState()
	console.log('weboskcet touched')
	next(action)
}
