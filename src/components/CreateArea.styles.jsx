import styled from "styled-components";

export const CreateAreaContainer = styled.div`

form.create-note {
  position: relative;
  width: 480px;
  margin: 30px auto 20px auto;
  background: #fff;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 0 1px 5px rgb(138, 137, 137);

  input, textarea{
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
  }

  button{
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #f5ba13;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;

  }
}
`;
