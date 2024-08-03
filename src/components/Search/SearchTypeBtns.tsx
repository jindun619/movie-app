import styled from 'styled-components/native';

interface BtnProps {
  isActive: boolean;
}
const Btn = styled.TouchableOpacity<BtnProps>`
  border: 0.3px solid ${props => props.theme.neutralText};
  margin-right: 10px;
  padding: 7px;
  border-radius: 12px;
  background-color: ${props =>
    props.isActive ? props.theme.mainText : props.theme.mainBg};
`;
const BtnText = styled.Text<BtnProps>`
  font-size: 14px;
  font-weight: 400;
  color: ${props =>
    props.isActive ? props.theme.mainBg : props.theme.mainText};
`;

interface SearchTypeBtnProps {
  name: string;
  isActive: boolean;
  onPress: () => void;
}
const SearchTypeBtn = ({ name, isActive, onPress }: SearchTypeBtnProps) => {
  return (
    <Btn isActive={isActive} onPress={onPress}>
      <BtnText isActive={isActive}>{name}</BtnText>
    </Btn>
  );
};

export { SearchTypeBtn };
