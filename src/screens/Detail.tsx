import {useQuery} from '@tanstack/react-query';
import styled from 'styled-components/native';
import {fetchDetail} from '../fetch';
import {RootNavParamList} from '../navigations/RootNav';
import {StackScreenProps} from '@react-navigation/stack';
import {MovieDetailType} from '../types/types';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.mainBg};
`;
const ScrollView = styled.ScrollView`
  width: 100%;
`;
const ScrollViewContent = styled.View``;
const BasicInfoContainer = styled.View`
  flex-direction: row;
  padding: 10px;
`;
const PosterImage = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 10px;
`;
const BasicInfo = styled.View`
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
const OverviewContainer = styled.View`
  padding: 15px;
  background-color: ${props => props.theme.lightNeutralBg};
`;
const OverviewTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.mainText};
`;
const OverviewContent = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.mainText};
`;

type DetailScreenProps = StackScreenProps<RootNavParamList, 'detail'>;
const Detail = ({route}: DetailScreenProps) => {
  const {id} = route.params;
  const {data, isLoading, error} = useQuery<MovieDetailType>({
    queryKey: ['detail', id],
    queryFn: () => fetchDetail(id),
  });

  return (
    <Container>
      <ScrollView>
        <BackdropImage
          source={{
            uri: `https://image.tmdb.org/t/p/w780${data?.backdrop_path}`,
          }}
        />
        <ScrollViewContent>
          <BasicInfoContainer>
            <PosterImage
              source={{
                uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}`,
              }}
            />
            <BasicInfo>
              <Title>{data?.title}</Title>
              <OriginalTitle>({data?.original_title})</OriginalTitle>
              <Date>{data?.release_date}</Date>
              <RateContainer>
                <StarIcon name="star" color="#FFDF00" />
                <Rate>
                  {data?.vote_average
                    ? Math.round(data?.vote_average * 10) / 10
                    : ''}
                </Rate>
              </RateContainer>
              <Runtime>러닝타임 {data?.runtime}분</Runtime>
              <GenresContainer>
                {data?.genres.map(({name}) => (
                  <Genre key={name}>
                    <GenreText>{name}</GenreText>
                  </Genre>
                ))}
              </GenresContainer>
            </BasicInfo>
          </BasicInfoContainer>
          <OverviewContainer>
            <OverviewTitle>줄거리</OverviewTitle>
            <OverviewContent>{data?.overview}</OverviewContent>
          </OverviewContainer>
        </ScrollViewContent>
      </ScrollView>
    </Container>
  );
};

export default Detail;
