import React, { useState, useContext } from 'react'
import './NewPost.css';
import Button from '../../../components/Button/Button'
import { NotificationContext } from '../../../util/NotificationContext/NotificationContext'

const NewPost = () => {
  const { addNotification } = useContext(NotificationContext)
  const [inputFields, setInputFileds] = useState({
    title: '',
    category: '',
    text: '',
    imgsrc: ''
  })

  const onChangeHandler = (e) => {
    setInputFileds({
      ...inputFields,
      [e.target.name]: e.target.value
    })
  }
  const onSubmitHandler = (e) => {
    if (inputFields.title && inputFields.category && inputFields.text && inputFields.imgsrc) {
      console.log(inputFields)
      setInputFileds({
        title: '',
        category: '',
        text: '',
        imgsrc: ''
      })
      alert('Post created')
    }
    else {
      addNotification('Please fill all the fields')
    }
    
  }

  return (
    <form className='post-form'>
      <input type="text" name='title' placeholder='Article Title' onChange={(e) => onChangeHandler(e)} value={inputFields.title} />
      <input type="text" name='category' placeholder='Article Category' onChange={(e) => onChangeHandler(e)} value={inputFields.category} />
      <input type="text" name='imgsrc' placeholder='Image Source Link' onChange={(e) => onChangeHandler(e)} value={inputFields.imgsrc} />
      <textarea name="text" cols="30" rows="10" placeholder='Article Text' onChange={(e) => onChangeHandler(e)} value={inputFields.text} />
      <Button type='submit' onClick={e => onSubmitHandler(e)} variant='outline'>Share this post</Button>
    </form>
  )
}

export default NewPost
