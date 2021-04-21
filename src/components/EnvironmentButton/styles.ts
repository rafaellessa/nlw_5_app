import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

interface StyleProps {
  active: boolean;
}

export const Title = styled.Text<StyleProps>`
  color: ${(props) => (props.active ? colors.green_dark : colors.heading)};
  font-family: ${(props) => (props.active ? fonts.heading : fonts.text)};
`;

export const Button = styled(RectButton)<StyleProps>`
  background-color: ${(props) =>
    props.active ? colors.green_light : colors.shape};
  height: 40px;
  width: 76px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-horizontal: 5px;
`;
