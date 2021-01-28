import WebSocket from 'ws';

// ---

import { WebSocketBCActionTypeEnum } from '../actions-enums';
import { Middleware } from './middleware';
import { RootStoreType } from '..';

// ---

onopen: (event: WebSocket.OpenEvent) => void;
onerror: (event: WebSocket.ErrorEvent) => void;
onclose: (event: WebSocket.CloseEvent) => void;
onmessage: (event: WebSocket.MessageEvent) => void;

const webSocketBCMiddleware = () => {
	let socket: WebSocket;

	const onOpen = ({ dispatch }: RootStoreType) => (e: WebSocket.OpenEvent) => {
	dispatch({ type: 's'});
	};

	const onError = () => () => {}

	const onClose = ({dispatch}: RootStoreType) => (e : WebSocket.CloseEvent) => {
		dispatch({ type: 's'});
	};


	const onMessage = (store: RootStoreType) => (e : WebSocket.MessageEvent) => {
		
	};

	export const webSocketBCMiddleware2: Middleware = store => next => action => {
		// const {
		// 	cells: { data: cellData }
		// } = getState()
		console.log('weboskcet touched');
		if (action.type === WebSocketBCActionTypeEnum.REQUIRE_SESSION) {
			console.log(action.payload);
		}
	
		next(action);
	};




};

export const webSocketBCMiddleware2: Middleware = store => next => action => {
	// const {
	// 	cells: { data: cellData }
	// } = getState()
	console.log('weboskcet touched');
	if (action.type === WebSocketBCActionTypeEnum.REQUIRE_SESSION) {
		console.log(action.payload);
	}

	next(action);
};

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

export class RayanRLCSocketService {
	private bcSocket: WebSocket;

	constructor() {
		this.onBCSocketClose = this.onBCSocketClose.bind(this);
		this.onBCSocketError = this.onBCSocketError.bind(this);
		this.onBCSocketOpen = this.onBCSocketOpen.bind(this);
		this.onBCSocketMessage = this.onBCSocketMessage.bind(this);
	}

	public initbcSocket(wsAddress: string) {
		this.bcSocket = new WebSocket(wsAddress);
		if (this.bcSocket) {
			this.bcSocket.onopen = this.onBCSocketOpen;
			this.bcSocket.onerror = this.onBCSocketError;
			this.bcSocket.onmessage = this.onBCSocketMessage;
			this.bcSocket.onclose = this.onBCSocketClose;
		}
	}

	// SOCKET Listen On Open --------------------------------------------

	public async onBCSocketOpen(msg) {
		console.log(msg);
		if (msg.type === 'open') {
			console.log(msg.protocol);
		}
		// this.subscribeOnChannels('1', 'MD');
	}

	// SOCKET Listen MESSAGE HANDLER ------------------------------------------

	// this.subscribeOnChannels('1', 'MW');
	public async mwParser(msgArr: string[]) {
		if (msgArr[0] === 'MW' && msgArr[20] !== 'null') {
		} else if (msgArr[2].includes('bl')) {
			await this.mwBLQueue.add({ [msgArr[1]]: [...msgArr.slice(2)] });
			console.log({ [msgArr[1]]: [...msgArr.slice(2)] });
		}
	}

	public async onBCSocketMessage(msg: any) {}

	public onBCSocketError(error: any) {}

	public async onBCSocketClose(cmp: any) {}

	public async closeRLC(): Promise<any> {
		this.bcSocket!.close();
	}

	// =================== UTILITY FUNC =======================================

	// -------- METHOD CALL WITH ALL STOCKS COME FROM DB ----------------------

	public async subscribeOnChannels(subscribeCode: string, channelName: string) {
		//
		// get list of stocks
		let stockGroups = await this.stocksRepository.getAllStocks();

		console.log(
			stockGroups.map(item => item.instrumentId),
			'i am stocks groups'
		);
		console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
		for (let stock of stockGroups.slice(1, 100)) {
			this.bcSocket.send(
				subscribeCode + ',' + channelName + '.' + stock.instrumentId
			);
		}
	}
}
