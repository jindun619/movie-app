import {ActivityIndicator, FlatList as RNFlatList, Text} from 'react-native';
import styled from 'styled-components/native';
import {PersonType} from '../../types/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavParamList} from '../../navigations/RootNav';
import {useInfiniteQuery} from '@tanstack/react-query';
import {fetchData} from '../../utils/fetch';
import {translate} from '../../utils/utils';

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
const Name = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.mainText};
`;
const Department = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.neutralText};
  margin-top: 5px;
`;
interface GenderProps {
  gender: number;
}
const Gender = styled.Text<GenderProps>`
  color: ${props => (props.gender === 0 ? '#2986cc' : '#c90076')};
`;

interface PersonDataType {
  page: number;
  results: PersonType[];
  total_pages: number;
  total_results: number;
}
interface PersonResultProps {
  searchQuery: string;
}
const PersonResult = ({searchQuery}: PersonResultProps) => {
  const navigation =
    useNavigation<StackNavigationProp<RootNavParamList, 'Tab'>>();

  const {
    data: peopleData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<PersonDataType>({
    queryKey: ['search', 'person', searchQuery],
    queryFn: ({pageParam = 1}) =>
      fetchData.search.person(searchQuery, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
      return undefined;
    },
  });

  const renderItem = ({item}: {item: PersonType}) => (
    <Item onPress={() => navigation.push('Person', {id: item.id})}>
      <PosterImage
        source={{uri: `https://image.tmdb.org/t/p/w185${item.profile_path}`}}
      />
      <Info>
        <Name>{item.name}</Name>
        <Department>
          {translate.department(item.known_for_department)}
        </Department>
        <Gender gender={item.gender}>{item.gender === 0 ? '♂️' : '♀️'}</Gender>
      </Info>
    </Item>
  );

  return (
    <>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={peopleData?.pages.flatMap(page => page.results) || []}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.25}
        ListFooterComponent={() =>
          isFetchingNextPage ? <ActivityIndicator size="small" /> : null
        }
      />
    </>
  );
};

export {PersonResult};
