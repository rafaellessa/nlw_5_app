import styled from "styled-components/native";
import colors from "../../utils/colors";
import HeaderAvatar from "../../components/Header";
import imageAvatar from "../../assets/avatar.png";
import fonts from "../../utils/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
`;

export const ContainerHeader = styled.View`
  padding-horizontal: 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 17px;
  line-height: 20px;
  color: ${colors.heading};
`;

export const Header = styled(HeaderAvatar)``;
