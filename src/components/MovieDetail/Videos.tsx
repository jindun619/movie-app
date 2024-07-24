import {FlatList as RNFlatList} from 'react-native';
import styled from 'styled-components/native';
import {BlockTitleWithMore} from '../BlockTitleWithMore';
import {MovieVideosType, MovieVideoType} from '../../types/types';
import YoutubePlayer from 'react-native-youtube-iframe';

const Container = styled.View`
  padding: 10px;
  border: 1px solid ${props => props.theme.lightNeutralBg};
`;
const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;
const Separator = styled.View`
  width: 5px;
`;

interface VideosProps {
  data: MovieVideosType;
}
const Videos = ({data}: VideosProps) => {
  if (data.results.length > 0) {
    return (
      <Container>
        <BlockTitleWithMore title="동영상" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.results}
          renderItem={({item}: {item: MovieVideoType}) => {
            return (
              <YoutubePlayer videoId={item.key} width={250} height={150} />
            );
          }}
          ItemSeparatorComponent={Separator}
        />
      </Container>
    );
  }
};

export {Videos};
