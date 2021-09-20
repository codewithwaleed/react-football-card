import styled from 'styled-components';
const myImage = ''
export const GameCardContainer = styled.div`
  height: auto;
  background-color: #fff;
  width: 30%;
  border: 1px solid #fff;
  border-radius: 0.5em;
  margin: 1.5em;
  box-shadow: 0px 8px 15px rgb(0 0 0 / 15%);
`

export const TitleContainer = styled.p`
  padding: 0.5em;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  display:flex;
  margin: 0;
`

export const Title = styled.p`
  text-align: center;
  width: 65%;
  padding: 0.5em 1em;
  font-weight: 600;
`

export const Live = styled.p`
  padding: 0.5em 1em;
  background-color: #ffc9c9;
  color: #c71e1e;
  width: 2em;
  z-index: 1;
`
export const BodyContainer = styled.div`
  margin : 0.8em 0;
`

export const DateTitle = styled.p`
  color: lightgrey;
  font-weight: 600;
`

export const TimeTitle = styled.span`
  color: #000;
  padding-left: 0.5em;
  font-weight: 600;
`

export const FlagDataContainer = styled.div`
  display: inline-flex;
`

export const FlagInfoContainer = styled.div`
  display: grid;
`
export const RefreeContainer = styled.div`

`
export const Flag = styled.img`
  width: 70px;
  height: 65px;
  border-radius: 50%;
`;
export const ScoreContainer = styled.div`
  display: flex;
  padding: 1em 2em;
`

export const HomeScore = styled.p`
  font-size: 1.2em;
  color: purple;
  padding: 0em 0.5em;
  font-weight: 600;
`

export const CountryName = styled.p`
  text-align: center;
  font-weight: 600;
`