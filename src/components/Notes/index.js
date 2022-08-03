// Write your code here
import {useState} from 'react'

import NoteItem from '../NoteItem'

import {
  MainCon,
  NotesHead,
  FormDiv,
  InpEle,
  TextEle,
  AddBtn,
  NotesViewDiv,
  NoItemCon,
  Pic,
  NoHead,
  NoDes,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')

  const [commentsList, setCommentsList] = useState([])

  const onAddBtn = event => {
    event.preventDefault()
    const obj = {
      title,
      comment,
    }
    setCommentsList(prev => [...prev, obj])
    console.log(commentsList)
  }
  const changeTitle = event => {
    setTitle(event.target.value)
  }
  const changeComment = event => {
    setComment(event.target.value)
  }
  const renderNoItemCon = () => (
    <NoItemCon>
      <Pic
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoHead> No Notes Yet </NoHead>
      <NoDes> Notes you add will appear here </NoDes>
    </NoItemCon>
  )

  return (
    <MainCon>
      <NotesHead>Notes</NotesHead>
      <FormDiv>
        <InpEle
          type="text"
          placeholder="Title"
          value={title}
          onChange={changeTitle}
        />
        <TextEle
          rows="5"
          cols="30"
          placeholder="Take a note..."
          value={comment}
          onChange={changeComment}
        />
        <AddBtn onClick={onAddBtn}>Add</AddBtn>
      </FormDiv>

      <NotesViewDiv>
        {commentsList.length === 0
          ? renderNoItemCon()
          : commentsList.map(eachItem => <NoteItem eachItem={eachItem} />)}
      </NotesViewDiv>
    </MainCon>
  )
}
export default Notes
