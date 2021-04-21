import styled from "styled-components/native";
import RoundedButton from "../../components/RoundedButton";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

export const FooterContainer = styled.View`
  width: 100%;
  padding-horizontal: 50px;
  margin-top: 20px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;
export const Title = styled.Text`
  font-size: 22px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};
  line-height: 38px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.text};
  text-align: center;
  font-size: 17px;
  padding-vertical: 10px;
  color: ${colors.heading};
`;

export const Button = styled(RoundedButton)``;

export const TitleButton = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.heading};
`;
