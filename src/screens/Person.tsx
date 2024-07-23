import {StackScreenProps} from '@react-navigation/stack';
import styled from 'styled-components/native';
import {RootNavParamList} from '../navigations/RootNav';
import {useQuery} from '@tanstack/react-query';
import {fetchData} from '../fetch';
import {useEffect} from 'react';
import {PersonInfo} from '../components/PersonDetail/PersonInfo';
import {PersonDetailType} from '../types/types';
import {Biography} from '../components/PersonDetail/Biography';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.mainBg};
`;
const ScrollView = styled.ScrollView`
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

  useEffect(() => {
    console.log(personDetailData);
  }, [personDetailLoading]);

  return (
    <Container>
      <ScrollView>
        {personDetailData && <PersonInfo data={personDetailData} />}
        {personDetailData && (
          <Biography
            content={personDetailData.biography}
            name={personDetailData.name}
          />
        )}
      </ScrollView>
    </Container>
  );
};

export {Person};
