import React from "react";

import { Title, Button } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
  onPress: () => void;
}

const EnvironmentButton: React.FC<EnvironmentButtonProps> = ({
  title,
  active = false,
  onPress,
}) => {
  return (
    <Button active={active} onPress={onPress}>
      <Title active={active}>{title}</Title>
    </Button>
  );
};

export default EnvironmentButton;
