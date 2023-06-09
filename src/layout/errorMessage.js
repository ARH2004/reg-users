export function errorMessage(err) {
  if (!err) {
    return;
  }
  const userNotFound = "auth/user-not-found";
  const authWrongPassword = "auth/wrong-password";
  const unknownError = "unknown";

  const errors = new Map([
    [userNotFound, "Такого пользователя не существует"],
    [authWrongPassword, "Неверный пароль или почта"],
    [unknownError, "Что-то пошло не так"],
  ]);

  if (err.code) {
    return errors.get(err.code) || errors.get(unknownError);
  }

  return errors.get(unknownError);
}
