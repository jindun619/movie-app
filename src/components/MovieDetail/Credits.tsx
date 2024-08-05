import styled from 'styled-components/native';
import { CastType, MovieCreditsType } from '../../types/types';
import { FlatList as RNFlatList } from 'react-native-gesture-handler';
import { BlockTitleWithMore } from '../BlockTitleWithMore';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootNavParamList } from '../../navigations/RootNav';

const Container = styled.View`
  padding: 10px;
  border: 1px solid ${props => props.theme.lightNeutralBg};
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
  text-align: center;
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.mainText};
`;
const CharacterText = styled.Text`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.mainText};
`;

interface CreditsProps {
  data: MovieCreditsType;
}
const Credits = ({ data }: CreditsProps) => {
  const navigation =
    useNavigation<StackNavigationProp<RootNavParamList, 'Detail'>>();

  const renderItem = ({ item }: { item: CastType }) => (
    <ProfileImageContainer
      onPress={() => {
        navigation.push('Person', { id: item.id });
      }}>
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
      <BlockTitleWithMore
        title="출연진"
        onPress={() => navigation.push('CreditsDetail', { data })}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.cast.slice(0, 10)}
        renderItem={renderItem}
      />
    </Container>
  );
};

export { Credits };
