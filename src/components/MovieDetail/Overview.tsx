import styled from 'styled-components/native';

const OverviewContainer = styled.View`
  padding: 15px;
  background-color: ${props => props.theme.lightNeutralBg};
`;
const Tagline = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.theme.neutralText};
  font-style: italic;
`;

const OverviewTitle = styled.Text`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.mainText};
`;
const OverviewContent = styled.Text`
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
      <OverviewContainer>
        <Tagline>{tagline}</Tagline>
        <OverviewTitle>개요</OverviewTitle>
        <OverviewContent>{overview}</OverviewContent>
      </OverviewContainer>
    );
  }
};

export {Overview};
