import React from 'react';
import { 
    Container,
    MovieImage,
    MovieName,
    PlayButton,
 } from '../../styles/SelectionCard.styled';
import cardImage from '../../assets/images/cd.jpeg';

function SelectionCard() {
  return (
    <Container>
      <MovieImage src={cardImage} />
      <MovieName>Heaven is for real</MovieName>
      <PlayButton>Play Now</PlayButton>
    </Container>
  )
}

export default SelectionCard
