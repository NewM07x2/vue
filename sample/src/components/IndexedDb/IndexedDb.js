// db.js
import Dexie from 'dexie'

var db = new Dexie('myDataBase')
db.version(1).stores({
  friends: '++id, name, shoeSize'
})
