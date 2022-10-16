import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postContext } from "../postContext";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditPost = () => {
  const { getOnePost, onePost, updatePost } = useContext(postContext);
  const params = useParams();

  const navigate = useNavigate();

  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOnePost(params.id);
  }, []);


  useEffect(()=>{
    if(onePost){
      setAuthor(onePost.author)
      setBody(onePost.body)
      setImage(onePost.image)
    }
  }, [onePost])

function saveChanges (){
  if(!author || !body || !image) {
    alert('some inputs are empty!')
    return
  }



let newPost = {
author,
body,
image
}

updatePost(params.id, newPost)
navigate('/')

}

 

return onePost? (
<Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Добавить пост</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <input type="text" placeholder='author' value={author} onChange={(e)=>setAuthor(e.target.value)} />
<input type="text" placeholder='image' value={image} onChange={(e)=>setImage(e.target.value)} />
<input type="text" placeholder='body' value={body} onChange={(e)=>setBody(e.target.value)} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="warning" onClick={saveChanges} >Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>

): (
  <h2>Loading...</h2>
)
}

export default EditPost;
