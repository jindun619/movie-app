import styled from 'styled-components/native';

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

const Title = styled.Text`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.mainText};
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
const Overview = ({tagline, overview}: OverviewProps) => {
  if (overview) {
    return (
      <Container>
        <Tagline>{tagline}</Tagline>
        <Title>개요</Title>
        <Content>{overview}</Content>
      </Container>
    );
  }
};

export {Overview};
