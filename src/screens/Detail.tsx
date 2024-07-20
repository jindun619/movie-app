import {useQuery} from '@tanstack/react-query';
import styled from 'styled-components/native';
import {fetchDetail} from '../fetch';
import {RootNavParamList} from '../navigations/RootNav';
import {StackScreenProps} from '@react-navigation/stack';
import {MovieDetailType} from '../types/types';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.mainBg};
`;
const ScrollView = styled.ScrollView`
  width: 100%;
`;
const ScrollViewContent = styled.View`
  padding: 10px;
`;
const Row = styled.View`
  flex-direction: row;
`;
const PosterImage = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 10px;
`;
const BasicInfo = styled.View`
  padding-left: 10px;
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
const Date = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.neutralText};
`;
const Genres = styled.View`
  flex-direction: row;
`;
const Genre = styled.Button``;
const BackdropImage = styled.Image`
  width: 100%;
  height: 300px;
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
          <Row>
            <PosterImage
              source={{
                uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}`,
              }}
            />
            <BasicInfo>
              <Title>{data?.title}</Title>
              <OriginalTitle>({data?.original_title})</OriginalTitle>
              <Date>{data?.release_date}</Date>
              <Genres>
                <Genre title="genre1"></Genre>
                <Genre title="genre2"></Genre>
              </Genres>
            </BasicInfo>
          </Row>
        </ScrollViewContent>
      </ScrollView>
    </Container>
  );
};

export default Detail;
