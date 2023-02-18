import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

import SubArticle from '../../components/Article/SubArticles/SubArticle'
import Button from '../../components/Button/Button'
import WithLoading from '../../util/WithLoading/WithLoading'
import { NotificationContext } from '../../util/NotificationContext/NotificationContext'

const Profile = ({ setLoading }) => {
    setLoading(false)
    const [isCurrentUser, setIsCurrentUser] = useState(true)
    const [isEdit, setIsEdit] = useState(false);
    const [defaultUser, setDefaultUser] = useState({
        name: "John Doe",
        bio: "John Doe is a web developer from New York. He is 27 years old and he likes to code."
    })
    const [editFields, setEditFields] = useState({
        text:"",
        bio:""
    });
    const [mockArticleIds, setMockArticleIds] = useState([1,2,3,4,5])
    const { addNotification } = useContext(NotificationContext)

    // if profile belngs to the logged in user, setCurrentUser to true

    
    const handleEdit = (e) => {
        setIsEdit(!isEdit);
        console.log(isEdit);
    }
    const confirmEdit = (e) => {
        if (editFields.name && editFields.bio) {

            setDefaultUser({
                name: editFields.name,
                bio: editFields.bio
            })
            setIsEdit(!isEdit);
        } else {
            addNotification("Please fill out all fields")
        }
        console.log(defaultUser);
    }
    const onChangeHandler = (e) => {
        setEditFields({
            ...editFields,
            [e.target.name]: e.target.value
        })
    }
    const handleDeletePost = (e, idx) => {
        setMockArticleIds(prevState => prevState.filter(id => id !== idx))
        console.log(mockArticleIds);
        console.log(idx);
    }
    
    const personImg = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"


  return (
    <section>
        <div className='profile-about'>
            <div className="profile-img" style={{backgroundImage: `url(${personImg})`}} />
            <div>
                {
                    !isEdit ?<>
                        <h3>{defaultUser.name}</h3>
                        <p>{defaultUser.bio}</p>
                        {
                            isCurrentUser ?<Button onClick={handleEdit} type='button' variant='outline'> Edit </Button>: null
                        }
                    </>
                    : <>
                        <form>
                            <input type="text" name="name" placeholder="John Doe" onChange={e => onChangeHandler(e)} value={editFields.name} />
                            <input type="text" name="bio" placeholder="John Doe is a web developer from New York. He is 27 years old and he likes to code." onChange={e => onChangeHandler(e)} value={editFields.bio} />
                            <Button variant="outline" type="submit" onClick={e => confirmEdit(e)}>Confirm Changes</Button>
                            <Button variant="outline" type="submit" onClick={e => handleEdit(e)}>Cancel Changes</Button>
                        </form>
                    </>
                }
            </div>
        </div>
        <div className='profile-posts'>
            <div className='profile-posts-head'>
                <h1>Posts</h1>
                <Link to={'/post/new'} className='new-post-btn' >
                New Post
                </Link>
            </div>
            <div className='profile-articles'>{
                mockArticleIds.map((id) => {
                    return isEdit ? <div>
                        <SubArticle key={-id} /> <Button onClick={(e) => handleDeletePost(e, id)} type='button' className='delete-btn' > X </Button> </div> 
                        : <SubArticle key={id} />
                })    
            }</div>
        </div>
    </section>
  )
}

export default WithLoading(Profile)
