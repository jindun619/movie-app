import styled from 'styled-components/native';
import { RecommType } from '../../types/types';
import { SimpleMovieList } from '../SimpleMovieList';
import { Block } from '../Block';

const Container = styled.View`
  padding: 10px;
  border: 1px solid ${props => props.theme.lightNeutralBg};
`;

interface RecommProps {
  data: RecommType;
}
const Recomm = ({ data }: RecommProps) => {
  const recommData = data.results.slice(0, 10);

  if (data.results.length > 0) {
    return (
      <Container>
        <Block title="당신이 좋아할 만한 영화들">
          <SimpleMovieList data={recommData} />
        </Block>
      </Container>
    );
  }
  return null;
};

export { Recomm };
