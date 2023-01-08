import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
`;
export const Sidebar = styled.div`
    height: 100vh;
    width: 225px;
    background: #363740;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;
`;
export const Content = styled.div`
    margin-left: 225px;
    padding: 0px 10px;
`;
export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
export const MenuIcon = styled.img``;
export const MenuLink = styled.a``;