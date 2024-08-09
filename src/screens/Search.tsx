import styled from 'styled-components/native';
import { useEffect, useState } from 'react';
import { SearchTypeBtn } from '../components/Search/SearchTypeBtns';
import { MovieResult } from '../components/Search/MovieResult';
import { PersonResult } from '../components/Search/PersonResult';
import { SearchBar } from '../components/Search/SearchBar';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBg};
  padding: 10px;
`;
const FlatList = styled.FlatList``;
const SearchTypesContainer = styled.View`
  padding: 15px 0;
  width: 100%;
  flex-direction: row;
`;

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchType, setSearchType] = useState(0);

  useEffect(() => {
    setSearchQuery('');
  }, [searchType]);

  return (
    <Container>
      <SearchBar
        searchQuery={searchQuery}
        onChangeText={setSearchQuery}
        onPressCancel={() => setSearchQuery('')}
      />
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
        contentContainerStyle={{ flexGrow: 1 }}
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
