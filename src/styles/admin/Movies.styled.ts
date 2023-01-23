import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
`;
export const PageTitle = styled.div`
    padding-left: 20px;
    padding-top: 20px;
    font-size: 18px;
    font-family: 'Mulish', sans-serif;
    font-weight: 600;
`;
export const TableWrapper = styled.div`
    padding: 40px 20px;

`;
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    
`;
export const Tr = styled.tr`
    &:nth-child(even){
        background-color: #dddddd;
    }
`;
export const Th = styled.th`
    text-align: left;
    padding: 8px;
`;
export const Td = styled.td`
    text-align: left;
    padding: 8px;
`;