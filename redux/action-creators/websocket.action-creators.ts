import { WebSocketBCActionTypeEnum } from '../actions-enums'
import { IRequestSessionAction } from '../actions-interface'

// ---

export const bcRequestSessionActionCreator = (): IRequestSessionAction => {
	return {
		type: WebSocketBCActionTypeEnum.REQUIRE_SESSION,
		payload: 'sth'
	}
}
