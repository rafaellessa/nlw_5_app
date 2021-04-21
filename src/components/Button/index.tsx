import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  content: JSX.Element;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ content, onPress }) => (
  <Container onPress={onPress}>{content}</Container>
);

export default Button;
