import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (contentArray) => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');

  await store.clear(); // Clear the existing content in the store
  await store.add(contentArray, 1); // Save the content as an array of strings
  await tx.complete;
};


// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');

  // Retrieve the content (an array of strings) from IndexedDB
  const contentArray = await store.get(1);

  return contentArray || []; // Return the array or an empty array if not found
};

initdb();
console.log('Database initialized.');
