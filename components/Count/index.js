import React, { Suspense } from 'react';
import dynamic from 'next/dynamic'
// import PostLazy from '../Post';
import {Spinner} from 'components/base';

const promiseTest = () => import('../Post');

const PostLazy = dynamic(() => {
  // console.log(1);
  return new Promise((resolve, reject) => {
    // console.log(2);
   setTimeout(() => {
     // console.log(3);
     resolve(promiseTest())
   }, 4000);
  });
}, {
  suspense: false,
  loading: () => <p>Load......</p>,
  ssr: false
});

// console.log(PostLazy)

const isSSR = !(typeof window === "undefined");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
    }
  }

  tang = () => {
    console.log('tang');
    this.setState({
      count: this.state.count + 1,
    })
  }

  giam = () => {
    console.log('giam');
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.tang}>tang 1</button>
        <span>{this.state.count}</span>
        <button onClick={this.giam}>giam 1</button>
        {/*<Suspense fallback={<Spinner />}>*/}
          <PostLazy />
        {/*</Suspense>*/}
      </div>
    )
  }
}
