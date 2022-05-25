import React from 'react'

const isSSR = !(typeof window === "undefined");

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div className={isSSR ? 'server' : 'client'}>Loading...</div>
    )
  }
}
