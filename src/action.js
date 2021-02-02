import { CHANGE_SEARCH_FILED } from './constants.js'

export const setSearchField = (text) => ({
	type: 'CHANGE_SEARCH_FILED',
	payload: text

})