import React from 'react'

const isSSR = (typeof window === "undefined");

if(!isSSR) {
  console.log(document.getElementById('xxx'))
  console.log(document.getElementById('yyy'))
}

export default class Spinner1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(document.getElementById('xxx'))
    console.log('componentDidMount', 'Spinner');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', 'Spinner');
  }

  render() {
    return (
      <div id="xxx" className={isSSR ? 'server' : 'client'}>Loading...</div>
    )
  }
}
