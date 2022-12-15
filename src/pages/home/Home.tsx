import { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import styled from 'styled-components'
import CoverImage from '../../assets/images/btcover.jpeg'
import StarIcon from '../../assets/images/star2.svg'
import MovieListing from '../../components/movie-listing'
import Footer from '../../components/footer/Footer'
import MobileCover from '../../assets/images/mobCover.jpeg'
import PlayIconImage from '../../assets/images/play2.svg'
import TimeImage from '../../assets/images/time.svg'
import MobileSelection from '../../components/selection/MobileSelection'

const Container = styled.div`
  height: 100%;
  background: black;
`
const HeaderWrapper = styled.div`
  position: relative;
`
const Cover = styled.div`
  background-image: linear-gradient(to top, rgb(0, 0, 0) 1%, rgba(0, 0, 0, 0)),
    url(${CoverImage});
  width: 100%;
  height: 700px;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    height: 500px;
  }
  @media (max-width: 518px) {
    height: 500px;
  }
  @media (max-width: 425px) {
    height: 100%;
    background-image: none;
    padding-bottom: 35px;
  }
`
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
    padding: 5px 20px;
  }
`
const MovieInfo = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`
const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 16px;
  @media (max-width: 525px) {
    gap: 20px;
  }
  @media (max-width: 425px) {
    display: none;
  }
`
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
`
const MovieDescription = styled.div`
  font-size: 16px;
  color: white;
  font-family: openSans-Regular;
  margin-top: 16px;
  margin-bottom: 13px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 425px) {
    order: 2;
    margin-top: 10px;
    font-family: inter-light;
    font-size: 11px;
  }
`
const MovieName = styled.div`
  font-size: 4.5rem;
  color: white;
  font-family: openSans-regular;
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
  @media (max-width: 525px) {
    font-size: 3rem;
  }
  @media (max-width: 425px) {
    font-size: 17px;
    font-family: inter-semi-bold;
  }
`
const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
`
const ShortInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  margin-bottom: 16px;
  @media (max-width: 425px) {
    order: 1;
    margin-top: 19px;
    margin-bottom: 10px;
  }
`
const Star = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 425px) {
    width: 17px;
    height: 16px;
  }
`
const RatingText = styled.div`
  color: #d3d3d3;
  font-size: 18px;
  font-family: openSans-Regular;
  @media (max-width: 425px) {
    font-size: 13px;
    line-height: 15px;
    font-family: inter-medium;
  }
`
const MovieAction = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media (max-width: 425px) {
    display: none;
  }
`
const PlayButton = styled.button`
  background: #8100ff;
  width: 100px;
  height: 30px;
  border-radius: 30px;
  color: white;
  font-size: 12px;
  border: none;
  cursor: pointer;
`
const PreviewButton = styled.button`
  background: transparent;
  width: 100px;
  height: 30px;
  border-radius: 30px;
  color: white;
  font-size: 12px;
  border: 2px solid #8100ff;
  cursor: pointer;
`
const Suggested = styled.div``
const MobileHead = styled.div`
  background-image: linear-gradient(to top, rgb(0, 0, 0) 1%, rgba(0, 0, 0, 0)),
    url(${MobileCover});
  background-position: top;
  background-size: cover;
  width: 90%;
  height: 304px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 65px auto 0 auto;
  border-radius: 12px;
  @media (min-width: 426px) {
    display: none;
  }
`
const PlayIcon = styled.img`
  width: 37px;
  height: 37px;
`
const PlayCover = styled.div`
  background: rgba(255, 255, 255, 0.16);
  padding: 12px;
  border-radius: 51px;
  border: 1.55px solid #dadada;
  backdrop-filter: blur(3.1px);
`
const MobileArrange = styled.div`
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`
const Plot = styled.div`
  @media (min-width: 426px) {
    display: none;
  }
  font-size: 17px;
  font-family: inter-bold;
  line-height: 21px;
  margin-bottom: 7px;
`
const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`
const TimeText = styled.div`
  font-size: 13px;
  line-height: 15px;
  font-family: inter-medium;
  color: #efefef;
`
const TimeIcon = styled.img``
const Cat = styled.div`
  font-size: 13px;
  font-family: inter-medium;
  line-height: 15px;
  color: #eeeeee;
`

function Home() {
  const [tab, setTab] = useState<string>('')
  function getWindowSize() {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
  }

  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [windowSize])

  return (
    <Container>
      <header>
        <Header />
      </header>
      <main>
        <MobileHead>
          <PlayCover>
            <PlayIcon src={PlayIconImage} />
          </PlayCover>
        </MobileHead>
        <Cover>
          <Content>
            <MovieInfo>
              <Categories>
                <Category>Faith</Category>
                <Category>Drama</Category>
                <Category>Historical</Category>
                <Category>Thriller</Category>
              </Categories>
              <MovieName>BREAKTHROUGH</MovieName>
              <MobileArrange>
                <MovieDescription>
                  <Plot>Plot</Plot>
                  The film tells the story of a St. Louis teenager who slipped
                  through an icy lake in January 2015 and was underwater for 15
                  minutes before resuscitative efforts were started. Although
                  being rescued, he is in a coma, and his family must rely on
                  their faith to get through the ordeal
                </MovieDescription>
                <ShortInfo>
                  <Rating>
                    <Star src={StarIcon} />
                    <RatingText>9.9</RatingText>
                  </Rating>
                  <Time>
                    <TimeIcon src={TimeImage} />
                    <TimeText>1hr 48min</TimeText>
                  </Time>
                  <Cat>Drama</Cat>
                </ShortInfo>
              </MobileArrange>
              <MovieAction>
                <PlayButton>PLAY NOW</PlayButton>
                <PreviewButton>PREVIEW</PreviewButton>
              </MovieAction>
            </MovieInfo>
          </Content>
        </Cover>
        {/*check to see if window width is less than 425px then display mobile slide section at the top if true */}
        {windowSize.innerWidth <= 425 && <MobileSelection />}
        {/*movie listings and categories starts here*/}
        <MovieListing />
      </main>

      <Footer />
    </Container>
  )
}

export default Home
