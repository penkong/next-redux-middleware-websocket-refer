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
	next(action)
}
