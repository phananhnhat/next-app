import React, { Suspense } from 'react';
// import PostLazy from '../Post';
import Spinner from '../Spinner';

const PostLazy = React.lazy(() => import('../Post'));

const isSSR = !(typeof window === "undefined");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
    }
    this.test = 0;
    console.log('hrhrrhrhrhrh')
  }

  componentDidMount() {
    // console.log('componentDidMount')
    // this.setState({count: 10});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('componentDidUpdate')
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
    // alert(isSSR)
    return (
      <div>
        <button onClick={this.tang}>tang 1</button>
        <h3>{this.state.count} --- {this.props.xxx}</h3>
        <button onClick={this.giam}>giam 1</button>
        {this.test}
        <Suspense fallback={<Spinner />}>
          <PostLazy />
        </Suspense>
      </div>
    )
  }
}
