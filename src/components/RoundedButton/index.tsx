import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

interface RoundedButtonProps extends TouchableOpacityProps {
  content: JSX.Element;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ content }) => {
  return <Container>{content}</Container>;
};

export default RoundedButton;
