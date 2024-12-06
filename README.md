<p align="left">
  <img src="/frontend/src/assets/img/MainLogoPng.png" alt="TurAlania Logo" width="100"/>
</p>

# TurAlania - Туристический портал

## 📋 Содержание
- [Обзор проекта](#обзор-проекта)
- [Frontend часть](#frontend)
- [Backend часть](#backend)
- [Установка и запуск](#установка-и-запуск)
- [API документация](#api-документация)

## 🎯 Обзор проекта
TurAlania - это современный веб-портал для туристов, предоставляющий информацию о достопримечательностях и маршрутах.

## 💻 Frontend

### Технологический стек
- React 18
- JavaScript

### Структура frontend
```
frontend/
├── src/
│   ├── assets/      # Статические файлы
│   ├── components/  # Переиспользуемые компоненты
│   ├── hooks/       # Кастомные хуки
│   ├── navigation/  # Навигация
│   ├── pages/       # Страницы приложения
│   ├── store/       # Redux store
│   ├── services/    # API сервисы
│   ├── styles/      # Глобальные стили
│   └── utils/       # Вспомогательные функции
```

## ⚙️ Backend

### Технологический стек
- WampServer
- PhpMyAdmin
- Apache

### Структура backend
```
backend/
├── api/
│   ├── controllers/ # Контроллеры
│   ├── models/      # Модели данных
│   ├── helpers/     # Вспомогательные функции
│   └── config/      # Конфигурация
```

## 🚀 Установка и запуск

### Frontend

1. Установка зависимостей:

```bash
cd frontend && npm install
```

2. Запуск проекта:
```bash
npm start
```

3. Сборка проекта:
```bash
npm run build
```

### Backend


## 📚 API документация

### Авторизация
| Метод | Endpoint | Описание |
|-------|----------|----------|
| POST | /api/user/login | Авторизация пользователя |
| POST | /api/user/create | Регистрация нового пользователя |

## 📞 Контакты
По всем вопросам обращайтесь: [@Lib_int](https://t.me/Lib_int)
