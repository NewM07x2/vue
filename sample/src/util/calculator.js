import _ from 'lodash'
const Bignumber = require('bignumber.js')
export default {
  // 自由端
  freeEdge (params) {
    return this.calcWithEmptyCheck(
      [
        params.postTopHeight,
        params.concretePostLength,
        params.embedment,
        params.topEndBetween
      ],
      () => {
        const wk = params.concretePostLength.minus(params.embedment)
        return params.postTopHeight
          .minus(wk)
          .plus(params.topEndBetween)
      }
    )
  },
  // 余長
  excessLength (params) {
    return this.calcWithEmptyCheck(
      [
        params.postLength,
        params.freeEdge,
        params.fulcrumDistance
      ],
      () => params.postLength
        .minus(params.freeEdge)
        .minus(params.fulcrumDistance)
    )
  },
  // 設置高さ
  concSetupHeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.concretePostLength,
        params.embedment
      ],
      () => params.concretePostLength
        .minus(params.embedment)
    )
  },
  // モーメント高さ
  momentHeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.setupHeight,
        params.equipDesignHeight
      ],
      () => Bignumber(
        params.setupHeight
          .plus(params.equipDesignHeight.dividedBy(2))
          .toFixed(3, Bignumber.ROUND_UP)
      )
    )
  },
  // モーメント高さ
  supMomentHeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.postTopHeight,
        params.postLength
      ],
      () => params.postTopHeight
        .minus(params.postLength.dividedBy(2))
    )
  },
  // モーメント高さ(キャップ式モデル)
  capSupMomentHeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.span1,
        params.span2,
        params.span3,
        params.concretePostLength,
        params.embedment
      ],
      () => {
        const groundHeight = params.concretePostLength.minus(params.embedment)
        const totalSpan = params.span1.plus(params.span2).plus(params.span3)
        return groundHeight.plus(totalSpan.dividedBy(2))
      }
    )
  },
  // モーメント高さ
  concMomentHeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.concretePostLength,
        params.embedment
      ],
      () => params.concretePostLength
        .minus(params.embedment)
        .dividedBy(2)
    )
  },
  // 設置高さ(キャップ式モデル)
  capSupSetupHeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.span1,
        params.span2,
        params.span3,
        params.concretePostLength,
        params.embedment
      ],
      () => {
        const groundHeight = params.concretePostLength.minus(params.embedment)
        const totalSpan = params.span1.plus(params.span2).plus(params.span3)
        return groundHeight.plus(totalSpan)
      }
    )
  },
  // 面積
  landArea (params) {
    return this.calcWithEmptyCheck(
      [
        params.n1,
        params.n2
      ],
      () => Bignumber(
        params.n1
          .multipliedBy(params.n2)
          .toFixed(3, Bignumber.ROUND_HALF_UP)
      )
    )
  },
  // 面積
  antLandArea (params) {
    return this.calcWithEmptyCheck(
      [
        params.n1,
        params.n2
      ],
      () => Bignumber(
        params.n1
          .multipliedBy(params.n2)
          .multipliedBy(1.1)
          .toFixed(3, Bignumber.ROUND_HALF_UP)
      )
    )
  },
  // 面積
  cableLandArea (params) {
    return this.calcWithEmptyCheck(
      [
        params.diameter,
        params.setupHeight
      ],
      () => Bignumber(
        params.diameter
          .dividedBy(1000)
          .multipliedBy(params.setupHeight)
          .toFixed(3, Bignumber.ROUND_HALF_UP)
      )
    )
  },
  // 面積
  supLandArea (params) {
    return this.calcWithEmptyCheck(
      [
        params.postLength,
        params.subjectSize
      ],
      () => Bignumber(
        params.postLength
          .multipliedBy(params.subjectSize.dividedBy(1000))
          .multipliedBy(1.1)
          .toFixed(3, Bignumber.ROUND_HALF_UP)
      )
    )
  },
  // 重量
  supWeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.postLength,
        params.subjectSize,
        params.postThick
      ],
      () => {
        const wk1 = this.pow(params.subjectSize, 2)
        const wk2 = this.pow(params.subjectSize.minus(params.postThick.multipliedBy(2)), 2)
        const wk3 = (wk1.minus(wk2)).dividedBy(4)
        const wk4 = Bignumber(Bignumber(Math.PI).multipliedBy(wk3).dividedBy(10000).toFixed(2, Bignumber.ROUND_HALF_UP))
        return Bignumber(
          wk4
            .multipliedBy(params.postLength)
            .multipliedBy(1000)
            .dividedBy(9.8)
            .multipliedBy(1.2)
            .multipliedBy(0.785)
            .toFixed(1, Bignumber.ROUND_HALF_UP)
        )
      }
    )
  },
  // 重量(キャップ式モデル)
  capSupWeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.totalWeight
      ],
      () => params.totalWeight.multipliedBy(100)
    )
  },
  // 重量
  cableWeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.weight,
        params.equipDesignHeight
      ],
      () => Bignumber(
        params.weight
          .multipliedBy(params.equipDesignHeight)
          .toFixed(3, Bignumber.ROUND_HALF_UP)
      )
    )
  },
  // 支持柱設計高さ
  postDesignHeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.setupHeight,
        params.equipDesignHeight,
        params.concretePostLength,
        params.embedment,
        params.topEndBetween
      ],
      () => {
        if (!params.extra) {
          const wk = params.setupHeight
            .minus(params.concretePostLength
              .minus(params.embedment)
              .minus(params.topEndBetween)
            )
          if (wk.comparedTo(0) <= 0) {
            return Bignumber(NaN)
          }
          return params.setupHeight
            .plus(params.equipDesignHeight.dividedBy(2))
            .minus(params.concretePostLength
              .minus(params.embedment)
              .minus(params.topEndBetween)
            )
        }
        else {
          const wk = params.setupHeight
            .minus(params.equipDesignHeight)
            .minus(params.concretePostLength
              .minus(params.embedment)
              .minus(params.topEndBetween)
            )
          if (wk.comparedTo(0) <= 0) {
            return Bignumber(NaN)
          }
          const wk2 = params.setupHeight
            .minus(params.equipDesignHeight.dividedBy(2))
            .minus(params.concretePostLength
              .minus(params.embedment)
              .minus(params.topEndBetween)
            )
          return wk2
        }
      }
    )
  },
  // 支持柱設計高さ
  cablePostDesignHeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.freeEdge,
        params.antPostDesignHeight
      ],
      () => params.freeEdge
        .dividedBy(2)
    )
  },
  // 支持柱設計高さ
  supPostDesignHeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.freeEdge,
        params.setupHeight,
        params.concretePostLength,
        params.embedment,
        params.postTopHeight
      ],
      () => {
        const wk = params.postTopHeight
          .minus(params.concretePostLength.minus(params.embedment))

        if (wk.comparedTo(0) <= 0) {
          return Bignumber(NaN)
        }
        return params.freeEdge
          .dividedBy(2)
      }
    )
  },
  // 支持柱設計時面積
  cablePostDesignArea (params) {
    return this.calcWithEmptyCheck(
      [
        params.diameter,
        params.postLength
      ],
      () => Bignumber(
        params.diameter
          .dividedBy(1000)
          .multipliedBy(params.postLength)
          .toFixed(3, Bignumber.ROUND_HALF_UP)
      )
    )
  },
  // 機器設計高さ
  equipDesignHeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.setupHeight,
        params.n
      ],
      () => params.setupHeight
        .minus(params.n)
    )
  },
  // 機器設計高さ
  cableEquipDesignHeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.antSetupHeight,
        params.antEquipDesignHeight,
        params.cableSetupHeight
      ],
      () => params.antSetupHeight
        .minus(params.antEquipDesignHeight)
        .minus(params.cableSetupHeight)
    )
  },
  // 地上高
  groundHeight (params) {
    return this.calcWithEmptyCheck(
      [
        params.postLength,
        params.embedment
      ],
      () => params.postLength
        .minus(params.embedment)
    )
  },
  // 設計荷重
  designLoad (params) {
    return this.calcWithEmptyCheck(
      [
        params.concretePostStrength
      ],
      () => params.concretePostStrength
        .multipliedBy(10)
    )
  },
  pow (base, exponent) {
    return Bignumber(Math.pow(base, exponent))
  },
  isEmpty (args) {
    const emptyArgs = _.filter(args, (arg) => _.isUndefined(arg) || _.isNull(arg) || Bignumber(arg).isNaN() || _.isEmpty(String(arg)))
    return emptyArgs.length > 0
  },
  calcWithEmptyCheck (args, calc) {
    return this.isEmpty(args) ? Bignumber(NaN) : calc()
  },
  calcZeroPointSix (item, qty) {
    let result = (item * qty) * 0.6
    return result
  },
  calcZeroPointEight (item, qty) {
    let result = (item * qty) * 0.8
    return result
  },
  calcAccessory (item) {
    let result = item * 0.6
    return result
  },
  calcEquip (target, mstData) {
    _.each(target, (item) => {
      item.consumeCurrent = (item.quantity * _.filter(mstData.equips.items, { 'equipId': item.equipId })[0].max) * 0.8
    })
    return target
  },
  calcConsider (target, data) {
    target += data * 0.8
    return target
  },
  calcThreeAndFourTimes (data) {
    let tableData = {
      retentionTime: [],
      h3: [],
      h4: []
    }
    if (data) {
      tableData.retentionTime.push((Math.round(44 / (data / 50) * 100) / 100).toFixed(2))
      tableData.retentionTime.push((Math.round(88 / (data / 50) * 100) / 100).toFixed(2))
      tableData.retentionTime.push('-')
      tableData.retentionTime.push((Math.round(92 / (data / 50) * 100) / 100).toFixed(2))
      tableData.retentionTime.push((Math.round(184 / (data / 50) * 100) / 100).toFixed(2))
      tableData.retentionTime.push((Math.round(276 / (data / 50) * 100) / 100).toFixed(2))
      tableData.retentionTime.push((Math.round(364 / (data / 50) * 100) / 100).toFixed(2))
      _.each(tableData.retentionTime, (item) => {
        if (item >= 3) {
          tableData.h3.push('可')
          if (item >= 4) {
            tableData.h4.push('可')
          }
          else {
            tableData.h4.push('')
          }
        }
        else {
          tableData.h3.push('')
          tableData.h4.push('')
        }
      })
    }
    return tableData
  },
  calcTwentyFourTimes (data) {
    let tableData2 = {
      retentionTime: [],
      h24: []
    }
    if (data) {
      tableData2.retentionTime.push(Math.round(1000 / (data / 50)))
      tableData2.retentionTime.push(Math.round(1500 / (data / 50)))
      tableData2.retentionTime.push(Math.round(1800 / (data / 50)))
      tableData2.retentionTime.push(Math.round(2000 / (data / 50)))
      tableData2.retentionTime.push(Math.round(3000 / (data / 50)))
      _.each(tableData2.retentionTime, (item) => {
        if (item >= 24) {
          tableData2.h24.push('可')
        }
        else {
          tableData2.h24.push('')
        }
      })
    }
    return tableData2
  }
}
