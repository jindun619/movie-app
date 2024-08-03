import styled from 'styled-components/native';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/fetch';
import { SimpleMovieList } from '../components/SimpleMovieList';
import { ListBlock } from '../components/ListBlock';
import { SimplePeopleList } from '../components/SimplePeopleList';
import { Loading } from '../components/Loading';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.mainBg};
`;
const ScrollView = styled.ScrollView`
  padding: 0 10px;
`;

const Home = () => {
  const { data: nowPlayingMoviesData, isLoading: nowPlayingMoviesLoading } =
    useQuery({
      queryKey: ['movieList', 'nowPlaying'],
      queryFn: () => fetchData.movieList.nowPlaying(),
    });
  const { data: popularMoviesData, isLoading: popularMoviesLoading } = useQuery(
    {
      queryKey: ['movieList', 'popular'],
      queryFn: () => fetchData.movieList.popular(),
    },
  );
  const { data: topRatedMoviesData, isLoading: topRatedMoviesLoading } =
    useQuery({
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
        <ListBlock title="지금 상영중">
          {nowPlayingMoviesLoading ? (
            <Loading />
          ) : (
            nowPlayingMoviesData?.results && (
              <SimpleMovieList data={nowPlayingMoviesData.results} />
            )
          )}
        </ListBlock>
        <ListBlock title="인기 영화">
          {popularMoviesLoading ? (
            <Loading />
          ) : (
            popularMoviesData?.results && (
              <SimpleMovieList data={popularMoviesData.results} />
            )
          )}
        </ListBlock>
        <ListBlock title="평점순">
          {topRatedMoviesLoading ? (
            <Loading />
          ) : (
            topRatedMoviesData.results && (
              <SimpleMovieList data={topRatedMoviesData.results} />
            )
          )}
        </ListBlock>
        <ListBlock title="인기 배우">
          {popularPeopleLoading ? (
            <Loading />
          ) : (
            popularPeopleData.results && (
              <SimplePeopleList data={popularPeopleData.results} />
            )
          )}
        </ListBlock>
      </ScrollView>
    </Container>
  );
};

export default Home;
