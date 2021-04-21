import styled from "styled-components/native";
import Lottie from "lottie-react-native";
import LoadAnimation from "../../assets/load.json";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Load = styled(Lottie).attrs({
  source: LoadAnimation,
})`
  background-color: transparent;
  width: 200px;
  height: 200px;
`;
