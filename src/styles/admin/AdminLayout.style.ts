import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
    padding-top: 0px;
`;
export const Content = styled.div`
    margin-left: 225px;
    padding: 0px 10px;
`;
export const DashboardMenu = styled.div`
    margin-top: 60px;
`;
export const MenuItem = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 32px;
    color: #A4A6B3;
    text-decoration: none;
    height: 56px;
    &.active{
        color: #DDE2FF;
        background-color: #3e4049;
        border-left: 1px solid #dde2ff;
    }
`;
export const MenuLink = styled.div`
    padding-left: 20px;
    font-size: 16px;
    font-family: 'Mulish', sans-serif;
    font-weight: 300;
`;
export const IconTag = styled.i`
    /* color: #DDE2FF; */
    width: 16px;
    height: 16px;
`;
export const DashboardHeader = styled.div`
    text-align: center;
`;
export const Logo = styled.img`
    width: 100px;
`;