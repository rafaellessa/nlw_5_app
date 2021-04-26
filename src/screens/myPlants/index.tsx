import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import Load from "../../components/Loading";
import PlantCardSecundary from "../../components/PlantCardSecundary";
import {
  loadPlants,
  PlantProps,
  removePlant,
  StoragePlantProps,
} from "../../libs/storage";
import {
  Container,
  ContainerMyPlants,
  ContainerSpotlight,
  Header,
  Image,
  PlantsLabel,
  PlantsList,
  SpotLightLabel,
} from "./styles";

interface test {
  item: PlantProps;
}

const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();

  useEffect(() => {
    (async () => {
      await fetchStoragePlants();
    })();
  }, []);

  const handleRemove = async (plant: PlantProps) => {
    Alert.alert("Remover", `Deseja remover a ${plant.name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async () => {
          try {
            await removePlant(plant.id);
            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id)
            );
          } catch (error) {
            Alert.alert("Não foi possível remover");
          }
        },
      },
    ]);
  };

  const fetchStoragePlants = async () => {
    const plantStoraged = await loadPlants();

    const nextTime = formatDistance(
      new Date(plantStoraged[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      { locale: pt }
    );

    setNextWaterd(
      `Não esqueça de regar a ${plantStoraged[0].name} à ${nextTime} horas`
    );

    setMyPlants(plantStoraged);
    setLoading(false);
  };

  if (loading) return <Load />;
  return (
    <Container>
      <Header name="Plantinhas" title="Minhas" />
      <ContainerSpotlight>
        <Image />
        <SpotLightLabel>{nextWaterd}</SpotLightLabel>
      </ContainerSpotlight>
      <ContainerMyPlants>
        <PlantsLabel>Próximas regadas</PlantsLabel>
        <PlantsList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => {
            return (
              <PlantCardSecundary
                data={item}
                handleRemove={() => handleRemove(item)}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </ContainerMyPlants>
    </Container>
  );
};

export default MyPlants;
