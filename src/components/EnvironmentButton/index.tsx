import React from "react";

import { Title, Button } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const EnvironmentButton: React.FC<EnvironmentButtonProps> = ({
  title,
  active = false,
  ...rest
}) => {
  return (
    <Button active={active}>
      <Title active={active}>{title}</Title>
    </Button>
  );
};

export default EnvironmentButton;
