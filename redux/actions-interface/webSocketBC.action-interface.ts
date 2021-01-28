import { WebSocketBCActionTypeEnum } from '../actions-enums'

// ---

export interface IRequestSessionAction {
	type: WebSocketBCActionTypeEnum.REQUIRE_SESSION
	payload: any
}

export type socketAction = IRequestSessionAction
