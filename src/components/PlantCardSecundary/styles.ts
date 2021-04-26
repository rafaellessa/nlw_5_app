import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import { Feather } from "@expo/vector-icons";

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

export const ButtonRemove = styled(RectButton)`
  width: 100px;
  height: 85px;
  background-color: ${colors.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  padding-left: 15;
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

export const ButtonRemoveIcon = styled(Feather).attrs({
  name: "trash",
  color: colors.white,
})`
  font-size: 32px;
`;
