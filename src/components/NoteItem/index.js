// Write your code here
import {NoteItemDiv, NoteHead, NoteDes} from './styledComponents'

const NoteItem = props => {
  const {eachItem} = props

  const {title, comment} = eachItem

  return (
    <NoteItemDiv>
      <NoteHead> {title}</NoteHead>
      <NoteDes> {comment} </NoteDes>
    </NoteItemDiv>
  )
}
export default NoteItem
