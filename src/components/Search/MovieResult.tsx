import {FlatList as RNFlatList, Text} from 'react-native';
import styled from 'styled-components/native';
import {MovieType} from '../../types/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavParamList} from '../../navigations/RootNav';
import {useQuery} from '@tanstack/react-query';
import {fetchData} from '../../utils/fetch';
import {useState} from 'react';

const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;
const Separator = styled.View`
  width: 100%;
  border: 0.5px solid ${props => props.theme.neutralBg};
  margin: 5px 0;
`;
const Item = styled.TouchableOpacity`
  flex-direction: row;
`;
const PosterImage = styled.Image`
  width: 60px;
  height: 90px;
`;
const Info = styled.View`
  flex: 1;
  padding: 5px;
`;
const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.mainText};
`;
const ReleastDate = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.neutralText};
  margin-top: 5px;
`;
const PageBtn = styled.Button``;

interface MovieResultProps {
  searchQuery: string;
}
const MovieResult = ({searchQuery}: MovieResultProps) => {
  const navigation =
    useNavigation<StackNavigationProp<RootNavParamList, 'Tab'>>();

  const [pageNum, setPageNum] = useState<number>(1);

  const {
    data: movieData,
    isLoading: movieLoading,
    error: movieError,
  } = useQuery({
    queryKey: ['search', 'movie', searchQuery, pageNum],
    queryFn: () => fetchData.search.movie(searchQuery, pageNum),
  });

  const renderItem = ({item}: {item: MovieType}) => (
    <Item onPress={() => navigation.push('Detail', {id: item.id})}>
      <PosterImage
        source={{uri: `https://image.tmdb.org/t/p/w92${item.poster_path}`}}
      />
      <Info>
        <Title>{item.title}</Title>
        <Title>({item.original_title})</Title>
        <ReleastDate>{item.release_date}</ReleastDate>
      </Info>
    </Item>
  );

  return (
    <>
      <FlatList
        data={movieData?.results}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
      />
      <PageBtn title="1" onPress={() => setPageNum(1)} />
      <PageBtn title="2" onPress={() => setPageNum(2)} />
    </>
  );
};

export {MovieResult};
