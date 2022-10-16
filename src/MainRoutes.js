import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import EditPost from "./components/EditPost";
import HomePage from "./components/HomePage";
import AddPost from "./components/AddPost";
import PostContextProvider from "./postContext";


const MainRoutes = () => {
  return (
    <PostContextProvider>
      <Routes>
        <Route path="/" element={<><HomePage /> <ProductList /></>} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </PostContextProvider>
  );
};

export default MainRoutes;
