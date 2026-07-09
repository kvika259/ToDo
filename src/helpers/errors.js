export const errors = (errorStatus) => {
    switch (errorStatus) {
        case "400": alert("Некорректные данные, перепроверьте")
            break;
        case "401": alert("Пользователь не авторизирован")
            break;
        case "403": alert("Нет прав на просмотр")
            break;
        case "404": alert("Страница не найдена")
            break;
        case "409": alert("Пользователь с такими данными уже зарегистрирован")
            break;
        default: alert(errorStatus);
    }
}