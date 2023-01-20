import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsive} from '../../../utils/react-multi-carousel/MultipleCarousel'
import BoxImage1 from '../../../assets/images/item1.png'
import BoxImage2 from '../../../assets/images/item2.png'
import BoxImage3 from '../../../assets/images/item3.png'
import BoxImage4 from '../../../assets/images/item4.png'
import BoxImage5 from '../../../assets/images/item5.png'
import BoxImage6 from '../../../assets/images/item6.png'

const Wrapper = styled.div`
  padding: 0 30px 0 100px;
  margin-bottom: 71px;
  @media (max-width: 1024px){
    padding: 10px 80px;
    gap: 60px;
  }
  @media (max-width: 768px){
    padding: 10px 30px;
  }
  @media (max-width: 500px){
    margin-bottom: 30px;
  }
  @media (max-width: 425px){
    padding: 0 10px;
  }
`;
const SuggestedText = styled.h3`
  color: white;
  font-size: 20px;
  font-family: openSans-Regular;
`;
const SlideSection = styled.div``;

const ImgItem = styled.img`
  width: 100%;
  height: 160px;
  padding-right: 10px;
  @media (max-width: 768px){
    height: 130px;
  }
  @media (max-width: 600px){
    height: 110px;
  }
`;


function Suggested() {

    return (
        <Wrapper>
            <SuggestedText>Suggested for you</SuggestedText>
            {/*image slides here*/}
            <SlideSection>
               <Carousel responsive={responsive}>
                   <a href='/'>
                       <ImgItem src={BoxImage1} />
                   </a>
                   <a href='/'>
                       <ImgItem src={BoxImage2} />
                   </a>
                   <a href='/'>
                       <ImgItem src={BoxImage3} />
                   </a>
                   <a href='/'>
                       <ImgItem src={BoxImage4} />
                   </a>
                   <a href='/'>
                       <ImgItem src={BoxImage5} />
                   </a>
                   <a href='/'>
                       <ImgItem src={BoxImage6} />
                   </a>
                   <a href='/'>
                       <ImgItem src={BoxImage1} />
                   </a>
                   <a href='/'>
                       <ImgItem src={BoxImage2} />
                   </a>
                   <a href='/'>
                       <ImgItem src={BoxImage3} />
                   </a>
                   <a href='/'>
                       <ImgItem src={BoxImage4} />
                   </a>
                   <a href='/'>
                       <ImgItem src={BoxImage5} />
                   </a>
               </Carousel>
            </SlideSection>

        </Wrapper>
    )
}

export default Suggested;