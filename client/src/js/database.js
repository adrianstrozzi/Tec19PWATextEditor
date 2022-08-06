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


export const putDb = async (id, value) => {
  console.error('putDb not implemented');
  console.log('PUT request to update jateDB');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const objStore = tx.objectStore('jate');
  const request = objStore.put({ id: id, value: value })
  const result = await request;
  console.log('data saved to the jateDB', result);
};

export const getDb = async () => {
  console.error('getDb not implemented')
  console.log('GET request to jateDB');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('Data saved to jateDB', result);
};


initdb();
