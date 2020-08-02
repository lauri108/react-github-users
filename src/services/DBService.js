import { openDB, deleteDB, wrap, unwrap } from "idb";

const dbName = "mydbname";
const storeName = "GitHubSearches";
const version = 1;

const db = openDB(dbName, version, {
  upgrade(db, oldVersion, newVersion, transaction) {
    if (!db.objectStoreNames.contains(storeName)) {
      db.createObjectStore(storeName);
    }
  },
});

export default db;

//TODO: move stuff in Form.js to this service
