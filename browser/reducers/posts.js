import axios from 'axios';
import _ from 'lodash';

//Actions
const GET_HOT_POSTS = 'GET_HOT_POSTS';

//Action Creators
const getHotPosts = hotPosts => ({
  type: GET_HOT_POSTS,
  hotPosts
});

//Reducers
export default function redditReducer (state = {hotPosts: []}, action) {
  const newState = _.merge({}, state);
  switch (action.type) {
    case GET_HOT_POSTS:
      newState.hotPosts = action.hotPosts;
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
      var postArr = [];

      var promArr = returnedArr.map(post => {
        var newPost = {
          title: post.data.title,
          subreddit: post.data.subreddit,
          score: post.data.score,
          image: post.data.preview,
          redditLink: post.data.permalink,
          url: post.data.url
        };
        // console.log(post.data.preview.images[0].source.url)
        return newPost;
        // postArr.push(newPost);
      });

      dispatch(getHotPosts(promArr))

      // Promise.all(promArr)
      // .then(res => {
      //   dispatch(getHotPosts(res));
      // });

      // dispatch(getHotPosts(postArr));
    });
};


//Using touringplans api
// export const getAllAttractions = () => dispatch => {
//   axios.get('https://touringplans.com/disneyland/attractions.json')
//     .then(res => {
//       dispatch(getAttractions(res.data));
//     })
// }
