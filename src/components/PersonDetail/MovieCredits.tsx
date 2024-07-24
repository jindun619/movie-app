import {FlatList as RNFlatList} from 'react-native';
import styled from 'styled-components/native';
import {
  PersonMovieCreditsCastType,
  PersonMovieCreditsCrewType,
  PersonMovieCreditsType,
} from '../../types/types';
import Icon from 'react-native-vector-icons/Ionicons';
import {BlockTitle} from '../BlockTitle';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavParamList} from '../../navigations/RootNav';
import {translate} from '../../utils/utils';

const Container = styled.View`
  padding: 10px;
`;
const Item = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TitleRoleContainer = styled.View`
  flex: 1;
`;
const TitleBtn = styled.View``;
const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.theme.defaultBtn};
`;
const RoleText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.neutralText};
`;
const ChevronIcon = styled(Icon)`
  width: 30px;
  color: ${props => props.theme.neutralText};
`;
const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;
const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin: 5px 0;
  background-color: ${props => props.theme.neutralBg};
`;
const MarginVertical = styled.View`
  margin: 10px 0;
`;

interface MovieCreditsProps {
  data: PersonMovieCreditsType;
}
const MovieCredits = ({data}: MovieCreditsProps) => {
  const navigation =
    useNavigation<StackNavigationProp<RootNavParamList, 'Person'>>();

  const isCastType = (
    item: PersonMovieCreditsCastType | PersonMovieCreditsCrewType,
  ) => {
    return 'character' in item;
  };

  const renderItem = ({
    item,
  }: {
    item: PersonMovieCreditsCastType | PersonMovieCreditsCrewType;
  }) => (
    <Item onPress={() => navigation.push('Detail', {id: item.id as number})}>
      <TitleRoleContainer>
        <TitleBtn>
          <TitleText>{item.title}</TitleText>
        </TitleBtn>
        <RoleText>
          {isCastType(item)
            ? `${item.character} 역`
            : translate.department(item.department)}
        </RoleText>
      </TitleRoleContainer>
      <ChevronIcon name="chevron-forward-outline" size={24} />
    </Item>
  );
  const keyExtractor = (
    item: PersonMovieCreditsCastType | PersonMovieCreditsCrewType,
    index: number,
  ) => `${item.id}-${isCastType(item) ? 'cast' : 'crew'}-${index}`;

  return (
    <Container>
      <BlockTitle name="출연" />
      <FlatList
        data={data.cast}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
      />
      <MarginVertical></MarginVertical>
      <BlockTitle name="제작" />
      <FlatList
        data={data.crew}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
      />
    </Container>
  );
};

export {MovieCredits};
