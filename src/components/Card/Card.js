import React from 'react'
import './Card.css'
import CardMUI from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Moment from 'react-moment';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Card = ({ post, handleLike }) => {

  return (
    <CardMUI sx={{ maxWidth: 345, minHeight: 560}} className="card">
      <CardMedia
        component="img"
        height="180"
        image={post.image}
      />

      <CardActions className='card-actions'>
        <Moment fromNow>{post.created_at}</Moment>
        <IconButton style={{ color: "white", backgroundColor: "red", borderRadius: "5px", width: "60px", fontSize: "15px" }} className='button-likes' size="small" onClick={()=>handleLike(post.id)} >
          <FavoriteIcon style={{ width: "20px" }} /> {post.likes}
        </IconButton>
      </CardActions>

      <CardContent className="card-content">
        <h5>{post.author}</h5>
        <p>{post.content}</p>
      </CardContent>

      <CardContent className="comments">
        <IconButton style={{ color: "gray", fontSize: "15px" }} className='button-comments' size="small" >
          <ChatBubbleOutlineIcon />Comments ({post.comments})
        </IconButton>
      </CardContent>

    </CardMUI>
  )
}

export default Card