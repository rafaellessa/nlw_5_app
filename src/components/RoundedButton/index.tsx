import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

interface RoundedButtonProps extends TouchableOpacityProps {
  content: JSX.Element;
  onPress: () => void;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ content, onPress }) => {
  return <Container onPress={onPress}>{content}</Container>;
};

export default RoundedButton;
