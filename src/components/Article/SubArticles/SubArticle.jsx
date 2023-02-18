import React from 'react'
import CustomLink from '../../Link/Link'
import './SubArticle.css'

const SubArticle = () => {
    let fillerImage = "https://images.unsplash.com/photo-1577789140096-411a2f714caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
    let articleDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet n"
    articleDesc.length > 100 ? articleDesc = articleDesc.slice(0, 100) + "..." : articleDesc = articleDesc
  
  return (
      <article className='sub-article'>
      <img src={fillerImage} alt="img" />
      <div className='sub-article-detail'>
        <p>Article Category</p>
        <h3>Article Title</h3>
        <h4>{articleDesc}</h4>
        <CustomLink variant="more" link="/post/2" to="post/2" >Read More</CustomLink>
      </div>
    </article>
  )
}

export default SubArticle
