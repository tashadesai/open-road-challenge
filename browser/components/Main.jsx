import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import FivePostDisplay from './FivePostDisplay.jsx';
import { connect } from 'react-redux';


class Main extends Component {
  constructor(props) {
    super(props);

    this.shiftPosts = this.shiftPosts.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
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

  nextClick(event) {
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

  prevClick(event) {
    event.preventDefault;
    var newCount;

    if (this.state.count === 4) {
      newCount = 24
    } else {
      newCount = this.state.count - 5;
    }

    this.setState({
      count: newCount
    })

    this.shiftPosts(newCount)
  }

  render() {
    return (
      <div className="container main">
        <h1 className="row justify-content-md-center align-items-center py-4">Today's Hot Reddit Posts</h1>
        <FivePostDisplay fivePosts = {this.props.fivePosts}/>
        <div className="row justify-content-md-center">
          <button className="btn m-4" onClick={this.prevClick}>previous page</button>
          <button className="btn m-4" onClick={this.nextClick}>next page</button>
        </div>
      </div>
    );
  }
}

import { getAllHotPosts, setFivePosts } from '../reducers/posts';

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
