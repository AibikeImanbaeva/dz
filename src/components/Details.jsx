import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postContext } from "../postContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Details = () => {
  const { getOnePost, onePost } = useContext(postContext);

  const params = useParams();

  useEffect(() => {
    getOnePost(params.id)}, []
  );

  return onePost ? (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={onePost.image} />
      <Card.Body>
        <Card.Title>{onePost.author}</Card.Title>
        <Card.Text>{onePost.body}</Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Details;
