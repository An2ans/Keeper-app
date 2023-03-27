import styled from "styled-components";

export const NoteContainer = styled.div`
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 240px;
  margin: 16px;
  float: left;

  button {
    position: relative;
    float: right;
    margin-right: 10px;
    background: #f5ba13;
    color: #fff;
    border: none;
    width: 36px;
    height: 36px;
    cursor: pointer;
    outline: none;
  }

}`;

export const NoteTitle = styled.h1`
  font-size: 1.1em;
  margin-bottom: 6px;
`;

export const NoteContent = styled.p`
  font-size: 1.1em;
  margin-bottom: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
