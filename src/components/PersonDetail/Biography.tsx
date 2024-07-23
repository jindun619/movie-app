import styled from 'styled-components/native';

const Container = styled.View`
  padding: 30px 10px;
  background-color: ${props => props.theme.lightNeutralBg};
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.mainText};
  margin: 5px 0;
`;
const Content = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.mainText};
`;

interface BiographyProps {
  content: string;
  name: string;
}
const Biography = ({content, name}: BiographyProps) => {
  return (
    <Container>
      <Title>약력</Title>
      <Content>
        {content.length > 0 ? content : `${name}의 약력 란이 비어있습니다.`}
      </Content>
    </Container>
  );
};

export {Biography};
