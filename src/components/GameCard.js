import React from 'react'; // eslint-disable-line
import { RefreeContainer, CountryName, FlagInfoContainer, HomeScore, ScoreContainer, Flag, FlagDataContainer, TimeTitle, DateTitle, BodyContainer, GameCardContainer, TitleContainer, Live, Title } from './style'

const GameCard = () => {
  return (
    <>
      <GameCardContainer>
        <TitleContainer>
          <Live>
            Live
          </Live>
          <Title>
            Title of Leage
          </Title>

        </TitleContainer>
        <BodyContainer>
          <DateTitle>
            09 Sep at
            <TimeTitle>
              14:09
            </TimeTitle>
          </DateTitle>
          <FlagDataContainer>
            <FlagInfoContainer>
              <Flag src='https://static.vecteezy.com/system/resources/thumbnails/002/431/840/small/illustration-of-the-brazil-flag-free-vector.jpg'/>
              <CountryName>Brazil</CountryName>
            </FlagInfoContainer>
            <ScoreContainer>
              <HomeScore>1</HomeScore>
              <HomeScore>:</HomeScore>
              <HomeScore>1</HomeScore>
              <RefreeContainer></RefreeContainer>
            </ScoreContainer>
            <FlagInfoContainer>
              <Flag src='https://media.istockphoto.com/photos/flag-of-argentina-picture-id610426496?k=20&m=610426496&s=612x612&w=0&h=cp7NsIY3L46GtiaDckLzftLJ7-JSPDqmtIHdirHjjgQ='/>
              <CountryName>Argentina</CountryName>
            </FlagInfoContainer>
          </FlagDataContainer>
        </BodyContainer>
      </GameCardContainer>
    </>
  )
}

export default GameCard