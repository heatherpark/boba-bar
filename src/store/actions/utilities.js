export const setAuthData = (token, userId, expiresIn) => {
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
  localStorage.setItem('expirationDate', expirationDate);
};