import styled from 'styled-components/native';

const OverviewContainer = styled.View`
  padding: 15px;
  background-color: ${props => props.theme.lightNeutralBg};
`;
const OverviewTitle = styled.Text`
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
  overview: string;
}
const Overview = ({overview}: OverviewProps) => {
  return (
    <OverviewContainer>
      <OverviewTitle>줄거리</OverviewTitle>
      <OverviewContent>{overview}</OverviewContent>
    </OverviewContainer>
  );
};

export {Overview};
