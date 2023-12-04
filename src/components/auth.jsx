export const auth = {
	authState: null,
	setAuthState: null,
	authHeader: () => ({ Authorization: `Bearer ${auth.authState.token}` }),
}
