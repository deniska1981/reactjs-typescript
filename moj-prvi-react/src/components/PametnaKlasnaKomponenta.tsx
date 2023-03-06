import React, { Component } from 'react'

type Props = { message: string }

type State = { count: number }

export default class PametnaKlasnaKompnenta extends Component<Props,State> {
    state = { count: 0, hhh: "ui46iu54689" };
    render() {
      return (
        <div onClick={() => this.increment(1)}>
          {this.props.message} {this.state.count} {this.state.hhh}
        </div>
      );
    }
    increment = (amt: number) => {
      // like this
      this.setState((state) => ({
        count: state.count + amt,
        hhh: "dffs"
      }));
    };
}