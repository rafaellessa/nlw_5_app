import styled from "styled-components/native";
import HeaderAvatar from "../../components/Header";
import colors from "../../utils/colors";
import waterDrop from "../../assets/waterdrop.png";
import fonts from "../../utils/fonts";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 30px;
  padding-top: 50px;
  background-color: ${colors.background};
`;
export const ContainerSpotlight = styled.View`
  background-color: ${colors.blue_light};
  padding-horizontal: 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  source: waterDrop,
})`
  width: 60px;
  height: 60px;
`;

export const SpotLightLabel = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding-horizontal: 20px;
`;

export const Header = styled(HeaderAvatar)``;

export const ContainerMyPlants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsLabel = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin-vertical: 20px;
`;

export const ListContainer = styled.View``;

export const PlantsList = styled.FlatList.attrs({
  flex: 1,
})``;
