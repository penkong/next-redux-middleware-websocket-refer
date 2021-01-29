// ---

import { AnyAction, Dispatch, MiddlewareAPI } from 'redux'

// ---

import { Action } from '../redux'

// ---

export class BCwebSocket {
	private socket: WebSocket | null = null

	// wss://oms8.irbroker.com/sle

	private readonly url = 'wss://eu-swarm-test.betconstruct.com'

	constructor(
		private store: MiddlewareAPI<Dispatch<AnyAction>, Action> // private socket: WebSocket
	) {
		this.onOpen = this.onOpen.bind(this)
		this.onError = this.onError.bind(this)
		this.onMessage = this.onMessage.bind(this)
		this.onOpen = this.onClose.bind(this)
	}

	public initSocket() {
		// if socket exist return already

		if (this.socket) return this.socket

		// create socket
		this.socket = new WebSocket(this.url)

		// socket lifecycle
		if (this.socket) {
			this.socket.onopen = this.onOpen
			this.socket.onerror = this.onError
			this.socket.onclose = this.onClose
			this.socket.onmessage = this.onMessage
		}

		// return socket to dispatch message
		return this.socket
	}

	public onOpen(e: Event) {
		console.log('i am on Open ', e)
		if (this.socket) {
			console.log(this.socket.OPEN)
			const req = {
				command: 'request_session',
				params: {
					site_id: 1,
					language: 'arm'
				}
			}
			this.socket?.send(JSON.stringify(req))
			console.log(33)
		}
	}

	public onError(e: Event) {
		console.log('i am on error ', e)
	}

	public onMessage(e: MessageEvent) {
		console.log('i am on message ', e)
	}

	public onClose(e: CloseEvent) {
		console.log('i am on close ', e)
	}
}
