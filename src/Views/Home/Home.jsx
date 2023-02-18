import React from 'react'
import './Home.css'

import MainArticle from '../../components/Article/MainArticle/MainArticle'
import SubArticle from '../../components/Article/SubArticles/SubArticle'
import WithLoading from '../../util/WithLoading/WithLoading'


const Home = ({ setLoading }) => {
  setLoading(false)
    const posts = [1,2,3,4,5,6,7]
  return (
    <section className='home'>

      <MainArticle />
      
      <div className="sub-articles">
      {
        posts.map(postId => {
          return <SubArticle key={postId} />
        })
      }
      </div>
    </section>
  )
}

export default WithLoading(Home)
