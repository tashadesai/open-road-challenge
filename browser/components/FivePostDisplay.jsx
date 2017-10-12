import React, { Component } from 'react';

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
    return (
      <div className="row justify-content-md-center posts-container">
        {
          this.props.fivePosts.map((post, i) => {
            return (
              <div key = {i} className="col m-2 post">
                  <p className="subreddit my-4">{"r/" + post.subreddit}</p>
                  <a className="title" href={"https://reddit.com/" + post.redditLink}>{post.title}</a>
                  <p className="score mt-5 align-self-end">{"score: " + post.score}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}
