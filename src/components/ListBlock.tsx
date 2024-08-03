import styled from 'styled-components/native';
import { BlockTitleWithMore } from './BlockTitleWithMore';

const Container = styled.View`
  margin-bottom: 30px;
`;

interface BlockProps {
  title: string;
  children: React.ReactNode;
}
const ListBlock = ({ title, children }: BlockProps) => {
  return (
    <Container>
      <BlockTitleWithMore title={title} />
      {children}
    </Container>
  );
};

export { ListBlock };
