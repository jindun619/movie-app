import styled from 'styled-components/native';
import {useQuery} from '@tanstack/react-query';
import {fetchData} from '../fetch';
import {SimpleMovieList} from '../components/SimpleMovieList';
import {ListBlock} from '../components/ListBlock';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavParamList} from '../navigations/RootNav';
import {SimplePeopleList} from '../components/SimplePeopleList';

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

type HomeScreenNavigationProp = StackNavigationProp<RootNavParamList, 'Tab'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}
const Home = ({navigation}: HomeProps) => {
  const {
    data: nowPlayingMoviesData,
    isLoading: nowPlayingMoviesLoading,
    error: nowPlayingMoviesError,
  } = useQuery({
    queryKey: ['movieList', 'nowPlaying'],
    queryFn: () => fetchData.movieList.nowPlaying(),
  });
  const {
    data: popularMoviesData,
    isLoading: popularMoviesLoading,
    error: popularMoviesError,
  } = useQuery({
    queryKey: ['movieList', 'popular'],
    queryFn: () => fetchData.movieList.popular(),
  });
  const {
    data: topRatedMoviesData,
    isLoading: topRatedMoviesLoading,
    error: topRatedMoviesError,
  } = useQuery({
    queryKey: ['movieList', 'topRated'],
    queryFn: () => fetchData.movieList.topRated(),
  });
  const {
    data: popularPeopleData,
    isLoading: popularPeopleLoading,
    error: popularPeopleError,
  } = useQuery({
    queryKey: ['peopleList', 'popular'],
    queryFn: () => fetchData.peopleList.popular(),
  });

  return (
    <Container>
      <ScrollView>
        {!nowPlayingMoviesLoading && nowPlayingMoviesData.results && (
          <ListBlock title="지금 상영중">
            <SimpleMovieList data={nowPlayingMoviesData.results} />
          </ListBlock>
        )}
        {!popularMoviesLoading && popularMoviesData.results && (
          <ListBlock title="인기 영화">
            <SimpleMovieList data={popularMoviesData.results} />
          </ListBlock>
        )}
        {!topRatedMoviesLoading && topRatedMoviesData.results && (
          <ListBlock title="평점순">
            <SimpleMovieList data={topRatedMoviesData.results} />
          </ListBlock>
        )}
        {!popularPeopleLoading && popularPeopleData.results && (
          <ListBlock title="인기 배우">
            <SimplePeopleList data={popularPeopleData.results} />
          </ListBlock>
        )}
      </ScrollView>
    </Container>
  );
};

export default Home;
