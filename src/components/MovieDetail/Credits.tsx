import styled from 'styled-components/native';
import {CastType, MovieCreditsType} from '../../types/types';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList as RNFlatList} from 'react-native-gesture-handler';
import {TitleWithMore} from '../TitleWithMore';

const Container = styled.View`
  padding: 10px;
`;
const TextContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.mainText};
  margin: 5px 0;
`;
const ChevronIcon = styled(Icon)`
  color: ${props => props.theme.neutralText};
`;
const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;
const ProfileImageContainer = styled.TouchableOpacity`
  width: 100px;
  padding: 10px;
`;
const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 0.1px solid ${props => props.theme.mainText};
`;
const NameText = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.mainText};
`;
const CharacterText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.mainText};
`;

interface CreditsProps {
  data: MovieCreditsType;
}
const Credits = ({data}: CreditsProps) => {
  const renderItem = ({item}: {item: CastType}) => (
    <ProfileImageContainer>
      <ProfileImage
        source={{
          uri: `https://image.tmdb.org/t/p/w185${item.profile_path}`,
        }}
      />
      <NameText>{item.name}</NameText>
      <CharacterText>{item.character}</CharacterText>
    </ProfileImageContainer>
  );

  return (
    <Container>
      <TitleWithMore title="출연진" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.cast.slice(0, 10)}
        renderItem={renderItem}
      />
    </Container>
  );
};

export {Credits};
