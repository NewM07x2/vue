// localStorage.setItem('name', 'Smith')
// localStorage.removeItem('name')
// localStorage.clear()
// let result = localStorage.getItem('name')
// sessionStorage.setItem('name', 'John')
// sessionStorage.removeItem('name')
// sessionStorage.clear()
// result = sessionStorage.getItem('name')
// window.addEventListener('storage', (event) => {
//   // console.log('storage event', event)
// })
// document.cookie = 'name=Smith'
// document.cookie = 'id=123'
// result = document.cookie
// document.cookie.split(' ').forEach((cookie) => {
//   let [key, value] = cookie.split('=')
//   if (key === 'name') {
//     result = value
//   }
// })
// document.cookie = 'name=John max-age=3'
// document.cookie = 'name=John max-age=10'
// let date = new Date()
// date.setDate(date.getDate() + 1)
// document.cookie = `name=John expires=${date.toUTCString()}`
// date.setDate(date.getDate() + 1)
// document.cookie = `name=John expires=${date.toUTCString()}`
// document.cookie = 'name=John max-age=3'
// document.cookie = `name=John max-age=3 expires=${date.toUTCString()}`
// document.cookie = 'name=John max-age=0'
// document.cookie = 'name=John MAX-AGE=-3'
// document.cookie = `name=John Expires=${new Date(0).toUTCString()}`
// document.cookie = 'name=John'
// document.cookie = 'user=yoshipi path=/'
// document.cookie = 'user=yoshipi path=/items'
// document.cookie = 'user=yoshipi path=/items max-age=0'
// document.cookie = 'name=Smith domain=127.0.0.1'
// document.cookie = 'name=John'
// document.cookie = 'id=123 secure'
// document.cookie = 'name=Smith samesite=Strict'
// document.cookie = 'name=Smith samesite=Lax'
// document.cookie = 'name=Smith samesite=Lax'
// fetch('http://127.0.0.1:8080/', {
//   credentials: 'omit',
// })
// fetch('http://127.0.0.1:8080/', {
//   credentials: 'same-origin',
// })
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   credentials: 'same-origin',
// })
// fetch('https://jsonplaceholder.typicode.com/posts')
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   credentials: 'include',
// })
// fetch('http://192.168.11.16:8080', {
//   credentials: 'include',
// })
// document.cookie = 'name=John'
// result = encodeURIComponent('John')
// result = decodeURIComponent(result)
// document.cookie = `name=${encodeURIComponent('John')}`
// document.cookie.split(' ').forEach((cookie) => {
//   let [key, value] = cookie.split('=')
//   if (key === 'name') {
//     result = decodeURIComponent(value)
//   }
// })
// indexedDB.deleteDatabase('shop')
let openRequest = indexedDB.open('shop', 9)
openRequest.addEventListener('upgradeneeded', (event) => {
  console.log('upgradeneeded')
  console.log(event)
  let db = openRequest.result
  if (event.oldVersion < 1) {
    let books = db.createObjectStore('books', {
      autoIncrement: true,
      keyPath: 'id',
    })
    let titleIndex = books.createIndex('by_title', 'title', {
      // unique: true,
      multiEntry: true,
    })
    // let transaction = openRequest.transaction
    // let books = transaction.objectStore('books')
    db.createObjectStore('games')
    db.deleteObjectStore('games')
    result = db.objectStoreNames.contains('games')
    books.get(1)
    titleIndex.get('JavaScript Guide')
    console.log(result)
  }
  if (event.oldVersion < 2) {
    let games = db.createObjectStore('games')
    games.createIndex('by_title', 'title')
  }
})
openRequest.addEventListener('success', () => {
  console.log('success')
  let db = openRequest.result
  db.addEventListener('versionchange', () => {
    console.log('versionchange')
    db.close()
  })
  let transaction = db.transaction('books', 'readwrite')
  let books = transaction.objectStore('books')
  books.put({ title: 'JavaScript Guide' })
  books.put({ title: ['Java Guide', 'Ruby Guide'] })
  books.put({ title: {} })
  let request = books.add({ title: 'JavaScript Guide' })
  request.addEventListener('error', (event) => {
    console.log('error from request')
    console.log(event.target.error.message)
    event.preventDefault()
  })
  transaction.addEventListener('error', () => {
    console.log('error from transaction')
  })
  db.addEventListener('error', () => {
    console.log('error from db')
  })
  books.put({ title: 'Python Guide' })
  books.put([])
  books.put({ id: 10 })
  books.put(new Blob())
  request = books.get(1)
  request = books.get(IDBKeyRange.bound(1, 4))
  request = books.getAll(IDBKeyRange.bound(1, 4))
  request = books.getAll(IDBKeyRange.bound(1, []))
  request = books.getAll(IDBKeyRange.bound([1], [1, 1, 2]))
  request = books.getAll(IDBKeyRange.bound(1, 4, true, true))
  request = books.getAll(IDBKeyRange.lowerBound(1, true))
  request = books.getAll(IDBKeyRange.upperBound(4, true))
  request = books.getAllKeys(IDBKeyRange.upperBound(4, true))
  request = books.getKey(IDBKeyRange.upperBound(4, true))
  request = books.count(IDBKeyRange.upperBound(4, true))
  request = books.count(1)
  request = books.getAll()
  request = books.getAllKeys()
  request = books.count()
  let titleIndex = books.index('by_title')
  request = titleIndex.get('JavaScript Guide')
  request = titleIndex.getAll(IDBKeyRange.lowerBound('P'))
  request = titleIndex.getAllKeys()
  request = titleIndex.getKey('JavaScript Guide')
  request = books.openCursor(IDBKeyRange.bound(1, 4), 'nextunique')
  request.addEventListener('success', () => {
    cursor = request.result
    if (cursor) {
      console.log(
        'success from request',
        cursor.primaryKey,
        cursor.key,
        ':',
        cursor.value
      )
      // cursor.continue(3)
      cursor.advance(1)
    }
    // books.get(1)
    // transaction.abort()
  })
  books.delete(IDBKeyRange.lowerBound(10))
  // books.clear()
  transaction.addEventListener('complete', () => {
    console.log('complete')
    let transaction = db.transaction('books', 'readwrite')
    let books = transaction.objectStore('books')
    books.get(1)
  })
  transaction.addEventListener('abort', () => {
    console.log('abort')
  })
  setTimeout(() => {
    let transaction = db.transaction('books', 'readwrite')
    let books = transaction.objectStore('books')
    books.get(1)
  })
})
openRequest.addEventListener('error', () => {
  console.log('error')
  let error = openRequest.error
  console.log(error.message)
})
openRequest.addEventListener('blocked', () => {
  console.log('blocked')
})
