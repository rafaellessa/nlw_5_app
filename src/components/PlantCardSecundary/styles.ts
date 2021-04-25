import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export const Container = styled.View``;

export const Button = styled(RectButton)`
  flex: 1;
  width: 100%;
  padding-horizontal: 10px;
  padding-vertical: 25px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.shape};
  margin-vertical: 5px;
`;

export const ContainerDetailsLabel = styled.View`
  align-items: flex-end;
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${fonts.heading};
  font-size: 17px;
  color: ${colors.heading};
`;

export const DetailsTime = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`;

export const DetailsTimeLabel = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`;
