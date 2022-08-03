// Style your elements here
import styled from 'styled-components'

export const MainCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 15px;
`
export const NotesHead = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 30px;
`
export const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-shadow: 1px 1px 20px lightgrey;
`
export const InpEle = styled.input`
  border: 0px;
  outline: none;
  padding: 12px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
`
export const TextEle = styled.textarea`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
`
export const AddBtn = styled.button`
  background-color: #4c63b6;
  color: white;
  font-size: 18px;
  font-family: 'Roboto';
  border-radius: 10px;
  padding: 12px;
  align-self: flex-end;
`
export const NotesViewDiv = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 25px;
  align-items: center;
  width: 60%;
  list-style-type: none;
`
export const NoItemCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoHead = styled.h1`
  color: #323f4b;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 24px;
`
export const NoDes = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
`
export const Pic = styled.img`
  width: 200px;
  margin: 15px;
`
