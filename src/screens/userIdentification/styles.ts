import styled from "styled-components/native";
import { Platform } from "react-native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import RoundedButton from "../../components/RoundedButton";

interface StyleProps {
  focused: boolean;
  filled: boolean;
}

export const SafeContainer = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;
export const FormContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: 54px;
  align-items: center;
`;

export const WrapperContainer = styled.View`
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;
export const Input = styled.TextInput<StyleProps>`
  border-bottom-width: 1px;
  border-color: ${(props) =>
    props.focused || props.filled ? colors.green : colors.gray};
  width: 100%;
  color: ${colors.heading};
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;
export const Title = styled.Text`
  line-height: 32px;
  font-size: 24px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-top: 20px;
`;
export const Button = styled(RoundedButton)``;
export const TitleButton = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.heading};
`;

export const ContainerFooter = styled.View`
  margin-top: 40px;
  width: 100%;
  padding-horizontal: 20px;
`;

export const FeedbackContainer = styled.TouchableWithoutFeedback``;
