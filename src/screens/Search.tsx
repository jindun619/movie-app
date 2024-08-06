import styled, { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { SearchTypeBtn } from '../components/Search/SearchTypeBtns';
import { MovieResult } from '../components/Search/MovieResult';
import { PersonResult } from '../components/Search/PersonResult';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBg};
  padding: 10px;
`;
const FlatList = styled.FlatList``;
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

const Search = () => {
  const theme = useTheme();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchType, setSearchType] = useState(0);

  useEffect(() => {
    setSearchQuery('');
  }, [searchType]);

  return (
    <Container>
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
      <FlatList
        contentContainerStyle={{ flex: 1 }}
        data={[]}
        renderItem={null}
        ListEmptyComponent={
          <>
            {searchType === 0 ? (
              <MovieResult searchQuery={searchQuery} />
            ) : searchType === 1 ? (
              <PersonResult searchQuery={searchQuery} />
            ) : (
              ''
            )}
          </>
        }
      />
    </Container>
  );
};

export default Search;
