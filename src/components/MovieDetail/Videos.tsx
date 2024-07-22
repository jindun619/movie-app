import {FlatList as RNFlatList} from 'react-native';
import styled from 'styled-components/native';
import Video from 'react-native-video';
import {TitleWithMore} from '../TitleWithMore';
import {MovieVideosType, MovieVideoType} from '../../types/types';

const Container = styled.View`
  padding: 10px;
`;
const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;

interface VideosProps {
  data: MovieVideosType;
}
const Videos = ({data}: VideosProps) => {
  return (
    <Container>
      <TitleWithMore title="동영상" />
      {/* <FlatList
        horizontal
        data={data.results}
        renderItem={({item}: {item: MovieVideoType}) => {
          console.log(`https://www.youtube.com/watch?v=${item.key}`);
          return (
            <Video
              source={{
                uri: `https://www.youtube.com/watch?v=EiCmnIaj4u8`,
              }}
              style={{width: 180, height: 120}}
              controls={true}
              paused={true}
              resizeMode="contain"
            />
          );
        }}
      /> */}
      <Video
        source={{
          uri: `https://www.youtube.com/watch?v=EiCmnIaj4u8`,
        }}
        style={{width: 180, height: 120}}
        controls={true}
        paused={true}
        resizeMode="contain"
      />
    </Container>
  );
};

export {Videos};
