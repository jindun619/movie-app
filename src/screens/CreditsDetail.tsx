import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { FlatList as RNFlatList } from 'react-native';
import styled from 'styled-components/native';
import { RootNavParamList } from '../navigations/RootNav';
import { useNavigation } from '@react-navigation/native';
import { CastType } from '../types/types';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBg};
`;
const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;
const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
`;
const Image = styled.Image`
  margin-right: 10px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 0.1px solid ${props => props.theme.mainText};
`;
const Info = styled.View`
  flex: 1;
  align-items: left;
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
const Separator = styled.View`
  width: 100%;
  border: 1px solid ${props => props.theme.lightNeutralBg};
`;

type CreditsDetailScreenProps = StackScreenProps<
  RootNavParamList,
  'CreditsDetail'
>;
const CreditsDetail = ({ route }: CreditsDetailScreenProps) => {
  const navigation =
    useNavigation<StackNavigationProp<RootNavParamList, 'CreditsDetail'>>();

  const { data } = route.params;

  const renderItem = ({ item }: { item: CastType }) => (
    <ItemContainer
      onPress={() => {
        navigation.push('Person', { id: item.id });
      }}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w185${item.profile_path}`,
        }}
      />
      <Info>
        <NameText>{item.name}</NameText>
        <CharacterText>{item.character}</CharacterText>
      </Info>
    </ItemContainer>
  );

  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data.cast.slice(0, 10)}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
      />
    </Container>
  );
};

export { CreditsDetail };
