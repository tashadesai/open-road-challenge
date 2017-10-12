import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

export default class FivePostDisplay extends Component {
  constructor(props) {
    super(props);

    this.shiftPosts = this.shiftPosts.bind(this);
  }

  shiftPosts(count) {
    var arr = [];

    for (var i = count - 4; i < count + 1; i++) {

      arr.push(this.props.hotPosts[i]);
    }

    this.props.fetchFivePosts(arr);
  }

  render() {
    console.log(this.props)
    return (
      <div className="row">
        {
          this.props.fivePosts.map((post, i) => {
            return (
              <div key = {i} className="col m-2 post">
                <h3>{"r/" + post.subreddit}</h3>
                <a href={post.url}>{post.title}</a>
              </div>
            );
          })
        }
      </div>
    );
  }
}
