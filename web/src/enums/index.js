class MimoCd {
  values () {
    return [
      { value: '00', text: 'SIMO' },
      { value: '01', text: '2T2R' },
      { value: '09', text: '4T2R' },
      { value: '02', text: '4T4R' },
      { value: '03', text: '8T8R' },
      { value: '06', text: '32T32R' },
      { value: '04', text: '64T64R' },
      { value: '05', text: '128T128R' },
      { value: '07', text: '192T192R' },
      { value: '08', text: '512T512R' }
    ]
  }

  getText (value) {
    return (this.values().find(entity => entity.value === value) || { text: '' }).text
  }
}

export default new MimoCd()
