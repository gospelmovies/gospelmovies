import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to bottom,
  rgba(0, 0, 0, 0.61) 20%,
  rgba(0, 0, 0, 0));
  z-index: 999;
  &.active {
    background: rgba(0, 0, 0, 0.84)
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 89px;
  padding: 10px 100px;
  @media (max-width: 1024px){
    padding: 10px 80px;
    gap: 60px;
  }
  @media (max-width: 768px){
    padding: 10px 30px;
  }
  @media (max-width: 425px){
    padding: 0 15px;
  }
`;
export const LogoWrapper = styled.img`
  width: 80px;
  height: 80px;
  @media (max-width: 768px){
    width: 60px;
    height: 60px;
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  @media (max-width: 820px){
    justify-content: flex-end;
  }
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 39px;
  @media (max-width: 1024px){
    gap: 20px;
  }
  @media (max-width: 820px){
    display: none;
  }
`;
export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 820px){
    display: none;
  }
`;
export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const NotifIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const HomeLink = styled.a`
  text-decoration: none;
`;
export const LinkItem = styled.a`
  color: white;
  text-decoration: none;
  font-family: openSans-Regular;
  font-size: 15px;
`;
export const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 820px){
    display: initial;
  }
`;
export const HamburgerMenuIcon = styled.img`
    color: white;
`;
export const DropdownMenu = styled.div`
    width: 120px;
    height: 150px;
    background-color: black;
    border: 1px solid grey;
    position: absolute;
    top: 80%;
    right: 4%;
    border-radius: 3px;
    padding: 10px 0 0 10px;
`;
export const Ul = styled.ul``;
export const Li = styled.li`
  list-style: none;
  padding-bottom: 5px;
`;
export const LinkItem2 = styled.a`
  color: white;
  text-decoration: none;
  font-family: openSans-Regular;
  font-size: 12px;
`;