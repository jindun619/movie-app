import styled from 'styled-components/native';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/fetch';
import { SimpleMovieList } from '../components/SimpleMovieList';
import { SimplePeopleList } from '../components/SimplePeopleList';
import { Loading } from '../components/Loading';
import { Block } from '../components/Block';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.mainBg};
`;
const ScrollView = styled.ScrollView`
  width: 100%;
  padding: 0 10px;
`;
const LoadingPlaceholder = styled.View`
  width: 100%;
  height: 160px;
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
  const { data: popularPeopleData, isLoading: popularPeopleLoading } = useQuery(
    {
      queryKey: ['peopleList', 'popular'],
      queryFn: () => fetchData.peopleList.popular(),
    },
  );

  return (
    <Container>
      <ScrollView>
        <Block title="지금 상영중">
          {nowPlayingMoviesLoading ? (
            <LoadingPlaceholder>
              <Loading />
            </LoadingPlaceholder>
          ) : (
            nowPlayingMoviesData?.results && (
              <SimpleMovieList data={nowPlayingMoviesData.results} />
            )
          )}
        </Block>
        <Block title="인기 영화">
          {popularMoviesLoading ? (
            <LoadingPlaceholder>
              <Loading />
            </LoadingPlaceholder>
          ) : (
            popularMoviesData?.results && (
              <SimpleMovieList data={popularMoviesData.results} />
            )
          )}
        </Block>
        <Block title="평점순">
          {topRatedMoviesLoading ? (
            <LoadingPlaceholder>
              <Loading />
            </LoadingPlaceholder>
          ) : (
            topRatedMoviesData.results && (
              <SimpleMovieList data={topRatedMoviesData.results} />
            )
          )}
        </Block>
        <Block title="인기 배우">
          {popularPeopleLoading ? (
            <LoadingPlaceholder>
              <Loading />
            </LoadingPlaceholder>
          ) : (
            popularPeopleData.results && (
              <SimplePeopleList data={popularPeopleData.results} />
            )
          )}
        </Block>
      </ScrollView>
    </Container>
  );
};

export default Home;
