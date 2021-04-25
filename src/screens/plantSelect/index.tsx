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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { PlantProps } from "../../libs/storage";

interface EnvironmentsProps {
  key: string;
  title: string;
}
interface renderEnvironmentItemProps {
  item: EnvironmentsProps;
}

interface renderPlantItemProps {
  item: PlantProps;
}

const PlantSelect: React.FC = () => {
  const navigate = useNavigation();
  const [userName, setUserName] = useState<string | null>("");
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filtredPlants, setFiltredPlants] = useState<PlantProps[]>([]);
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
      setUserName(await AsyncStorage.getItem("@plantmanager:user"));
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

    if (data.length > 0) {
      setLoading(false);
    }

    if (data.length >= 5) {
      setCanLoadMore(true);
    } else {
      setCanLoadMore(false);
      setLoadingSpinner(false);
    }

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFiltredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFiltredPlants(data);
    }

    return data;
  };

  function handleFetchMore() {
    if (canLoadMore) {
      setPage((oldValue) => oldValue + 1);
      fetchPlants();
    }
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
    return (
      <PlantCard
        data={item}
        onPress={() => {
          navigate.navigate("PlantSave", { plant: item });
        }}
      />
    );
  };

  if (loading) return <Load />;

  return (
    <Container>
      <ContainerHeader>
        <Header name={userName} title="Olá" />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </ContainerHeader>
      <ContainerEnvironmentList>
        <EnvironmentList
          data={environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={renderEnvironmentItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ContainerEnvironmentList>
      <ContainerPlantCardList>
        <PlantCardList
          data={filtredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderPlantsItem}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            handleFetchMore();
          }}
          ListFooterComponent={loadingSpinner ? <LoadingSpinner /> : <></>}
        />
      </ContainerPlantCardList>
    </Container>
  );
};

export default PlantSelect;
