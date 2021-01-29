import { Middleware, Store } from 'redux'

// ---

import { WebSocketBCActionTypeEnum } from '../actions-enums'
import { RootStoreType } from '..'

// ---

const url = 'wss://eu-swarm-test.betconstruct.com'

export const webSocketBCMiddleware = () => {
	let socket: WebSocket
	const onOpen = ({ dispatch }: Store) => (e: Event) => {
		console.log('i am on Open ', e)
	}

	const onError = ({ dispatch }: Store) => (e: Event) => {
		console.log('i am error ', e)
	}

	const onClose = ({ dispatch }: Store) => (e: Event) => {
		console.log('i am onClose', e)
	}

	const onMessage = (store: Store) => (e: Event) => {
		console.log('i am onMessage', e)
	}

	return (store => next => action => {
		if (action.type === WebSocketBCActionTypeEnum.REQUIRE_SESSION) {
			// if (socket !== null) {
			// 	socket.close()
			// }
			if (!socket) {
				// connect to the remote host
				socket = new WebSocket(url)

				// event handlers
				socket.onopen = onOpen(store as RootStoreType)
				socket.onerror = onError(store as RootStoreType)
				socket.onclose = onClose(store as RootStoreType)
				socket.onmessage = onMessage(store as RootStoreType)
			}

			console.log('weboskcet touched')
			// console.log(socket)
			console.log(action.payload)
		}

		next(action)
	}) as Middleware
}
