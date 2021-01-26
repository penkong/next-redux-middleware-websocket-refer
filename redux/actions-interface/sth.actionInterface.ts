import { ActionTypeEnum } from '../actions-enums'

export type Direction = 'up' | 'down'
export interface MoveCellAction {
	type: ActionTypeEnum.MOVE_CELL
	payload: {
		id: string
		direction: Direction
	}
}

export interface DeleteCellAction {
	type: ActionTypeEnum.DELETE_CELL
	payload: string
}

export interface InsertCellAfterAction {
	type: ActionTypeEnum.INSERT_CELL_AFTER
	payload: {
		id: string | null
		type: any
	}
}

export interface UpdateCellAction {
	type: ActionTypeEnum.UPDATE_CELL
	payload: {
		id: string
		content: string
	}
}

export interface BundleCreatedAction {
	type: ActionTypeEnum.BUNDLE_CREATED
	payload: {
		cellId: string
		bundle: {
			code: string
			err: string
		}
	}
}

export type SthAction =
	| MoveCellAction
	| DeleteCellAction
	| InsertCellAfterAction
	| UpdateCellAction
	| BundleCreatedAction
