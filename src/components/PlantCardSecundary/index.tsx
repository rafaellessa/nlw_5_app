import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import {
  Button,
  Title,
  ContainerDetailsLabel,
  DetailsTime,
  DetailsTimeLabel,
} from "./styles";
import { SvgFromUri } from "react-native-svg";

interface PlantCardProps extends RectButtonProps {
  data: {
    name: string;
    subTitle: string;
    photo: string;
    hour: string;
  };
  onPress: () => void;
}

const PlantCardSecundary: React.FC<PlantCardProps> = ({ data, onPress }) => {
  return (
    <Button onPress={onPress}>
      <SvgFromUri uri={data.photo} width={50} height={50} />
      <Title>{data.name}</Title>
      <ContainerDetailsLabel>
        <DetailsTime>Regar ás</DetailsTime>
        <DetailsTimeLabel>{data.hour}</DetailsTimeLabel>
      </ContainerDetailsLabel>
    </Button>
  );
};

export default PlantCardSecundary;
