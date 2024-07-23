import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import {CrewType} from '../../types/types';

const Container = styled.View`
  flex-direction: row;
  padding: 10px;
  border: 1px solid ${props => props.theme.lightNeutralBg};
`;
const PosterImage = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 10px;
`;
const Info = styled.View`
  padding-left: 10px;
  flex: 1;
`;
const Title = styled.Text`
  font-size: 28px;
  font-weight: 500;
  color: ${props => props.theme.mainText};
`;
const OriginalTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.mainText};
`;
const DateAndRuntime = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;
const Date = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.neutralText};
`;
const Runtime = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.neutralText};
`;
const DirectorContainer = styled.View`
  margin-top: 4px;
  flex-direction: row;
`;
const DirectorText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.mainText};
`;
const TouchableOpacity = styled.TouchableOpacity``;
const DirectorNameText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.defaultBtn};
`;
const RateContainer = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;
const Rate = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.neutralText};
`;
const StarIcon = styled(Icon)``;
const GenresContainer = styled.View`
  width: 100%;
  margin-top: 4px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
const Genre = styled.TouchableOpacity`
  margin-top: 5px;
  padding-right: 5px;
`;
const GenreText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.defaultBtn};
`;

interface MovieInfoProps {
  posterPath: string;
  title: string;
  originalTitle: string;
  releaseDate: string;
  crewData: CrewType[];
  voteAverage: number;
  voteCount: number;
  runtime: number;
  genres: {id: number; name: string}[];
}
const MovieInfo = ({
  posterPath,
  title,
  originalTitle,
  releaseDate,
  crewData,
  voteAverage,
  voteCount,
  runtime,
  genres,
}: MovieInfoProps) => {
  const director = crewData.filter(({job}) => job === 'Director')[0].name;

  return (
    <Container>
      <PosterImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500${posterPath}`,
        }}
      />
      <Info>
        <Title>{title}</Title>
        <OriginalTitle>({originalTitle})</OriginalTitle>
        <DateAndRuntime>
          <Date>{releaseDate} · </Date>
          <Runtime>러닝타임 {runtime}분</Runtime>
        </DateAndRuntime>
        <DirectorContainer>
          <DirectorText>감독 </DirectorText>
          <TouchableOpacity>
            <DirectorNameText>{director}</DirectorNameText>
          </TouchableOpacity>
        </DirectorContainer>
        <RateContainer>
          <StarIcon name="star" color="#FFDF00" />
          <Rate>{`${Math.round(voteAverage * 10) / 10} (${voteCount})`}</Rate>
        </RateContainer>
        <GenresContainer>
          {genres.map(({name}) => (
            <Genre key={name}>
              <GenreText>{name}</GenreText>
            </Genre>
          ))}
        </GenresContainer>
      </Info>
    </Container>
  );
};

export {MovieInfo};
