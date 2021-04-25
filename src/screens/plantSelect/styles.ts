import styled from "styled-components/native";
import colors from "../../utils/colors";
import HeaderAvatar from "../../components/Header";
import fonts from "../../utils/fonts";
import EnvironmentButton from "../../components/EnvironmentButton";
import PlantCardPrimary from "../../components/PlantCardPrimary";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
`;

export const ContainerHeader = styled.View`
  padding-horizontal: 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 17px;
  line-height: 20px;
  color: ${colors.heading};
`;

export const Header = styled(HeaderAvatar)``;

export const Button = styled(EnvironmentButton)``;

export const ContainerEnvironmentList = styled.View``;

export const EnvironmentList = styled.FlatList.attrs({
  contentContainerStyle: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
})``;

export const ContainerPlantCardList = styled.View`
  flex: 1;
  padding-horizontal: 32px;
  justify-content: center;
`;

export const PlantCardList = styled.FlatList.attrs({
  contentContainerStyle: {},
})``;

export const PlantCard = styled(PlantCardPrimary)``;

export const LoadingSpinner = styled.ActivityIndicator`
  color: ${colors.green};
`;
