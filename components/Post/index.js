import React from 'react'

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

    componentDidMount() {
        // console.log('componentDidMount', 'Post');
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount', 'Post');
    }

  render() {
    return (
      <div id="yyy">
        <p>This is content Post</p>
        <p>This is content Post</p>
        <p>This is content Post</p>
        <p>This is content Post</p>
      </div>
    )
  }
}
