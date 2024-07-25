import styled, {useTheme} from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavParamList} from '../navigations/RootNav';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchData} from '../utils/fetch';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBg};
`;
const ScrollView = styled.ScrollView`
  padding: 0 10px;
`;
const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
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
`;

type SearchScreenNavigationProp = StackNavigationProp<RootNavParamList, 'Tab'>;

interface HomeProps {
  navigation: SearchScreenNavigationProp;
}
const Search = ({navigation}: HomeProps) => {
  const theme = useTheme();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [submittedSearchQuery, setSubmittedSearchQuery] = useState<string>('');

  const {
    data: movieData,
    isLoading: movieLoading,
    error: movieError,
  } = useQuery({
    queryKey: ['search', 'movie', submittedSearchQuery],
    queryFn: () => fetchData.search.movie(submittedSearchQuery),
  });
  const {
    data: personData,
    isLoading: personLoading,
    error: personError,
  } = useQuery({
    queryKey: ['search', 'person', submittedSearchQuery],
    queryFn: () => fetchData.search.person(submittedSearchQuery),
  });
  const {
    data: companyData,
    isLoading: companyLoading,
    error: companyError,
  } = useQuery({
    queryKey: ['search', 'company', submittedSearchQuery],
    queryFn: () => fetchData.search.company(submittedSearchQuery),
  });

  return (
    <Container>
      <ScrollView>
        <SearchBarContainer>
          <SearchBtn>
            <SearchIcon name="search" size={18} />
          </SearchBtn>
          <SearchBarInput
            placeholder="영화, 사람, 회사 등"
            selectionColor={theme.mainTheme}
            onChangeText={newText => setSearchQuery(newText)}
            defaultValue={searchQuery}
            returnKeyType="search"
            onSubmitEditing={() => setSubmittedSearchQuery(searchQuery)}
          />
        </SearchBarContainer>
      </ScrollView>
    </Container>
  );
};

export default Search;
