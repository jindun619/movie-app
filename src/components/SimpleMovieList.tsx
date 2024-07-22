import {ListRenderItem, FlatList as RNFlatList} from 'react-native';
import styled from 'styled-components/native';
import {MovieType} from '../types/types';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootNavParamList} from '../navigations/RootNav';

const FlatList = styled.FlatList`` as typeof RNFlatList;
const Poster = styled.TouchableOpacity`
  width: 100px;
`;
const Image = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 10px;
`;
const Title = styled.Text`
  width: 100%;
  font-size: 14px;
  color: ${props => props.theme.mainText};
  margin-top: 2px;
`;
const RateContainer = styled.View`
  flex-direction: row;
  margin-top: 2px;
`;
const Rate = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.neutralText};
`;
const StarIcon = styled(Icon)``;
const Separator = styled.View`
  width: 5px;
`;

interface SimpleMovieListProps {
  data: MovieType[];
}
const SimpleMovieList = ({data}: SimpleMovieListProps) => {
  const navigation = useNavigation<NavigationProp<RootNavParamList>>();

  const renderItem: ListRenderItem<MovieType> = ({item}) => (
    <Poster onPress={() => navigation.navigate('detail', {id: item.id})}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
      />
      <Title numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Title>
      <RateContainer>
        <StarIcon name="star" color="#FFDF00" />
        <Rate>{Math.round(item.vote_average * 10) / 10}</Rate>
      </RateContainer>
    </Poster>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  );
};

export {SimpleMovieList};
