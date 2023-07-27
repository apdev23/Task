const initialState = {
  user: null,
  dashboardData: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
    case 'REGISTER_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'UPDATE_DASHBOARD_DATA':
      return {
        ...state,
        dashboardData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
