import styled from 'styled-components/native';
import {TitleWithMore} from './TitleWithMore';

const Container = styled.View`
  margin-bottom: 30px;
`;

interface BlockProps {
  title: string;
  children: React.ReactNode;
}
const ListBlock = ({title, children}: BlockProps) => {
  return (
    <Container>
      <TitleWithMore title={title} />
      {children}
    </Container>
  );
};

export {ListBlock};
