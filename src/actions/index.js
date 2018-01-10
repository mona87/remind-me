import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

export const addReminder = (text, dueDate) => {
	const action = {
		type: ADD_REMINDER,
		text,
		dueDate,
	}
	console.log('action in addReminder', action);
	return action;
}


export const deleteReminder = (id) => {
	console.log('id',id)
	const action = {
		type: DELETE_REMINDER,
		id
	}
	return action;
}


export const clearReminders = () => {
	const action = {
		type: CLEAR_REMINDERS
	}
	return action;
}