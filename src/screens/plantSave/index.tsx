import { useNavigation, useRoute } from "@react-navigation/native";
import { format, isBefore } from "date-fns";
import React from "react";
import { useState } from "react";
import { Alert } from "react-native";
import { Platform } from "react-native";
import { PlantProps, savePlant } from "../../libs/storage";

import {
  Container,
  AboutPlant,
  ImagePlant,
  NamePlant,
  ContainerController,
  ContainerTimePickerLabel,
  ContainerTipController,
  TipLabel,
  TipImage,
  AlertLabel,
  ButtonLabel,
  Content,
  Button,
  TimePicker,
  LabelTimePicker,
  SafeContainer,
} from "./styles";

interface Params {
  plant: PlantProps;
}

const PlantSave: React.FC = () => {
  const route = useRoute();
  const navigate = useNavigation();
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(
    Platform.OS == "ios" ? true : false
  );

  const { plant } = route.params as Params;

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === "android") {
      setShowDatePicker((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDay(new Date());
      return Alert.alert("Escolha uma hora no futuro! 😇");
    }

    if (dateTime) setSelectedDay(dateTime);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDay,
      });

      navigate.navigate("Confirmation", {
        title: "Tudo certo",
        subTitle:
          "Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado!",
        buttonTitle: "Muito obrigado :D",
        icon: "smile",
        nextScreen: "MyPlants",
      });
    } catch (error) {
      Alert.alert("Não foi possível salvar sua planta! 😇");
    }
  }

  return (
    <SafeContainer>
      <Container>
        <Content>
          <ImagePlant uri={plant.photo} />
          <NamePlant>{plant.name}</NamePlant>
          <AboutPlant>{plant.about}</AboutPlant>
        </Content>
        <ContainerController>
          <ContainerTipController>
            <TipImage />
            <TipLabel>{plant.water_tips}</TipLabel>
          </ContainerTipController>
          <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>
          {showDatePicker && (
            <TimePicker value={selectedDay} onChange={handleChangeTime} />
          )}
          {Platform.OS === "android" && (
            <ContainerTimePickerLabel
              onPress={() => {
                setShowDatePicker((oldState) => !oldState);
              }}
            >
              <LabelTimePicker>{`Mudar ${format(
                selectedDay,
                "HH:mm"
              )}`}</LabelTimePicker>
            </ContainerTimePickerLabel>
          )}

          <Button
            content={<ButtonLabel>Cadastrar planta</ButtonLabel>}
            onPress={handleSave}
          ></Button>
        </ContainerController>
      </Container>
    </SafeContainer>
  );
};

export default PlantSave;
