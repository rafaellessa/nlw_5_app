import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Animated from "react-native-reanimated";
import { SvgFromUri } from "react-native-svg";

import {
  Button,
  ContainerDetailsLabel,
  DetailsTime,
  DetailsTimeLabel,
  ButtonRemove,
  Title,
  ButtonRemoveIcon,
} from "./styles";
import colors from "../../utils/colors";

interface PlantCardProps extends RectButtonProps {
  data: {
    name: string;
    subTitle: string;
    photo: string;
    hour: string;
  };
  onPress: () => void;
  handleRemove: () => void;
}

const PlantCardSecundary: React.FC<PlantCardProps> = ({
  data,
  onPress,
  handleRemove,
}) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <ButtonRemove onPress={handleRemove}>
            <ButtonRemoveIcon />
          </ButtonRemove>
        </Animated.View>
      )}
    >
      <Button onPress={onPress}>
        <SvgFromUri uri={data.photo} width={50} height={50} />
        <Title>{data.name}</Title>
        <ContainerDetailsLabel>
          <DetailsTime>Regar ás</DetailsTime>
          <DetailsTimeLabel>{data.hour}</DetailsTimeLabel>
        </ContainerDetailsLabel>
      </Button>
    </Swipeable>
  );
};

export default PlantCardSecundary;
