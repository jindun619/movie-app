import styled from 'styled-components/native';
import {useQuery} from '@tanstack/react-query';
// import {fetchNowPlaying, fetchPopular} from '../fetch';
import {fetchData} from '../fetch';
import {SimpleMovieList} from '../components/SimpleMovieList';
import {MovieListBlock} from '../components/MovieListBlock';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavParamList} from '../navigations/RootNav';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.mainBg};
`;
const ScrollView = styled.ScrollView`
  padding: 0 10px;
  padding-top: 30px;
`;

type HomeScreenNavigationProp = StackNavigationProp<RootNavParamList, 'home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}
const Home = ({navigation}: HomeProps) => {
  const {
    data: nowPlayingData,
    isLoading: nowPlayingLoading,
    error: nowPlayingError,
  } = useQuery({
    queryKey: ['nowPlaying'],
    queryFn: () => fetchData.nowPlaying(),
  });
  const {
    data: popularData,
    isLoading: popularLoading,
    error: popularError,
  } = useQuery({
    queryKey: ['popular'],
    queryFn: () => fetchData.popular(),
  });

  return (
    <Container>
      <ScrollView>
        {!nowPlayingLoading && (
          <MovieListBlock title="지금 상영중">
            <SimpleMovieList data={nowPlayingData.results} />
          </MovieListBlock>
        )}
        {!popularLoading && (
          <MovieListBlock title="인기 영화">
            <SimpleMovieList data={popularData.results} />
          </MovieListBlock>
        )}
      </ScrollView>
    </Container>
  );
};

export default Home;
