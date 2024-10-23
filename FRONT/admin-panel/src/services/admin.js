// src/services/admin.js

import Cookies from "js-cookie";

/**
 * Функция для получения данных пользователя.
 */
export const fetchUserData = async () => {
  const token = Cookies.get("access_token");
  const response = await fetch("http://127.0.0.1:8000/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Ошибка при получении данных");
  }

  const data = await response.json();
  return data;
};

/**
 * Функция для обновления настроек.
 * @param {Object} selectedFields - Объект с массивами полей для каждого действия.
 * Пример:
 * {
 *   mask: ["Email", "Endpoint"],
 *   delete: ["Password"],
 *   filter: ["UserID"]
 * }
 */
export const updateSettings = async (selectedFields) => {
  const response = await fetch("http://127.0.0.1:8080/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(selectedFields),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Ошибка при сохранении настроек");
  }

  const data = await response.json();
  return data;
};
