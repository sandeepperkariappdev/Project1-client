import * as Type from "../actions/types";

const initialUserObj = {
  loading: false,
  article: {},
  comments: [],
  likes: [],
  message: "",
};

const handleArticle = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      loading: false,
      article: JSON.parse(JSON.stringify(action.result)),
    });
  }
  return { ...newState };
};
const handleUpdateArticle = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      loading: false,
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }
  return { ...newState };
};

const handleNewComment = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }
  return { ...newState };
};

const handleArticleComments = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      comments: JSON.parse(JSON.stringify(action.result)),
    });
  }
  return { ...newState };
};

const handleArticleLikes = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      likes: JSON.parse(JSON.stringify(action.result)),
    });
  }
  return { ...newState };
};

const handleCreateArticle = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, action.result);
  }
  return { ...newState };
};

const handleBookmark = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }

  return { ...newState };
};
const handleRemoveBookmark = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }

  return { ...newState };
};

const handleLike = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }

  return { ...newState };
};

const handleArticleDelete = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      loading: false,
      article: {},
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }

  return { ...newState };
};
const handleLikeArticleDelete = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }
  return { ...newState };
};
<<<<<<< Updated upstream
=======
const handleEditComment = (state, action) => {
  const result = JSON.parse(JSON.stringify(action.result));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      comments: newState.comments.map((comment) => {
        if (comment._id === result._id) {
          comment.body = result.body;
        }
      }),
    });
  }

  return { ...newState };
};
const handleDeleteComment = (state, action) => {
  const result = JSON.parse(JSON.stringify(action.result));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      comments: newState.comments.filter(
        (comment) => comment._id !== result._id
      ),
    });
  }
  return { ...newState };
};
>>>>>>> Stashed changes
export default (state = initialUserObj, action = {}) => {
  switch (action.type) {
    // create new articles
    case Type.CREATE_ARTICLE:
      return { ...state, articleDetails: action.articleDetails };

    case Type.CREATE_ARTICLE_DETAILS_SERVER_RESPONSE_SUCCESS:
      return handleCreateArticle(state, action);

    case Type.CREATE_ARTICLE_DETAILS_SERVER_RESPONSE_ERROR:
      return { ...state };

    // fetch a particular article
    case Type.GET_ARTICLE_DETAILS:
      return { ...state, loading: true };

    case Type.GET_ARTICLE_DETAILS_SERVER_RESPONSE_SUCCESS:
      return handleArticle(state, action);

    case Type.GET_ARTICLE_DETAILS_SERVER_RESPONSE_ERROR:
      return { ...state };
    // update article
    case Type.UPDATE_ARTICLE_DETAILS:
      return { ...state };

    case Type.UPDATE_ARTICLE_DETAILS_SERVER_RESPONSE_SUCCESS:
      return handleUpdateArticle(state, action);

    case Type.UPDATE_ARTICLE_DETAILS_SERVER_RESPONSE_ERROR:
      return { ...state };

    // get article comments
    case Type.GET_ARTICLE_COMMENTS:
      return { ...state, loading: true };

    case Type.GET_ARTICLE_COMMENTS_SERVER_RESPONSE_SUCCESS:
      return handleArticleComments(state, action);

    case Type.GET_ARTICLE_COMMENTS_SERVER_RESPONSE_ERROR:
      return { ...state };

    // get article likes
    case Type.GET_ARTICLE_LIKES:
      return { ...state, loading: true };

    case Type.GET_ARTICLE_LIKES_SERVER_RESPONSE_SUCCESS:
      return handleArticleLikes(state, action);

    case Type.GET_ARTICLE_LIKES_SERVER_RESPONSE_ERROR:
      return { ...state };
    // Comment on an Article
    case Type.POST_COMMENT_ARTICLE:
      return { ...state, loading: true };

    case Type.POST_COMMENT_ARTICLE_DETAILS_SERVER_RESPONSE_SUCCESS:
      return handleNewComment(state, action);

    case Type.POST_COMMENT_ARTICLE_DETAILS_SERVER_RESPONSE_ERROR:
      return { ...state };

    case Type.DELETE_COMMENT_ARTICLE_SERVER_RESPONSE_ERROR:
      return { ...state };

    //  bookmark on an Article
    case Type.BOOKMARK_ARTICLE:
      return { ...state, loading: true };

    case Type.BOOKMARK_ARTICLE_SUCCESS_RESPONSE:
      return handleBookmark(state, action);

    case Type.BOOKMARK_ARTICLE_ERROR_RESPONSE:
      return { ...state };

    // Remove bookmark on an Article
    case Type.UN_BOOKMARK_ARTICLE:
      return { ...state, loading: true };

    case Type.UN_BOOKMARK_ARTICLE_SUCCESS_RESPONSE:
      return handleRemoveBookmark(state, action);

    case Type.UN_BOOKMARK_ARTICLE_ERROR_RESPONSE:
      return { ...state };

    //  like on an Article
    case Type.LIKE_ARTICLE:
      return { ...state, loading: true };

    case Type.LIKE_ARTICLE_SUCCESS_RESPONSE:
      return handleLike(state, action);

    case Type.LIKE_ARTICLE_ERROR_RESPONSE:
      return { ...state };
    //  delete like on an Article

    case Type.DELETE_LIKE_ARTICLE_SUCCESS_RESPONSE:
      return handleLikeArticleDelete(state, action);

    case Type.DELETE_LIKE_ARTICLE_ERROR_RESPONSE:
      return { ...state };

    // case Type.UPDATE_ARTICLE_SUCCESS:
    //     return handleArticleList(state, action);

    case Type.DELETE_ARTICLE_SUCCESS:
      return handleArticleDelete(state, action);

    default:
      return { ...state };
  }
};
