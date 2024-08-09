import { StackScreenProps } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { RootNavParamList } from '../navigations/RootNav';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/fetch';
import { PersonInfo } from '../components/PersonDetail/PersonInfo';
import { PersonDetailType } from '../types/types';
import { Biography } from '../components/PersonDetail/Biography';
import { MovieCredits } from '../components/PersonDetail/MovieCredits';
import { Loading } from '../components/Loading';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.mainBg};
`;
const FlatList = styled.FlatList`
  width: 100%;
  padding-top: 10px;
`;
const ContentPlaceholder = styled.View`
  width: 100%;
  height: 245px;
`;

type PersonScreenProps = StackScreenProps<RootNavParamList, 'Person'>;
const Person = ({ route }: PersonScreenProps) => {
  const { id } = route.params;

  const { data: personDetailData, isLoading: personDetailLoading } =
    useQuery<PersonDetailType>({
      queryKey: ['person', 'detail', id],
      queryFn: () => fetchData.person.detail(id),
    });
  const {
    data: personDetailOriginalData,
    isLoading: personDetailOriginalLoading,
  } = useQuery<PersonDetailType>({
    queryKey: ['person', 'detail', 'original', id],
    queryFn: () => fetchData.person.detail(id, true),
  });
  const { data: personMovieCreditsData, isLoading: personMovieCreditsLoading } =
    useQuery({
      queryKey: ['person', 'movieCredits', id],
      queryFn: () => fetchData.person.movieCredits(id),
    });

  return (
    <Container>
      <FlatList
        data={[]}
        renderItem={null}
        ListEmptyComponent={
          <>
            {personDetailLoading ? (
              <ContentPlaceholder>
                <Loading />
              </ContentPlaceholder>
            ) : (
              personDetailData && <PersonInfo data={personDetailData} />
            )}

            {personDetailLoading || personDetailOriginalLoading ? (
              <ContentPlaceholder>
                <Loading />
              </ContentPlaceholder>
            ) : (
              personDetailData &&
              personDetailOriginalData && (
                <Biography
                  content={
                    personDetailData.biography ||
                    personDetailOriginalData.biography
                  }
                  name={personDetailData.name}
                />
              )
            )}

            {personMovieCreditsLoading ? (
              <ContentPlaceholder>
                <Loading />
              </ContentPlaceholder>
            ) : (
              personMovieCreditsData && (
                <MovieCredits data={personMovieCreditsData} />
              )
            )}
          </>
        }
      />
    </Container>
  );
};

export { Person };
