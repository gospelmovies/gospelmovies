import styled from "styled-components";
import Logo from '../../assets/images/logo.svg'

const Container = styled.div`
  height: 450px;
  margin-top: 160px;
  border-bottom-width: 8px;
  border-bottom-style: solid;
  border-image: linear-gradient(90deg, #F00000 3.67%, #AE0097 52.51%, #8100FF 100%);
  border-image-slice: 1;
  padding: 50px 100px;
  @media (max-width: 768px){
    padding: 50px 30px;
    height: 380px;
  }
  @media (max-width: 500px){
    margin-top: 60px;
    height: 100%;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 100px;
  @media (max-width: 768px){
    gap: 70px;
  }
  @media (max-width: 400px){
    gap: 30px;
  }
`;
const LogoItem = styled.img`
  width: 170px;
  height: 170px;
  @media (max-width: 768px){
    width: 130px;
    height: 130px;
  }
  @media (max-width: 500px){
    display: none;
  }
`;
const Info1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const Info2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const Link = styled.a`
  font-size: 13px;
  color: white;
  font-family: openSans-Regular;
  text-decoration: none;
`;
const Bottom = styled.div`
  display: flex;
  padding-top: 100px;
  justify-content: center;
  gap: 50px;
  @media (max-width: 768px){
    gap: 20px;
  }
  @media (max-width: 500px){
    flex-direction: column;
    padding-top: 40px;
  }
`;

function Footer() {
    return(
        <Container>
            <Top>
                <LogoItem src={Logo} />
                <Info1>
                    <Link href='/'>Featured</Link>
                    <Link href='/'>Terms of Use</Link>
                    <Link href='/'>Mission</Link>
                    <Link href='/'>About Service</Link>
                </Info1>
                <Info2>
                    <Link href='/'>More Information</Link>
                    <Link href='/'>HomeSchool Curriculum</Link>
                    <Link href='/'>Browse</Link>
                    <Link href='/'>Best Christian Movies</Link>
                </Info2>
            </Top>
            <Bottom>
                <Link>Help Center</Link>
                <Link>Terms of Sale</Link>
                <Link>Privacy Policy</Link>
                <Link>Customer Support</Link>
                <Link>Cookie Consent Tool</Link>
            </Bottom>
        </Container>

    )
}

export default Footer