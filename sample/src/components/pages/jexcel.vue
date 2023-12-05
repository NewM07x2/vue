<!-- <template>
  <div class='wrapper'>
    <input
      type='button'
      value='行を追加'
      @click='jspreadsheetObj.insertRow()'
    /><br />
    <input
      type='button'
      value='ヘッダー一覧を取得'
      @click='getHeaders()'
    /><br />
    <div id='jexcel' ref='refspreadsheet'></div>
    <br>
    <input
      type='button'
      value='csvをダウンロード'
      @click='jspreadsheetObj.download()'
    /><br />
  </div>
</template>

<script>
import 'jsuites/dist/jsuites.js'
import 'jsuites/dist/jsuites.css'
import 'jspreadsheet-ce/dist/jspreadsheet.css'
import jSpreadSheet from 'jspreadsheet-ce'
import '../../assets/css/styles.css'

export default {
  name: 'sheet',
  data () {
    return {
      VRHeadSets: [
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true],
        ['HTC', 'VIVE', '2016-12-1', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', '2160x1200', true]
      ]
    }
  },
  computed: {
    jSpreadSheetOptins () {
      return {
        data: this.VRHeadSets,
        columns: [
          {
            type: 'dropdown',
            title: 'Maker',
            width: '150px',
            source: ['HTC', 'Oculus', 'Valve']
          },
          { type: 'text', title: 'Name' },
          { type: 'calendar', title: 'Release date', width: '250px' },
          { type: 'Text', title: 'Resolution', width: '250px' },
          { type: 'Text', title: 'Resolution', width: '250px' },
          { type: 'Text', title: 'Resolution', width: '250px' },
          { type: 'Text', title: 'Resolution', width: '250px' },
          { type: 'Text', title: 'Resolution', width: '250px' },
          { type: 'Text', title: 'Resolution', width: '250px' },
          { type: 'checkbox', title: 'Get?', width: '80px' }
        ],
        tableOverflow: true,
        csvFileName: 'HeadSetsData',
        search: true,
        pagination: 10
      }
    }
  },
  methods: {
    getHeaders: function () {
      alert(this.jspreadsheetObj.getHeaders())
    }
  },
  mounted: function () {
    const jspreadsheetObj = jSpreadSheet(
      this.$refs['refspreadsheet'],
      this.jSpreadSheetOptins
    )
    Object.assign(this, { jspreadsheetObj })
  }
}

</script>
<style scoped>
#jexcel {
  overflow-x: auto;
  width: 100%;
  scrollbar-width: 100%;
}
.jexcel > .jexcel_filter {
  position: absolute !important;
}

.jexcel_content {
  margin: 50px 0 !important;
}
</style> -->
