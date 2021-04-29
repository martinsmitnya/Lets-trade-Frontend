export function isLoggedIn(): boolean {
  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
}
