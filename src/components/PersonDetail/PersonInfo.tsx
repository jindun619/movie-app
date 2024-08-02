import styled from 'styled-components/native';
import {PersonDetailType} from '../../types/types';

const Container = styled.View`
  flex-direction: row;
  padding: 10px;
`;
const ProfileImage = styled.Image`
  width: 150px;
  height: 225px;
  border-radius: 10px;
`;
const Info = styled.View`
  padding-left: 10px;
  flex: 1;
`;
const Name = styled.Text`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${props => props.theme.mainText};
`;
const SpecsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 3px;
`;
const Label = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.mainText};
`;
const Value = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  margin-left: 3px;
  color: ${props => props.theme.mainText};
`;

interface PersonInfoProps {
  data: PersonDetailType;
}
const PersonInfo = ({data}: PersonInfoProps) => {
  return (
    <Container>
      <ProfileImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500${data.profile_path}`,
        }}
      />
      <Info>
        <Name>{data.name}</Name>
        <SpecsContainer>
          <Label>전문분야:</Label>
          <Value>{data.known_for_department ?? '-'}</Value>
        </SpecsContainer>
        <SpecsContainer>
          <Label>성별:</Label>
          <Value>
            {data.gender === 0 ? '미지정' : data.gender === 1 ? '여자' : '남자'}
          </Value>
        </SpecsContainer>
        <SpecsContainer>
          <Label>생일:</Label>
          <Value>{data.birthday ?? '-'}</Value>
        </SpecsContainer>
        <SpecsContainer>
          <Label>출생지:</Label>
          <Value>{data.place_of_birth ?? '-'}</Value>
        </SpecsContainer>
      </Info>
    </Container>
  );
};

export {PersonInfo};
