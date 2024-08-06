import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
  width: 100%;
  background-color: ${props => props.theme.neutralBg};
  border-radius: 10px;
`;
const SearchIcon = styled(Icon)`
  color: ${props => props.theme.neutralText};
  margin-right: 5px;
`;
const Input = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: ${props => props.theme.mainText};
`;
const CancelBtn = styled.TouchableOpacity``;
const CancelIcon = styled(Icon)`
  color: ${props => props.theme.neutralText};
`;

interface SearchBarProps {
  searchQuery: string;
  onChangeText: (text: string) => void;
  onPressCancel: () => void;
}
const SearchBar = ({
  searchQuery,
  onChangeText,
  onPressCancel,
}: SearchBarProps) => {
  const theme = useTheme();

  return (
    <Container>
      <SearchIcon name="search" size={18} />
      <Input
        placeholder="영화, 사람 등"
        selectionColor={theme.mainTheme}
        onChangeText={onChangeText}
        defaultValue={searchQuery}
        returnKeyType="search"
      />
      <CancelBtn onPress={onPressCancel}>
        <CancelIcon name="close-circle-outline" size={18} />
      </CancelBtn>
    </Container>
  );
};

export { SearchBar };
