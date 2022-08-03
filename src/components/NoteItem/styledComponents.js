// Style your elements here
import styled from 'styled-components'

export const NoteItemDiv = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex-wrap: wrap;
  width: 400px;
  box-shadow: 1px 1px 20px lightgrey;
  border-radius: 10px;
  margin: 15px;
`
export const NoteHead = styled.h1`
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 700;
`
export const NoteDes = styled.p`
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 16px;
`
