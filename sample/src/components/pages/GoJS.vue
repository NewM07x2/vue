<template>
  <div>
    <button @click='gojsLog'> gojsLog </button>
    <div id='myDiagramDiv'>test</div>
  </div>
</template>

<script>
import * as go from 'gojs'

export default {
  name: 'GoJS',
  data () {
    return {
      message: 'gojs START',
      initModel: [
        { key: 'Alpha', color: 'lightblue' },
        { key: 'Beta', color: 'orange' },
        { key: 'Gamma', color: 'lightgreen' },
        { key: 'Delta', color: 'pink' }
      ],
      initDes: [
        { from: 'Alpha', to: 'Beta' },
        { from: 'Alpha', to: 'Gamma' },
        { from: 'Beta', to: 'Beta' },
        { from: 'Gamma', to: 'Delta' },
        { from: 'Delta', to: 'Alpha' }
      ]
    }
  },
  computed: {
  },
  mounted () {
    var myDiagram = new go.Diagram('myDiagramDiv', { 'undoManager.isEnabled': true })
    myDiagram.nodeTemplate = new go.Node('Auto')
      .add(new go.Shape('RoundedRectangle',
        {
          strokeWidth: 0,
          fill: 'white'
        }).bind('fill', 'color'))
      .add(new go.TextBlock(
        {
          margin: 10,
          stroke: '#222'
        }).bind('text', 'key'))

    // myDiagram.linkTemplate =
    // new go.Link('Auto')
    //   .add(
    //     new go.Shape('RoundedRectangle',
    //       new go.Shape('RoundedRectangle', { toArrow: 'Standard' }),
    //       new go.TextBlock('from',
    //         {
    //           segmentIndex: 0, segmentOffset: new go.Point(NaN, NaN),
    //           segmentOrientation: go.Link.OrientUpright
    //         }
    //       ),

    //       new go.TextBlock('to',
    //         {
    //           segmentIndex: -1, segmentOffset: new go.Point(NaN, NaN),
    //           segmentOrientation: go.Link.OrientUpright
    //         }
    //       )
    //     )
    //   )
    myDiagram.model = new go.GraphLinksModel(this.initModel, this.initDes)
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
  width:750px; height:500px;
  background-color: #DAE4E4;
  margin: auto;
  margin-top: 20px;
}

</style>
