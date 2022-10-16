import React, { useReducer } from "react";
import axios from "axios";

export const postContext = React.createContext();





const INIT_STATE = {
  posts:[],
  onePost: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_POSTS":
      return {...state, posts: action.payload };
    case "GET_ONE_POST":
      return {...state, onePost: action.payload };
  }
  return state;
}

const PostContextProvider = ({ children }) => {
  const API = "http://localhost:8000/products";

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addPost(newPost) {
    await axios.post(API, newPost);
    getPosts();
  }

  async function getPosts() {
    let res = await axios(API);
    dispatch({
      type: "GET_POSTS",
      payload: res.data,
    });
  }

  async function deletePost(id) {
    await axios.delete(`${API}/${id}`);
    getPosts();
  }

  async function getOnePost(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_POST",
      payload: res.data,
    });
  }


 function updatePost(id, editedPost) {
  axios.patch(`${API}/${id}`, editedPost);
  }

  return (
    <postContext.Provider
      value={{
        posts: state.posts,
        onePost: state.onePost,
        addPost,
        getOnePost,
        deletePost,
        getPosts,
        updatePost,
   
      }}
    >
      {children}
    </postContext.Provider>
  );
};

export default PostContextProvider;
