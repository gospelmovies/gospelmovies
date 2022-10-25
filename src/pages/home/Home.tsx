import Header from "../../components/header/Header";
import styled from "styled-components";
import CoverImage from '../../assets/images/btcover.jpeg'
import StarIcon from '../../assets/images/star.png'
import MovieListing from "../../components/movie-listing";
import Footer from "../../components/footer/Footer";

const Container = styled.div`
  height: 100%;
  background: black;
`;
const HeaderWrapper = styled.div`
  position: relative;
`;
const Cover = styled.div`
  background-image: linear-gradient(to top, rgb(0, 0, 0) 1%, rgba(0, 0, 0, 0)), url(${CoverImage});
  width: 100%;
  height: 700px;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    height: 500px;
  }
  @media (max-width: 518px) {
    height: 550px;
  }
  @media (max-width: 425px) {
    height: 470px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 200px 100px 0 100px;
  @media (max-width: 1024px) {
    padding: 200px 80px;
    gap: 60px;
  }
  @media (max-width: 768px) {
    padding: 150px 30px;
  }
  @media (max-width: 425px) {
    padding: 100px 10px;
  }
`;
const MovieInfo = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 16px;
  @media (max-width: 425px) {
    gap: 10px;
  }
`;
const Category = styled.div`
  font-family: openSans-regular;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.19);
  color: white;
  padding: 6px 20px;
  border-radius: 22px;
  border: 1px solid white;
  @media (max-width: 425px) {
    font-size: 7px;
  }
`;
const MovieDescription = styled.p`
  font-size: 16px;
  color: white;
  font-family: openSans-Regular;
  margin-top: 16px;
  margin-bottom: 13px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 425px) {
  }
`;
const MovieName = styled.div`
  font-size: 4.5rem;
  color: white;
  font-family: openSans-regular;
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
  @media (max-width: 425px) {
    font-size: 2.4rem;
  }
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;
const Star = styled.img`
  width: 30px;
  height: 30px;
`;
const RatingText = styled.div`
  color: #D3D3D3;
  font-size: 18px;
  font-family: openSans-Regular;
`;
const MovieAction = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const PlayButton = styled.button`
  background: #8100FF;
  width: 100px;
  height: 30px;
  border-radius: 30px;
  color: white;
  font-size: 12px;
  border: none;
  cursor: pointer;
`;
const PreviewButton = styled.button`
  background: transparent;
  width: 100px;
  height: 30px;
  border-radius: 30px;
  color: white;
  font-size: 12px;
  border: 2px solid #8100FF;
  cursor: pointer;
`;

const Suggested = styled.div``;


function Home() {
    return (
        <Container>
            <header>
                <Header/>
            </header>
            <main>
                <Cover>
                    <Content>
                        <MovieInfo>
                            <Categories>
                                <Category>Faith</Category>
                                <Category>Drama</Category>
                                <Category>Historical</Category>
                                <Category>Thriller</Category>
                            </Categories>
                            <MovieName>
                                BREAKTHROUGH
                            </MovieName>
                            <MovieDescription>
                                The film tells the story of a St. Louis teenager who slipped through an icy lake in
                                January 2015 and was underwater for 15 minutes before resuscitative efforts were
                                started. Although being rescued, he is in a coma, and his family must rely on
                                their faith to get through the ordeal
                            </MovieDescription>
                            <Rating>
                                <Star src={StarIcon}/>
                                <RatingText>9.9 | 10</RatingText>
                            </Rating>
                            <MovieAction>
                                <PlayButton>PLAY NOW</PlayButton>
                                <PreviewButton>PREVIEW</PreviewButton>
                            </MovieAction>
                        </MovieInfo>
                    </Content>
                </Cover>
                {/*movie listings and categories starts here*/}
                <MovieListing />
            </main>

            <Footer />
        </Container>

    )
}

export default Home;