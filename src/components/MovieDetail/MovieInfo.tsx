import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  padding: 10px;
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
const RateContainer = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;
const Rate = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.neutralText};
`;
const StarIcon = styled(Icon)``;
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
const GenresContainer = styled.View`
  width: 100%;
  margin-top: 2px;
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
const BackdropImage = styled.Image`
  width: 100%;
  height: 300px;
`;

interface MovieInfoProps {
  posterPath: string;
  title: string;
  originalTitle: string;
  releaseDate: string;
  voteAverage: number;
  runtime: number;
  genres: {id: number; name: string}[];
}
const MovieInfo = ({
  posterPath,
  title,
  originalTitle,
  releaseDate,
  voteAverage,
  runtime,
  genres,
}: MovieInfoProps) => {
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
        <Date>{releaseDate}</Date>
        <RateContainer>
          <StarIcon name="star" color="#FFDF00" />
          <Rate>{voteAverage ? Math.round(voteAverage * 10) / 10 : ''}</Rate>
        </RateContainer>
        <Runtime>러닝타임 {runtime}분</Runtime>
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
