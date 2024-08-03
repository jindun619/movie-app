import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ActivityIndicator = styled.ActivityIndicator``;

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="small" />
    </Container>
  );
};

export {Loading};
