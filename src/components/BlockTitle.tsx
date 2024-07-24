import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.mainText};
  margin: 10px 0;
`;

interface BlockTitleProps {
  name: string;
}
const BlockTitle = ({name}: BlockTitleProps) => {
  return <Title>{name}</Title>;
};

export {BlockTitle};
