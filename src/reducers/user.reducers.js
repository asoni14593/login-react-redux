import {
	LOGIN_SUCCESS,
	LOGIN_PENDING,
	LOGIN_ERROR
} from "../actions/user.actions";

export default function reducer(state={
	isLoginPending:false,
	isLoginSuccess:false,
	loginError:null
}, action){
	switch(action.type){
		case LOGIN_SUCCESS:
		return{
			...state,
			isLoginSuccess: action.isLoginSuccess
		};
		case LOGIN_PENDING:
		return{
			...state,
			isLoginPending: action.isLoginPending
		};
		case LOGIN_ERROR:
		return{
			...state,
			loginError: action.loginError
		};
		default:
		return state;
	}
}
