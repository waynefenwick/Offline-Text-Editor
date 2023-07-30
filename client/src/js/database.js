import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 2, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await openDB('jate', 2);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');

  try {
    await store.add(content); // Pass content directly as a parameter
    console.log('Content added to the database:', content);
  } catch (error) {
    console.error('Error adding content to the database:', error);
  } finally {
    await tx.done;
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB('jate', 2);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');

  try {
    const allContentObjects = await store.getAll(); // Retrieve all objects with id property
    const allContent = allContentObjects.map((obj) => obj.content); // Extract content from each object
    console.log('All content retrieved from the database:', allContent);
    return allContent;
  } catch (error) {
    console.error('Error getting content from the database:', error);
    return [];
  } finally {
    await tx.done;
  }
};


// Call the initdb function to ensure the database is initialized.
initdb();

