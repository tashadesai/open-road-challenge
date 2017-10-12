import axios from 'axios';
import _ from 'lodash';

//Actions
const GET_HOT_POSTS = 'GET_HOT_POSTS';
const GET_FIVE_POSTS = 'GET_FIVE_POSTS';

//Action Creators
const getHotPosts = hotPosts => ({
  type: GET_HOT_POSTS,
  hotPosts
});

const setCurrFivePosts = fiveArr => ({
  type: GET_FIVE_POSTS,
  fiveArr
})

//Reducers
export default function redditReducer (state = {hotPosts: [], fiveArr: []}, action) {
  const newState = _.merge({}, state);
  switch (action.type) {
    case GET_HOT_POSTS:
      newState.hotPosts = action.hotPosts;
      break;

    case GET_FIVE_POSTS:
      newState.fiveArr = action.fiveArr;
      break;

    default:
      return newState;
  }
  return newState;
}

//Dispatchers
export const getAllHotPosts = () => dispatch => {
  axios.get('https://www.reddit.com/hot.json')
    .then(res => {
      var returnedArr = res.data.data.children;

      var postArr = returnedArr.map(post => {
        var newPost = {
          title: post.data.title,
          subreddit: post.data.subreddit,
          score: post.data.score,
          image: post.data.preview,
          redditLink: post.data.permalink,
          url: post.data.url
        };
        return newPost;
      });

      var fiveArr = [postArr[0], postArr[1], postArr[2], postArr[3], postArr[4]]

      dispatch(getHotPosts(postArr));

      return fiveArr;
    })
    .then((fiveArr) => {
        dispatch(setCurrFivePosts(fiveArr));
      });
};

export const setFivePosts = (fiveArr) => dispatch => {
  dispatch(setCurrFivePosts(fiveArr));
};
