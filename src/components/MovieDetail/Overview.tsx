import styled from 'styled-components/native';
import { Block } from '../Block';

const Container = styled.View`
  padding: 15px;
  border: 1px solid ${props => props.theme.lightNeutralBg};
`;
const Tagline = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.theme.neutralText};
  font-style: italic;
`;
const Content = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.mainText};
`;

interface OverviewProps {
  tagline: string;
  overview: string;
}
const Overview = ({ tagline, overview }: OverviewProps) => {
  if (overview) {
    return (
      <Container>
        <Tagline>{tagline}</Tagline>
        <Block title="개요">
          <Content>{overview}</Content>
        </Block>
      </Container>
    );
  }
};

export { Overview };
