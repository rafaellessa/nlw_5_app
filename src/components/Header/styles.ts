import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 20px;
`;

export const ContainerTitle = styled.View``;

export const Content = styled.View``;

export const Title = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const UserName = styled.Text`
  font-size: 32px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  line-height: 40px;
`;

export const Avatar = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;
