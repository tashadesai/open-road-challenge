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
      <div className = "cf">
        {
          this.props.fivePosts.map(post => {
            return (
              <div className ="fl w-20 tc pv5 bg-black-10">
                <h3 key = {post.redditLink}>{post.title}</h3>
              </div>
            );
          })
        }
      </div>
    );
  }
}
