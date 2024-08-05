import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  margin-bottom: 30px;
`;
const TextContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.mainText};
  margin: 5px 0;
`;
const ChevronIcon = styled(Icon)`
  color: ${props => props.theme.neutralText};
`;

interface BlockProps {
  title: string;
  moreIcon?: boolean;
  children: React.ReactNode;
}
const Block = ({ title, moreIcon = false, children }: BlockProps) => {
  return (
    <Container>
      {moreIcon ? (
        <TextContainer>
          <Title>{title}</Title>
          <ChevronIcon name="chevron-forward-outline" size={24} />
        </TextContainer>
      ) : (
        <Title>{title}</Title>
      )}
      {children}
    </Container>
  );
};

export { Block };
