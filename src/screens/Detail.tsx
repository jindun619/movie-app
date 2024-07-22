import {useQuery} from '@tanstack/react-query';
import styled from 'styled-components/native';
// import {fetchCredits, fetchDetail} from '../fetch';
import {fetchData} from '../fetch';
import {RootNavParamList} from '../navigations/RootNav';
import {StackScreenProps} from '@react-navigation/stack';
import {
  MovieCreditsType,
  MovieDetailType,
  MovieVideosType,
} from '../types/types';
import {MovieInfo} from '../components/MovieDetail/MovieInfo';
import {Overview} from '../components/MovieDetail/Overview';
import {Credits} from '../components/MovieDetail/Credits';
import {Videos} from '../components/MovieDetail/Videos';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.mainBg};
`;
const ScrollView = styled.ScrollView`
  width: 100%;
`;
const BackdropImage = styled.Image`
  width: 100%;
  height: 300px;
`;
const ScrollViewContent = styled.View``;

type DetailScreenProps = StackScreenProps<RootNavParamList, 'detail'>;
const Detail = ({route}: DetailScreenProps) => {
  const {id} = route.params;
  const {
    data: movieData,
    isLoading: movieLoading,
    error: movieError,
  } = useQuery<MovieDetailType>({
    queryKey: ['detail', id],
    queryFn: () => fetchData.detail(id),
  });
  const {
    data: creditsData,
    isLoading: creditsLoading,
    error: creditsError,
  } = useQuery<MovieCreditsType>({
    queryKey: ['credits', id],
    queryFn: () => fetchData.credits(id),
  });
  const {
    data: videosData,
    isLoading: videosLoading,
    error: videosError,
  } = useQuery<MovieVideosType>({
    queryKey: ['video', id],
    queryFn: () => fetchData.videos(id),
  });

  return (
    <Container>
      <ScrollView>
        <BackdropImage
          source={{
            uri: `https://image.tmdb.org/t/p/w780${movieData?.backdrop_path}`,
          }}
        />
        {movieData && (
          <ScrollViewContent>
            <MovieInfo
              posterPath={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
              title={movieData.title}
              originalTitle={movieData.original_title}
              releaseDate={movieData.release_date}
              voteAverage={movieData.vote_average}
              runtime={movieData.runtime}
              genres={movieData.genres}
            />
            <Overview overview={movieData.overview} />
          </ScrollViewContent>
        )}
        {creditsData && <Credits data={creditsData} />}
        {videosData && <Videos data={videosData} />}
      </ScrollView>
    </Container>
  );
};

export default Detail;
