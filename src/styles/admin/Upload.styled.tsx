import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
`;
export const Form = styled.form`
    padding: 40px 20px;
`;
export const Field = styled.div`
    margin-bottom: 30px;
`;
export const Label = styled.label`
    display: block;
    font-family: 'Mulish', sans-serif;
    margin-bottom: 5px;
    font-size: 14px;
`;
export const InputField = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #c6c6c6;
    border-radius: 8px;
    padding: 1.6em 1em;
    outline: none;
    color: gray ; 
    

`;


export const SelectInput = styled.select `

    padding: 0.9em 2em ;
    cursor: pointer; 
    outline: none;

`

export const FileInputField = styled.input``;

export const TextArea = styled.textarea`
    width: 100%;
    border: 1px solid #c6c6c6;
    border-radius: 4px;
    height: 70px;
    padding: 5px;
`;

export const PageTitle = styled.div`
    padding-left: 20px;
    padding-top: 20px;
    font-size: 18px;
    font-family: 'Mulish', sans-serif;
    font-weight: 600;
`;