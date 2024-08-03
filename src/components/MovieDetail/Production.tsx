import { FlatList as RNFlatList } from 'react-native';
import styled from 'styled-components/native';
import { MovieDetailType, ProductionCompanyType } from '../../types/types';
import { useColorScheme } from 'react-native';
import { BlockTitle } from '../BlockTitle';

const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;
const Container = styled.View`
  padding: 10px;
  border: 1px solid ${props => props.theme.lightNeutralBg};
`;
const ItemContainer = styled.View`
  width: 150px;
`;
const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.mainText};
  border-radius: 10px;
`;
const Image = styled.Image`
  width: 80px;
  height: 80px;
`;
const Name = styled.Text`
  margin-top: 5px;
  padding: 0 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.mainText};
`;
const Separator = styled.View`
  width: 10px;
`;

interface ProductionProps {
  data: MovieDetailType;
}
const Production = ({ data }: ProductionProps) => {
  const colorScheme = useColorScheme();

  const renderItem = ({ item }: { item: ProductionCompanyType }) => (
    <ItemContainer>
      <ImageContainer>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w185${item.logo_path}` }}
          style={{
            tintColor: colorScheme === 'dark' ? 'white' : 'black',
          }}
          resizeMode="contain"
        />
      </ImageContainer>
      <Name>{item.name}</Name>
    </ItemContainer>
  );

  if (data.production_companies.length > 0) {
    return (
      <Container>
        <BlockTitle name="제작사" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.production_companies}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
        />
      </Container>
    );
  }
};

export { Production };
