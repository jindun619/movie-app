import styled, {useTheme} from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavParamList} from '../navigations/RootNav';
import Icon from 'react-native-vector-icons/Ionicons';
import {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchData} from '../utils/fetch';
import {SearchTypeBtn} from '../components/Search/SearchTypeBtns';
import {MovieResult} from '../components/Search/MovieResult';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBg};
`;
const FlatList = styled.FlatList`
  padding: 0 10px;
`;
const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
  width: 100%;
  background-color: ${props => props.theme.neutralBg};
  border-radius: 10px;
`;
const SearchBtn = styled.TouchableOpacity`
  margin-right: 5px;
`;
const SearchIcon = styled(Icon)`
  color: ${props => props.theme.neutralText};
`;
const SearchBarInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: ${props => props.theme.mainText};
`;
const SearchTypesContainer = styled.View`
  padding: 15px 0;
  width: 100%;
  flex-direction: row;
`;

type SearchScreenNavigationProp = StackNavigationProp<RootNavParamList, 'Tab'>;

interface HomeProps {
  navigation: SearchScreenNavigationProp;
}
const Search = ({navigation}: HomeProps) => {
  const theme = useTheme();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [submittedSearchQuery, setSubmittedSearchQuery] = useState<string>('');
  const [searchType, setSearchType] = useState(0);

  // const {
  //   data: movieData,
  //   isLoading: movieLoading,
  //   error: movieError,
  // } = useQuery({
  //   queryKey: ['search', 'movie', submittedSearchQuery],
  //   queryFn: () => fetchData.search.movie(submittedSearchQuery),
  // });
  const {
    data: personData,
    isLoading: personLoading,
    error: personError,
  } = useQuery({
    queryKey: ['search', 'person', submittedSearchQuery],
    queryFn: () => fetchData.search.person(submittedSearchQuery),
  });

  // useEffect(() => {
  //   console.log(personData);
  // }, [personData]);

  return (
    <Container>
      <FlatList
        data={[]}
        renderItem={null}
        ListEmptyComponent={
          <>
            <SearchBarContainer>
              <SearchBtn>
                <SearchIcon name="search" size={18} />
              </SearchBtn>
              <SearchBarInput
                placeholder="영화, 사람 등"
                selectionColor={theme.mainTheme}
                onChangeText={newText => setSearchQuery(newText)}
                defaultValue={searchQuery}
                returnKeyType="search"
                onSubmitEditing={() => setSubmittedSearchQuery(searchQuery)}
              />
            </SearchBarContainer>
            <SearchTypesContainer>
              <SearchTypeBtn
                name="영화"
                isActive={searchType === 0}
                onPress={() => setSearchType(0)}
              />
              <SearchTypeBtn
                name="인물"
                isActive={searchType === 1}
                onPress={() => setSearchType(1)}
              />
            </SearchTypesContainer>
            {searchQuery && <MovieResult searchQuery={searchQuery} />}
          </>
        }
      />
    </Container>
  );
};

export default Search;
