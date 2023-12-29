<template>
  <div id="api">
    <h1>IndexDB</h1>
    <b-container fluid class="container-original">
      <h2>IndexDB Practice</h2>
      <b-row align-h="center">
        <b-col cols="12">
          <b-button variant="primary" @click="createIndexedDB">Create DB</b-button>
          <b-button variant="primary" @click="setIndexedDBData">Set DB Data</b-button>
          <b-button variant="primary" @click="getIndexedDBData">Get DB Data</b-button>
          <b-button variant="primary" @click="getIndexedDBDataByTitle">Get DB Data By Index Title</b-button>
          <b-button variant="primary" @click="deleteIndexDB">Delete DB</b-button>
          <b-button variant="primary" @click="clearIndexDB">Clear DB</b-button>
        </b-col>
      </b-row>
      <!-- <b-row align-h="center" v-for="">
        <b-col cols="12" v-bind:key="">
        </b-col>
      </b-row> -->
    </b-container>
  </div>
</template>

<script>
// import api from '@/api'
// import axios from '@/api/axios'
import moment from 'moment'
export default {
  name: 'indexDB',
  data () {
    return {
      DBName: 'DB',
      ObjectStoreName: 'purchase_history'
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    createIndexedDB () {
      let db = {}
      try {
        // shopという名前のDBを作成。第一引数にDB名、第二引数にversionをしてすることができる。
        let openRequest = indexedDB.open(this.DBName)
        // DB作成時に初回のみ呼び出される
        openRequest.addEventListener('upgradeneeded', () => {
          console.log('upgradeneeded')
          db = openRequest.result
          console.log(db)
          /*
            indexDBはDBの中にKeyと複数のValueで構成される。
            この単位をオブジェクトストアという。オブジェクトストア作成はupgradeneededのみで実行可能
          */
          // オブジェクトストア作成
          let store = db.createObjectStore(this.ObjectStoreName, {
            autoIncrement: true,
            keyPath: 'id'
          })
          // インデックス作成:必ずupgradeneededで書く必要がある。
          // store.createdIndex('Index名','指定項目')
          store.createIndex('date', 'date')
          store.createIndex('title', 'title')

          db.createObjectStore('test')
          // オブジェクトストア削除
          db.deleteObjectStore('test')
          let result = db.objectStoreNames.contains('test')
          console.log(result)
        })

        // DB作成に成功した時、call
        openRequest.addEventListener('success', () => {
          console.log('success')
          let db = openRequest.result
          console.log(db)
          // 接続を解除する
          db.close()
        })
        // DB作成に失敗した時、call
        openRequest.addEventListener('error', () => {
          console.log('error')
          let error = openRequest.error
          console.log(error.message)
          db.close()
        })
      } catch (error) {
        console.log(error.message)
      } finally {
      }
    },
    setIndexedDBData () {
      var data = [
        {
          name: 'AAA',
          title: 'Vue',
          price: 100,
          date: moment(new Date()).format('YYYY/MM/DD hh:mm:ss')
        },
        {
          name: 'BBB',
          title: 'Python',
          price: 200,
          date: moment(new Date()).format('YYYY/MM/DD hh:mm:ss')
        }
      ]
      var openRequest = indexedDB.open(this.DBName)
      openRequest.addEventListener('success', () => {
        var db = openRequest.result
        // readonly readwrite
        let trans = db.transaction(this.ObjectStoreName, 'readwrite')
        let store = trans.objectStore(this.ObjectStoreName)
        data.forEach(item => {
          store.put(item)
        })
        // 接続を解除する
        db.close()
      })
      openRequest.addEventListener('error', () => {
        console.log(openRequest.error)
      })
    },
    getIndexedDBData () {
      var openRequest = indexedDB.open(this.DBName)
      openRequest.addEventListener('success', (event) => {
        var db = openRequest.result
        var transaction = db.transaction(this.ObjectStoreName, 'readonly')
        var store = transaction.objectStore(this.ObjectStoreName)
        var getRequest = store.getAll()
        // transaction.abort()

        getRequest.onsuccess = (event) => {
          let result = getRequest.result
          console.log('Get', result)
        }
        getRequest.addEventListener('success', (event) => {
          let result = getRequest.result
          console.log('Get', result)
        })

        getRequest.onerror = (event) => {
          console.log('Get Error', event.target.error.message)
          event.preventDefault()
        }
        getRequest.addEventListener('error', (event) => {
          console.log('Get Error', event.target.error.message)
        })
        transaction.oncomplete = () => {
          // 全てのtransaction処理が完了した時に発火されるイベント
          console.log('Get Complete')
        }
        transaction.onabort = () => {
          // 全てのtransaction処理が中断した時に発火されるイベント
          console.log('Get Abort')
        }
        // 接続を解除する
        db.close()
      })
    },
    getIndexedDBDataByTitle () {
      var openRequest = indexedDB.open(this.DBName)
      openRequest.onsuccess = (event) => {
        var db = openRequest.result
        var transaction = db.transaction(this.ObjectStoreName, 'readonly')
        var store = transaction.objectStore(this.ObjectStoreName)

        let titleIndex = store.index('title')
        let openCursor = titleIndex.openCursor()
        openCursor.onsuccess = (event) => {
          let res = openCursor.result
          if (res) {
            console.log('recode', res.key, res.value)
            res.continue()
          }
        }
        // console.log('titleIndex.count', titleIndex.count())
        // console.log('titleIndex.getAll', titleIndex.getAll())
        // console.log('titleIndex.getAllKeys', titleIndex.getAllKeys())
        // console.log('titleIndex.name', titleIndex.name)
      }
    },
    deleteIndexDB () {
      console.log('deleteIndexDB')
      let deleteRequest = indexedDB.deleteDatabase(this.DBName)

      deleteRequest.addEventListener('success', (event) => {
        console.log('delete success')
      })

      deleteRequest.addEventListener('error', () => {
        console.log('delete error')
      })
    },
    clearIndexDB () {
      let clearRequest = indexedDB.open(this.DBName)
      clearRequest.addEventListener('success', (event) => {
        var db = clearRequest.result
        var trans = db.transaction(this.ObjectStoreName, 'readwrite')
        var store = trans.objectStore(this.ObjectStoreName)
        store.clear()
        db.close()
      })
    }
  },
  beforeCreate () {
    // console.log('beforeCreate')
  },
  created () {
    // console.log('created')
  },
  beforeMount () {
    // console.log('beforeMount')
  },
  mounted () {
    // console.log('mounted')
  },
  beforeUpdate () {
    // console.log('beforeCreate')
  },
  updated () {
    // console.log('created')
  },
  beforeDestroy () {
    // console.log('beforeDestroy')
  },
  destroyed () {
    // console.log('destroyed')
  }
}
</script>
<style scoped>
</style>
