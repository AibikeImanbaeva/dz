import React, {useState, useContext} from 'react';
import { postContext } from '../postContext'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'
const AddPost = () => {
const { addPost } = useContext(postContext);
const [body, setBody] = useState('');
const [author, setAuthor] = useState('');
const [image, setImage] = useState ('')


const navigate = useNavigate()

function createPost(){
if (!body || !author || !image){
  alert('some inputs are empty!')
  return
}

let newPost = {
  body,
  author,
  image
}

addPost(newPost)
setBody('')
setAuthor('')
setImage('')

navigate(`/`)

}

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Добавить пост</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <input type="text" placeholder='author' value={author} onChange={(e)=>setAuthor(e.target.value)} />
<input type="text" placeholder='image' value={image} onChange={(e)=>setImage(e.target.value)} />
<input type="text" placeholder='text' value={body} onChange={(e)=>setBody(e.target.value)} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="warning" onClick={createPost} >Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}

export default AddPost