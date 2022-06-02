<template>
  <div>
    <button @click='gojsLog'> gojsLog </button>
    <div id='myDiagramDiv'>test</div>
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
    <div id='HeadSetSpreadSheet' ref='refspreadsheet'></div>
    <br>
    <input
      type='button'
      value='csvをダウンロード'
      @click='jspreadsheetObj.download()'
    /><br />
  </div>
  </div>
</template>

<script>
import * as go from 'gojs'
import jexcel from 'jexcel'
import 'jsuites/dist/jsuites.js'
import 'jsuites/dist/jsuites.css'
import 'jspreadsheet-ce/dist/jspreadsheet.css'
// import jSpreadSheet from 'jspreadsheet-ce'
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'gojs START',
      excelData: [
        ['Mazda', 2001, 2000],
        ['Pegeout', 2010, 5000],
        ['Honda Fit', 2009, 3000],
        ['Honda CRV', 2010, 6000]
      ],
      VRHeadSets: [
        [
          'HTC',
          'VIVE',
          '2016-12-1',
          '2160x1200',
          true
        ],
        [
          'Oculus',
          'Rift S',
          '2019-05-20',
          '2560×1440',
          false
        ],
        [
          'Valve',
          'Index',
          '2019-06-28',
          '2880×1600',
          true
        ]
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
          { type: 'checkbox', title: 'Get?', width: '80px' }
        ],
        tableOverflow: true,
        csvFileName: 'HeadSetsData'
      }
    }
  },
  mounted () {
    var diagram = new go.Diagram('myDiagramDiv')
    diagram.model = new go.GraphLinksModel(
      [
        { key: 'AAA' },
        { key: 'BBB' },
        { key: 'CCC' }
      ],
      [
        { from: 'AAA', to: 'BBB' },
        { from: 'CCC', to: 'AAA' }
      ]
    )
    // jexcel(document.getElementById('my-spreadsheet'), {
    //   data: this.excelData,
    //   columns: [
    //     { title: 'Model', width: 300 },
    //     { title: 'Price', width: 80 },
    //     { title: 'Model', width: 100 }
    //   ]
    // })
    // // const $ = go.GraphObject.make
    // const myDiagram = new go.Diagram('myDiagramDiv', { 'undoManager.isEnabled': true })
    // myDiagram.nodeTemplate = new go.Node('Auto')
    //   .add(new go.Shape('RoundedRectangle', { strokeWidth: 0, fill: 'white' })
    //     .bind('fill', 'color'))
    //   .add(new go.TextBlock({ margin: 8, stroke: '#333' })
    //     .bind('text', 'key'))

    // myDiagram.model = new go.GraphLinksModel(
    //   [
    //     { key: 'Alpha', color: 'lightblue' },
    //     { key: 'Beta', color: 'orange' },
    //     { key: 'Gamma', color: 'lightgreen' },
    //     { key: 'Delta', color: 'pink' }
    //   ],
    //   [
    //     { from: 'Alpha', to: 'Beta' },
    //     { from: 'Alpha', to: 'Gamma' },
    //     { from: 'Beta', to: 'Beta' },
    //     { from: 'Gamma', to: 'Delta' },
    //     { from: 'Delta', to: 'Alpha' }
    //   ]
    // )
    let spreadsheet = jexcel(this.$el, {
      csv: 'demo.csv',
      csvHeaders: true,
      columns: [
        { width: 300 },
        { width: 80 },
        { width: 100 }
      ]
    })
    Object.assign(this, { spreadsheet })
  },
  methods: {
    gojsLog () {
      console.log(this.message)
    }
  },
  watch: {
    message () {
      console.log('変化あり')
    }
  }
}

</script>
<style scoped>
#store{
  margin: 10px 0;
  height: 100px;
  border-bottom: 1px lightgray dashed;
  border-top: 1px lightgray dashed;
}
li {
  list-style: none;
}
#myDiagramDiv {
  width:1500px; height:500px;
  background-color: #DAE4E4;
  margin: auto;
  margin-top: 20px;
}

</style>
