import Header from "../../components/header/Header";
import styled from "styled-components";
import CoverImage from '../../assets/images/breakthrough.jpg'
import PlayIcon from '../../assets/images/play.svg'
import AddIcon from '../../assets/images/add.png'
import DownloadIcon from '../../assets/images/download.svg'
import Footer from "../../components/footer/Footer";

const Container = styled.div`
  height: 100%;
  background: black;
`;
const Cover = styled.div`
  background-image: linear-gradient(to top, rgb(0, 0, 0) 1%, rgba(0, 0, 0, 0)), url(${CoverImage});
  width: 100%;
  height: 550px;
  background-size: cover;
  background-position: 50% 30%;
  background-repeat: no-repeat;
  position: relative;
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
  padding: 200px 100px 60px 100px;
  position: absolute;
  left: 0;
  top: 25%;
  @media (max-width: 1024px) {
    padding: 200px 80px;
    gap: 60px;
  }
  @media (max-width: 768px) {
    padding: 150px 30px;
  }
  @media (max-width: 550px){
    padding: 100px 10px 0 10px !important;
    top: 45%;
  }
`;
const Title = styled.div`
  color: white;
  font-family: BebasNeue-Regular;
  font-size: 80px;
  margin-bottom: 10px;
  @media (max-width: 768px){
    font-size: 60px;
  }
  @media (max-width: 425px){
    font-size: 50px;
  }
`;
const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Download = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 425px){
    width: 40px;
    height: 40px;
  }
`;
const Add = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 425px){
    width: 40px;
    height: 40px;
  }
`;
const PlayButton = styled.div`
  background: white;
  width: 120px;
  height: 50px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 4px;
  font-family: openSans-Regular;
  @media (max-width: 425px){
    width: 100px;
    height: 40px;
  }
`;
const Play = styled.img`
  width: 20px;
  height: 20px;
`;
const MovieInfo = styled.div`
  padding: 0 100px 0 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 0 30px;
  }
  @media (max-width: 520px){
    flex-direction: column;
  }
  @media (max-width: 425px) {
    padding: 0 10px;
  }
`;
const MovieDescription = styled.p`
  color: white;
  font-size: 13px;
  font-family: openSans-Regular;
  flex: 0.6;
`;
const MoreInfo = styled.div`
  flex: 0.2;
  margin-left: auto;
  @media (max-width: 520px){
    margin-left: 0;
    margin-top: 10px;
  }
`;
const Genre = styled.div`
  font-family: openSans-Regular;
  color: white;
  font-size: 13px;
  margin-bottom: 15px;
`;
const GenreTitle = styled.div`
  color: #535353;
  font-size: 13px;
  font-family: openSans-Regular;
`;
const Rating = styled.div`
  color: #535353;
  font-size: 13px;
  font-family: openSans-Regular;
`;
const RatingNum = styled.div`
  color: #00FF38;
  border: 1px solid #00FF38;
  display: inline;
  padding: 0 3px;
`;

function MovieDetails() {
    return (
        <Container>
            <header>
                <Header/>
            </header>
            <main>
                <Cover>
                    <Content>
                        <Title>BreakThrough</Title>
                        <Action>
                            <PlayButton><Play src={PlayIcon} /> Play</PlayButton>
                            <Download src={DownloadIcon} />
                            <Add src={AddIcon} />
                        </Action>
                    </Content>
                </Cover>
                {/*movie information here*/}
                <MovieInfo>
                    <MovieDescription>
                        The film tells the story of a St. Louis teenager who slipped through an icy lake in
                        January 2015 and was underwater for 15 minutes before resuscitative efforts were
                        started. Although being rescued, he is in a coma, and his family must rely on
                        their faith to get through the ordeal
                    </MovieDescription>
                    <MoreInfo>
                        <Genre>
                            <GenreTitle>Genres:</GenreTitle>
                            Drama, Action, Thriller
                        </Genre>
                        <Rating>
                            Maturity rating: <RatingNum>13</RatingNum>
                        </Rating>
                    </MoreInfo>
                </MovieInfo>
            </main>
            <Footer />
        </Container>

    )
}

export default MovieDetails;