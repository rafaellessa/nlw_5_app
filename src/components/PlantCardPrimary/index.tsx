import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Button, Title } from "./styles";
import { SvgFromUri } from "react-native-svg";

interface PlantCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
  onPress: () => void;
}

const PlantCardPrimary: React.FC<PlantCardProps> = ({ data, onPress }) => {
  return (
    <Button onPress={onPress}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Title>{data.name}</Title>
    </Button>
  );
};

export default PlantCardPrimary;
