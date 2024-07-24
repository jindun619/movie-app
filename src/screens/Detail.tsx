import {useQuery} from '@tanstack/react-query';
import styled from 'styled-components/native';
// import {fetchCredits, fetchDetail} from '../fetch';
import {fetchData} from '../utils/fetch';
import {RootNavParamList} from '../navigations/RootNav';
import {StackScreenProps} from '@react-navigation/stack';
import {
  MovieCreditsType,
  MovieDetailType,
  MovieType,
  MovieVideosType,
  RecommType,
} from '../types/types';
import {MovieInfo} from '../components/MovieDetail/MovieInfo';
import {Overview} from '../components/MovieDetail/Overview';
import {Credits} from '../components/MovieDetail/Credits';
import {Videos} from '../components/MovieDetail/Videos';
import {Production} from '../components/MovieDetail/Production';
import {Recomm} from '../components/MovieDetail/Recomm';

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

type DetailScreenProps = StackScreenProps<RootNavParamList, 'Detail'>;
const Detail = ({route, navigation}: DetailScreenProps) => {
  const {id} = route.params;
  const {
    data: detailData,
    isLoading: movieLoading,
    error: movieError,
  } = useQuery<MovieDetailType>({
    queryKey: ['detail', id],
    queryFn: () => fetchData.movie.detail(id),
  });
  const {
    data: creditsData,
    isLoading: creditsLoading,
    error: creditsError,
  } = useQuery<MovieCreditsType>({
    queryKey: ['credits', id],
    queryFn: () => fetchData.movie.credits(id),
  });
  const {
    data: videosData,
    isLoading: videosLoading,
    error: videosError,
  } = useQuery<MovieVideosType>({
    queryKey: ['video', id],
    queryFn: () => fetchData.movie.videos(id),
  });
  const {
    data: recommData,
    isLoading: recommLoading,
    error: recommError,
  } = useQuery<RecommType>({
    queryKey: ['recomm', id],
    queryFn: () => fetchData.movie.recomm(id),
  });

  return (
    <Container>
      <ScrollView>
        {detailData && (
          <BackdropImage
            source={{
              uri: `https://image.tmdb.org/t/p/w780${detailData.backdrop_path}`,
            }}
          />
        )}
        <ScrollViewContent>
          {detailData && creditsData && (
            <MovieInfo
              posterPath={`https://image.tmdb.org/t/p/w500${detailData?.poster_path}`}
              title={detailData.title}
              originalTitle={detailData.original_title}
              releaseDate={detailData.release_date}
              crewData={creditsData.crew}
              voteAverage={detailData.vote_average}
              voteCount={detailData.vote_count}
              runtime={detailData.runtime}
              genres={detailData.genres}
            />
          )}
          {detailData && (
            <Overview
              tagline={detailData.tagline}
              overview={detailData.overview}
            />
          )}
          {creditsData && <Credits data={creditsData} />}
          {videosData && <Videos data={videosData} />}
          {detailData && <Production data={detailData} />}
          {recommData && <Recomm data={recommData} />}
        </ScrollViewContent>
      </ScrollView>
    </Container>
  );
};

export default Detail;
