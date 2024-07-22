import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.TouchableOpacity`
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

interface TitleWithMoreProps {
  title: string;
}
const TitleWithMore = ({title}: TitleWithMoreProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ChevronIcon name="chevron-forward-outline" size={24} />
    </Container>
  );
};

export {TitleWithMore};
