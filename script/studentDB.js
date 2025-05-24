// db.js

const DB_NAME = 'DB_YoungMathematician';
const DB_VERSION = 1;
const STORE_NAME = 'student';

export async function dbExists(DB_NAME) {
  // console.log(DB_NAME);
  if (!indexedDB.databases) {
    console.warn('indexedDB.databases() не поддерживается в этом браузере');
    return null; // fallback на метод ниже
  }
  const dbs = await indexedDB.databases();              // получаем список всех БД
  // console.log(dbs);
  return dbs.some(info => info.name === DB_NAME);        // проверяем имя
}

// // Использование:
// dbExists('StudentDatabase').then(exists => {
//   console.log('База StudentDatabase существует?', exists);
// });

export function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = function (event) {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = function (event) {
      resolve(event.target.result);
    };

    request.onerror = function (event) {
      reject(event.target.error);
    };
  });
}

export async function saveStudent(student) {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  store.put(student);
  return tx.complete;
}

export async function updateStudentField(studentId, upstudentScoreNow, upstudentScoreAll) {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);

  const existingStudentRequest = store.get(studentId);
  const existingStudent = await new Promise((resolve, reject) => {
    existingStudentRequest.onsuccess = () => resolve(existingStudentRequest.result);
    existingStudentRequest.onerror = () => reject(existingStudentRequest.error);
  });


  if (!existingStudent) {
    throw new Error('Студент с таким id не найден');
  }

  // Обновляем только переданные поля
  Object.assign(existingStudent, upstudentScoreNow, upstudentScoreAll);

  // console.log(existingStudent);

  store.put(existingStudent);

  await tx.complete;
}

export async function getStudent(id) {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  return new Promise((resolve, reject) => {
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function deleteStudent(id) {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  store.delete(id);
  return tx.complete;
}

export async function getAllStudents() {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export function deleteDatabase() {
  const request = indexedDB.deleteDatabase(DB_NAME);

  request.onsuccess = function () {
    // console.log('База данных успешно удалена.');
  };

  request.onerror = function (event) {
    console.error('Ошибка при удалении базы данных:', event);
  };

  request.onblocked = function () {
    console.warn('Удаление заблокировано. Закройте другие вкладки, использующие базу данных.');
  };
}