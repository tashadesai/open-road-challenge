import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import FivePostDisplay from './FivePostDisplay.jsx';
import { connect } from 'react-redux';


class Main extends Component {
  constructor(props) {
    super(props);

    this.shiftPosts = this.shiftPosts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      count: 4
    });

    this.props.fetchHotPosts();

  }

  shiftPosts(count) {
    var arr = [];

    for (var i = count - 4; i < count + 1; i++) {

      arr.push(this.props.hotPosts[i]);
    }

    this.props.fetchFivePosts(arr);
  }

  handleClick(event) {
    event.preventDefault;
    var newCount;

    if (this.state.count === 24) {
      newCount = 4
    } else {
      newCount = this.state.count + 5;
    }

    this.setState({
      count: newCount
    })

    this.shiftPosts(newCount)
  }

  render() {
    return (
      <div>
        <h1>Today's HOT Reddit Posts</h1>
        <FivePostDisplay fivePosts = {this.props.fivePosts}/>
        <button onClick={this.handleClick}>next</button>
      </div>
    );
  }
}

import { getAllHotPosts } from '../reducers/posts';
import { setFivePosts } from '../reducers/posts';

const mapStateToProps = state => ({
  hotPosts: state.posts.hotPosts,
  fivePosts: state.posts.fiveArr
});

const mapDispatchToProps = dispatch => ({
  fetchHotPosts: () => {
    dispatch(getAllHotPosts());
  },
  fetchFivePosts: (fiveArr) => {
    dispatch(setFivePosts(fiveArr))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
