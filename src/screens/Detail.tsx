import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components/native';
import { fetchData } from '../utils/fetch';
import { RootNavParamList } from '../navigations/RootNav';
import { StackScreenProps } from '@react-navigation/stack';
import {
  MovieCreditsType,
  MovieDetailType,
  MovieVideosType,
  RecommType,
} from '../types/types';
import { MovieInfo } from '../components/MovieDetail/MovieInfo';
import { Overview } from '../components/MovieDetail/Overview';
import { Credits } from '../components/MovieDetail/Credits';
import { Videos } from '../components/MovieDetail/Videos';
import { Production } from '../components/MovieDetail/Production';
import { Recomm } from '../components/MovieDetail/Recomm';
import { useState } from 'react';
import { Loading } from '../components/Loading';

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
const BackdropPlaceholder = styled.View`
  width: 100%;
  height: 300px;
`;
const ContentPlaceholder = styled.View`
  width: 100%;
  height: 170px;
`;

const ScrollViewContent = styled.View``;

type DetailScreenProps = StackScreenProps<RootNavParamList, 'Detail'>;
const Detail = ({ route }: DetailScreenProps) => {
  const { id } = route.params;

  const [backdropError, setBackdropError] = useState(false);

  const { data: detailData, isLoading: detailLoading } =
    useQuery<MovieDetailType>({
      queryKey: ['detail', id],
      queryFn: () => fetchData.movie.detail(id),
    });
  const { data: creditsData, isLoading: creditsLoading } =
    useQuery<MovieCreditsType>({
      queryKey: ['credits', id],
      queryFn: () => fetchData.movie.credits(id),
    });
  const { data: videosData, isLoading: videosLoading } =
    useQuery<MovieVideosType>({
      queryKey: ['video', id],
      queryFn: () => fetchData.movie.videos(id),
    });
  const { data: recommData, isLoading: recommLoading } = useQuery<RecommType>({
    queryKey: ['recomm', id],
    queryFn: () => fetchData.movie.recomm(id),
  });

  return (
    <Container>
      <ScrollView>
        {!detailData ? (
          <BackdropPlaceholder>
            <Loading />
          </BackdropPlaceholder>
        ) : backdropError || !detailData.backdrop_path ? (
          <BackdropImage source={require('../assets/no-image.png')} />
        ) : (
          <BackdropImage
            source={{
              uri: `https://image.tmdb.org/t/p/w780${detailData.backdrop_path}`,
            }}
            onError={() => setBackdropError(true)}
          />
        )}
        <ScrollViewContent>
          {detailLoading || creditsLoading ? (
            <ContentPlaceholder>
              <Loading />
            </ContentPlaceholder>
          ) : (
            detailData &&
            creditsData && (
              <MovieInfo
                posterPath={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`}
                title={detailData.title}
                originalTitle={detailData.original_title}
                releaseDate={detailData.release_date}
                crewData={creditsData.crew}
                voteAverage={detailData.vote_average}
                voteCount={detailData.vote_count}
                runtime={detailData.runtime}
                genres={detailData.genres}
              />
            )
          )}

          {detailLoading ? (
            <ContentPlaceholder>
              <Loading />
            </ContentPlaceholder>
          ) : (
            detailData && (
              <Overview
                tagline={detailData.tagline}
                overview={detailData.overview}
              />
            )
          )}

          {creditsLoading ? (
            <ContentPlaceholder>
              <Loading />
            </ContentPlaceholder>
          ) : (
            creditsData && <Credits data={creditsData} />
          )}

          {videosLoading ? (
            <ContentPlaceholder>
              <Loading />
            </ContentPlaceholder>
          ) : (
            videosData && <Videos data={videosData} />
          )}

          {detailLoading ? (
            <ContentPlaceholder>
              <Loading />
            </ContentPlaceholder>
          ) : (
            detailData && <Production data={detailData} />
          )}

          {recommLoading ? (
            <ContentPlaceholder>
              <Loading />
            </ContentPlaceholder>
          ) : (
            recommData && <Recomm data={recommData} />
          )}
        </ScrollViewContent>
      </ScrollView>
    </Container>
  );
};

export default Detail;
