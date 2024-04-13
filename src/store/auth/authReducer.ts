import { LOGIN_SUCCESS, LOGOUT } from "./authAction";

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
