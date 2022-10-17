import React, { useState} from 'react'

const Like = () => {
    const [like, setLike] =  useState(false)
  return (
    <h5 style={{marginTop:"20px"}}onClick={()=> setLike(!like)}>
    click: {like ? '🙊' : '🙉'}
</h5>
  )
}

export default Like