import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 2, { // Update the version number to 2
    upgrade(db, oldVersion, newVersion, transaction) {
      if (oldVersion < 1) {
        // Perform any necessary upgrades when the version is less than 1
        // For example, you can create object stores or update existing ones.
        db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      }

      if (oldVersion < 2) {
        // Perform any necessary upgrades when the version is less than 2
        // For example, you can add or modify indexes.
      }
      console.log(`jate database upgraded from version ${oldVersion} to version ${newVersion}`);
    },
  });

export const putDb = async (content) => {
  console.log('Post to the database');
  const jateDb = await openDB('jate', 2); // Update the version number to 2
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('🚀 - data saved to the jate database', result);
};

export const getDb = async () => {
  console.log('GET all from the database');
  const jateDb = await openDB('jate', 2); // Update the version number to 2
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
