import styled from "@emotion/styled";
import { ErrorMessage, Field,Form } from 'formik';

export const MainForm = styled(Form)`
    display: flex;
    flex-direction: column;
    border: 1px solid #e2e2e2;
    gap: 30px;
    background-color: ${props => props.theme.colors.success};

`
export const Input = styled(Field)`
    display: flex;
    border: 2px solid blue;
    padding: 16px;
    font-size: 22px;
    border-radius: 5px;
    width: 100%;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
// export const AddForm = styled.form`
//     display: flex;
//     flex-direction: column;
//     border: 1px solid #e2e2e2;
// ` 
// export const NameInput = styled.input`
//     display: flex;
//     border: 2px solid blue;
//     padding: 16px;
//     font-size: 22px;
//     border-radius: 5px;
//     width: 100%;
//` 
export const AddBtn = styled.button`
    display: flex;
    border: 1px solid blue;
    padding: 10px;
    font-size: 22px;
    text-align: center;
    cursor: pointer;
`

export const StyledError = styled(ErrorMessage)`
  color: red;
`;
