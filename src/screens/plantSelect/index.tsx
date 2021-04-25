import React, { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import Load from "../../components/Loading";
import {
  Container,
  Title,
  Header,
  SubTitle,
  ContainerHeader,
  Button,
  ContainerEnvironmentList,
  ContainerPlantCardList,
  PlantCardList,
  EnvironmentList,
  PlantCard,
  LoadingSpinner,
} from "./styles";

interface EnvironmentsProps {
  key: string;
  title: string;
}

interface PlantsProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}
interface renderEnvironmentItemProps {
  item: EnvironmentsProps;
}

interface renderPlantItemProps {
  item: PlantsProps;
}

const PlantSelect: React.FC = () => {
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [filtredPlants, setFiltredPlants] = useState<PlantsProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState("all");
  const [loading, setLoading] = useState(true);
  const [loadingSpinner, setLoadingSpinner] = useState(true);
  const [page, setPage] = useState(1);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [loadedAll, setLoadedAll] = useState(false);

  useEffect(() => {
    (async () => {
      setEnvironments(await fetchEnvironments());
      setPlants(await fetchPlants());
      setFiltredPlants(await fetchPlants());
      setLoading(false);
    })();
  }, []);

  const fetchEnvironments = async () => {
    const { data } = await api.get("plants_environments?_sort=title&order=asc");

    return [
      {
        key: "all",
        title: "Todos",
      },
      ...data,
    ];
  };

  const fetchPlants = async () => {
    const { data } = await api.get(
      `plants?_sort=name&order=asc&_page=${page}&_limit=5`
    );

    if (!data) return setLoadedAll(true);
    console.log("Page: ", page);
    console.log("plantas: ", plants);
    console.log("Data Length: ", data.length);
    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFiltredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFiltredPlants(data);
    }

    setLoadingSpinner(false);
    setLoadingSpinner(false);

    if (data.length >= 5) {
      setCanLoadMore(true);
    }

    console.log("Can load more? ", canLoadMore);
    return data;
  };

  function handleFetchMore(distance: number) {
    console.log("Chegou na função");
    console.log("Distance: ", distance);
    setLoadingSpinner(true);
    if (distance < 1) {
      return;
    }
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
    setLoadingSpinner(false);

    return;
  }

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === "all") return setFiltredPlants(plants);

    setFiltredPlants(
      plants.filter((plant) => plant.environments.includes(environment))
    );
  }

  const renderEnvironmentItem = ({ item }: renderEnvironmentItemProps) => {
    return (
      <Button
        title={item.title}
        active={item.key === environmentSelected}
        onPress={() => handleEnvironmentSelected(item.key)}
      />
    );
  };

  const renderPlantsItem = ({ item }: renderPlantItemProps) => {
    return <PlantCard data={item} onPress={() => {}} />;
  };

  if (loading) return <Load />;

  return (
    <Container>
      <ContainerHeader>
        <Header name="Rafael" title="Olá" />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </ContainerHeader>
      <ContainerEnvironmentList>
        <EnvironmentList
          data={environments}
          renderItem={renderEnvironmentItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ContainerEnvironmentList>
      <ContainerPlantCardList>
        <PlantCardList
          data={filtredPlants}
          renderItem={renderPlantsItem}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={loadingSpinner ? <LoadingSpinner /> : <></>}
        />
      </ContainerPlantCardList>
    </Container>
  );
};

export default PlantSelect;
