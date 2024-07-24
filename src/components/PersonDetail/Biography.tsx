import styled from 'styled-components/native';
import {BlockTitle} from '../BlockTitle';

const Container = styled.View`
  padding: 30px 10px;
  background-color: ${props => props.theme.lightNeutralBg};
`;
const Content = styled.Text`
  margin-top: 5px;
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
      <BlockTitle name="약력" />
      <Content>
        {content.length > 0 ? content : `${name}의 약력 란이 비어있습니다.`}
      </Content>
    </Container>
  );
};

export {Biography};
