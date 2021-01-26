import { ActionTypeEnum } from '../actions-enums'
import { UpdateCellAction } from '../actions-interface'

export const updateCell = (id: string, content: string): UpdateCellAction => {
	return {
		type: ActionTypeEnum.UPDATE_CELL,
		payload: {
			id,
			content
		}
	}
}
