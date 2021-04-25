import { formatDistance } from "date-fns";
import { format } from "date-fns/esm";
import { pt } from "date-fns/locale";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PlantCardSecundary from "../../components/PlantCardSecundary";
import { loadPlants, PlantProps } from "../../libs/storage";

import {
  Container,
  Header,
  ContainerSpotlight,
  Image,
  SpotLightLabel,
  ContainerMyPlants,
  ListContainer,
  PlantsLabel,
  PlantsList,
} from "./styles";

const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();

  useEffect(() => {
    (async () => {
      await fetchStoragePlants();
    })();
  }, []);

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
            return <PlantCardSecundary data={item} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </ContainerMyPlants>
    </Container>
  );
};

export default MyPlants;
