import styled from 'styled-components';

export const Container = styled.div`
    width: 119px;
`;
export const MovieImage = styled.img`
    width: 119px;
    height: 158px;
    border-radius: 6px;
`;
export const MovieName = styled.div`
    font-family: 'Inter';
    font-size: 13px;
    margin-top: 10px;
`;
export const PlayButton = styled.button`
    margin-top: 10px;
    width: 90px;
    height: 27px;
    background: linear-gradient(90deg, #F00000 0%, #8100FF 100%);
    border: none;
    border-radius: 3px;
    outline: none;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 10px;
    color: white;
    cursor: pointer;
`;