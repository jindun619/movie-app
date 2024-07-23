import {Text} from 'react-native';
import styled from 'styled-components/native';
import {RecommType} from '../../types/types';
import {SimpleMovieList} from '../SimpleMovieList';

const Container = styled.View`
  padding: 10px;
  border: 1px solid ${props => props.theme.lightNeutralBg};
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.mainText};
  margin: 5px 0;
`;

interface RecommProps {
  data: RecommType;
}
const Recomm = ({data}: RecommProps) => {
  const recommData = data.results.slice(0, 10);

  return (
    <Container>
      <Title>당신이 좋아할만한 영화들</Title>
      <SimpleMovieList data={recommData} />
    </Container>
  );
};

export {Recomm};
