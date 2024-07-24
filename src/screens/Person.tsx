import {StackScreenProps} from '@react-navigation/stack';
import styled from 'styled-components/native';
import {RootNavParamList} from '../navigations/RootNav';
import {useQuery} from '@tanstack/react-query';
import {fetchData} from '../utils/fetch';
import {PersonInfo} from '../components/PersonDetail/PersonInfo';
import {PersonDetailType} from '../types/types';
import {Biography} from '../components/PersonDetail/Biography';
import {MovieCredits} from '../components/PersonDetail/MovieCredits';
import {View} from 'react-native';

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

type PersonScreenProps = StackScreenProps<RootNavParamList, 'Person'>;
const Person = ({route, navigation}: PersonScreenProps) => {
  const {id} = route.params;

  const {
    data: personDetailData,
    isLoading: personDetailLoading,
    error: personDetailError,
  } = useQuery<PersonDetailType>({
    queryKey: ['person', 'detail', id],
    queryFn: () => fetchData.person.detail(id),
  });
  const {
    data: personMovieCreditsData,
    isLoading: personMovieCreditsLoading,
    error: personMovieCreditsError,
  } = useQuery({
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
            {personDetailData && <PersonInfo data={personDetailData} />}
            {personDetailData && (
              <Biography
                content={personDetailData.biography}
                name={personDetailData.name}
              />
            )}
            {personMovieCreditsData && (
              <MovieCredits data={personMovieCreditsData} />
            )}
          </>
        }
      />
    </Container>
  );
};

export {Person};
