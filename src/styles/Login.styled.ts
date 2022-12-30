import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(90deg, #F00000 0%, #8100FF 100%);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Card = styled.div`
    height: 400px;
    width: 300px;
    background-color: white;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
`;
export const CardTitle = styled.div`
    font-family: openSans-Regular;
    font-size: 22px;
    text-align: center;
    font-weight: 800;
    color: black;
    padding-bottom: 70px;
`;
export const Form = styled.form`
    text-align: center;
`;
export const FormField = styled.div`
    padding-bottom: 15px;
`;
export const FormInput = styled.input`
    height: 45px;
    width: 80%;
    border: none;
    outline: none;
    background: #f0f0f0;
    padding-left: 10px;
    color: grey;
`;
export const FormButton = styled.button`
    height: 45px;
    width: 80%;
    margin-top: 10px;
    cursor: pointer;
`;