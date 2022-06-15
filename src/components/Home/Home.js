import React, { useEffect, useState } from 'react'
import { getPosts } from '../../services/services'
import Card from '../Card/Card'
import './Home.css'
import { getLike } from '../../services/services'
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const [listPosts, setListPosts] = useState([])
  const [dataDisplay, setDataDisplay] = useState("")
  const [loading, setLoading] = useState(false)


  const handleShearch = (value) => {
    setDataDisplay(listPosts.filter((i) => {
      return i.author.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }))
  }

  const handleLike = (idPost) => {
    getLike(idPost).then((res)=>{
      const newData = [...listPosts]
      newData.find((post=> idPost === post.id)).likes = res.likes
      setListPosts(newData)
    }).catch()
  }

  useEffect(() => {
    setLoading(true)
    getPosts().then(res => { setListPosts(res); setDataDisplay(res) }).catch().finally(()=>setLoading(false))
  }, [])

  return (
    <div className="container">
      <div className="input-container">
        <input type="text" placeholder="Search..." onChange={(e) => handleShearch(e.target.value)} />
      </div>
      <div className="cards-container">
      {loading && <CircularProgress/>}
        {listPosts && dataDisplay && dataDisplay.map((i) => {
          return (
            <Card key={i.id} post={i} handleLike={handleLike}></Card>
          )
        })}
      </div>
    </div>
  )
}

export default Home
