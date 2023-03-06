import React, { Component } from 'react'

type Props = {
    posebanText: string
}

type State = {}

export default class MojaPrvaKlasnaKomponenta extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>MojaPrvaKlasnaKomponenta {this.props.posebanText}</div>
    )
  }
}