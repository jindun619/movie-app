import styled from 'styled-components/native';
import {useQuery} from '@tanstack/react-query';
import {fetchNowPlaying, fetchPopular} from '../fetch';
import {useEffect} from 'react';
import {SimpleMovieList} from '../components/SimpleMovieList';
import {Block} from '../components/Block';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native';
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
    queryFn: () => fetchNowPlaying(),
  });
  const {
    data: popularData,
    isLoading: popularLoading,
    error: popularError,
  } = useQuery({
    queryKey: ['popular'],
    queryFn: () => fetchPopular(),
  });

  return (
    <Container>
      <ScrollView>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('detail')}
        />
        {!nowPlayingLoading && (
          <Block title="지금 상영중">
            <SimpleMovieList data={nowPlayingData.results} />
          </Block>
        )}
        {!popularLoading && (
          <Block title="인기 영화">
            <SimpleMovieList data={popularData.results} />
          </Block>
        )}
      </ScrollView>
    </Container>
  );
};

export default Home;
