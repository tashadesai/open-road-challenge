import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);
    // this.fetchCurrentLocation = this.fetchCurrentLocation.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchHotPosts();
  }

  componentDidMount() {
    console.log("Props", this.props)
  }

  render() {
    return (
      <div>
        <h1>Today's HOT Reddit Posts</h1>
        <h1>{console.log(this.props)}</h1>
      </div>
    );
  }
}
import { getAllHotPosts } from '../reducers/posts';

const mapStateToProps = state => ({
  hotPosts: state.posts
});

const mapDispatchToProps = dispatch => ({
  fetchHotPosts: () => {
    dispatch(getAllHotPosts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
