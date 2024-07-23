import {FlatList as RNFlatList} from 'react-native';
import styled from 'styled-components/native';
import {PersonType} from '../types/types';

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
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.mainText};
`;

interface SimplePeopleListProps {
  data: PersonType[];
}
const SimplePeopleList = ({data}: SimplePeopleListProps) => {
  const renderItem = ({item}: {item: PersonType}) => (
    <ProfileImageContainer>
      <ProfileImage
        source={{
          uri: `https://image.tmdb.org/t/p/w185${item.profile_path}`,
        }}
      />
      <NameText>{item.name}</NameText>
    </ProfileImageContainer>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data.slice(0, 10)}
      renderItem={renderItem}
    />
  );
};

export {SimplePeopleList};
