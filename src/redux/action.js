export const loginUser = userData => ({
  type: 'LOGIN_USER',
  payload: userData,
});

export const registerUser = userData => ({
  type: 'REGISTER_USER',
  payload: userData,
});

export const updateDashboardData = dashboardData => ({
  type: 'UPDATE_DASHBOARD_DATA',
  payload: dashboardData,
});
