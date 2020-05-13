const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

export const setLoginPending = isLoginPending => ({
	type: LOGIN_PENDING,
	isLoginPending
});

export const setLoginSuccess = (isLoginSuccess) => ({
	type: LOGIN_SUCCESS,
	isLoginSuccess
});

export const setLoginError = (loginError) => ({
	type: LOGIN_ERROR,
	loginError
});

export function login(fname, lname, email, password) {
	return dispatch => {
		dispatch(setLoginPending(true));
		dispatch(setLoginSuccess(false));
		dispatch(setLoginError(null));

		sendLoginRequest(fname, lname, email, password).then(success => {
			dispatch(setLoginPending(false));
			dispatch(setLoginSuccess(true))
		}).catch(err => {
			dispatch(setLoginPending(false));
			dispatch(setLoginError(err));
		})
	}
}

function sendLoginRequest(fname, lname, email, password) {
	return new Promise((resolve, reject) => {
		if (fname === "Avinash" && lname === "Soni" && email === "admin@admin.com" && password === "admin") {
			return resolve(true);
		} else {
			return reject(new Error("Invalid email or password"));
		}
	});
}