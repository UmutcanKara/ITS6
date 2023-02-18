import React from 'react'
import './SinglePost.css'
import { useParams } from 'react-router-dom'

import WithLoading from '../../../util/WithLoading/WithLoading'
import SubArticles from '../../../components/Article/SubArticles/SubArticle'

const SinglePost = ({ setLoading }) => {
    setLoading(false);
    const { id } = useParams();
    console.log(id);

    const similarPosts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const reducedSimilarPosts = similarPosts.length > 4 ? similarPosts.slice(0,4) : similarPosts;

    const defaultArticle = {
        title: 'An article title',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, vitae ultricies nisl nisl sit amet n",
        category: 'Category',
        image: "https://images.unsplash.com/photo-1577789140096-411a2f714caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
        author: {
            name: 'John Doe',
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            bio: "John Doe is a web developer from New York. He is 27 years old and he likes to code."
        }
    }
    const { title, description, category, image, author } = defaultArticle;
    const { name, bio } = author;
    const authorImage = author.image;
  return (
    <>
        <section className='post-single'>
            <div className='post-details'>
            <h2>{title}</h2>
                <img src={image} alt="" />
                <p> {category} </p>
                <h3> {description} </h3>
            </div>
            <div className='post-author-details'>
                <h2>About the author:</h2>
                <img src={authorImage} alt="" />
                <h3> {name} </h3>
                <p> {bio} </p>
            </div>
        </section>
        <section className="post-misc">
            <h2>Some posts you might like</h2>
            <div className='more-posts'>
            {
                reducedSimilarPosts.map(post => (<SubArticles key={post} />))
            }
            </div>
        </section>
    </>
  )
}

export default WithLoading(SinglePost)
