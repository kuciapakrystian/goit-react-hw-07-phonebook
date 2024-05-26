import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 160px;
`;

export const Button = styled.button`
  padding: 4px 4px;
  background-color: #007bff;
  color: #fff;
  margin-left: 10px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #e7ecf1;
    color: #cc1a1adb;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  margin-bottom: 10px;
`;