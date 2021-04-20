import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  content: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ content }) => {
  return <Container>{content}</Container>;
};

export default Button;
