import React, { useContext, useEffect, useState } from "react";
import { postContext } from "../postContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Like from './Like'

const ProductList = () => {
  const { getPosts, posts, deletePost, updatePost } =
    useContext(postContext);

    const [like, setLike] = useState(false);



  useEffect(() => {
    getPosts();
  }, []);

  const navigate = useNavigate();
  

  return (
    <div class="d-flex" style={{justifyContent:"space-around"}}>
{posts.map((item) => (
    
        <Card key={item.id} style={{ width: "18rem", marginRight:'20px'}}>
          <Card.Img style={{ height:"250px", width:"18rem"}} variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.author}</Card.Title>
            <Card.Text>{item.body}</Card.Text>
            <Button style={{marginRight: "10px"}}
              variant="warning"
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              edit
            </Button>
            <Button style={{marginRight: "10px"}}
              variant="warning"
              onClick={() => navigate(`/details/${item.id}`)}
            >
              details
            </Button>
            <Button  style={{marginRight: "10px"}}variant="danger" onClick={() => deletePost(item.id)}>
              delete
            </Button>
            <Like />
          </Card.Body>
        </Card>
      ))}
   
    </div>
     
    
)
   
}

export default ProductList;
