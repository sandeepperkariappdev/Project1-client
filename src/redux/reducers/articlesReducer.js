import * as Type from "../actions/types";

const initialUserObj = {
  loading: false,
  article: {},
  comments: [],
  likes: [],
  message: "",
};

const handleArticle = (state, action) => {
  console.log("Get Article" + JSON.stringify(action));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      loading: false,
      article: JSON.parse(JSON.stringify(action.result)),
    });
  }
  return { ...newState };
};
const handleNewComment = (state, action) => {
  console.log("NEW Comment" + JSON.stringify(action));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }
  return { ...newState };
};

const handleArticleComments = (state, action) => {
  console.log("Comments" + JSON.stringify(action));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      comments: JSON.parse(JSON.stringify(action.result)),
    });
  }
  return { ...newState };
};

const handleArticleLikes = (state, action) => {
  console.log(" Likes" + JSON.stringify(action));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      likes: JSON.parse(JSON.stringify(action.result)),
    });
  }
  return { ...newState };
};

const handleCreateArticle = (state, action) => {
  console.log("Create Article" + JSON.stringify(action.result));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, action.result);
  }
  return { ...newState };
};

const handleBookmark = (state, action) => {
  console.log("Bookmark an  Article" + JSON.stringify(action.result));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }

  return { ...newState };
};
const handleRemoveBookmark = (state, action) => {
  console.log("Remove Bookmark an  Article" + JSON.stringify(action.result));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }

  return { ...newState };
};

const handleLike = (state, action) => {
  console.log("Bookmark an  Article" + JSON.stringify(action.result));
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
  console.log("DELETE" + JSON.stringify(state.result));
  console.log("REducer DELETE" + JSON.stringify(action._id));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }

  return { ...newState };
};
const handleEditComment = (state, action) => {
  console.log("EDIT" + JSON.stringify(state.result));
  console.log("REducer EDIT" + JSON.stringify(action._id));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }

  return { ...newState };
};
const handleDeleteComment = (state, action) => {
  console.log("DELETE" + JSON.stringify(state.result));
  console.log("REducer DELETE" + JSON.stringify(action._id));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      message: JSON.parse(JSON.stringify(action.result)),
    });
  }

  return { ...newState };
};
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
    // EDIT a comment
    case Type.EDIT_COMMENT_ARTICLE:
      return { ...state, loading: true };

    case Type.EDIT_COMMENT_ARTICLE_SERVER_RESPONSE_SUCCESS:
      return handleEditComment(state, action);

    case Type.EDIT_COMMENT_ARTICLE_SERVER_RESPONSE_ERROR:
      return { ...state };
    // Delete a comment
    case Type.DELETE_COMMENT_ARTICLE:
      return { ...state, loading: true };

    case Type.DELETE_COMMENT_ARTICLE_SERVER_RESPONSE_SUCCESS:
      return handleDeleteComment(state, action);

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
