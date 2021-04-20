import styled from "styled-components/native";
import wateringImage from "../../assets/watering.png";
import Button from "../../components/Button";
import colors from "../../utils/colors";
export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding-horizontal: 20px;
  color: ${colors.heading};
`;

export const Image = styled.Image.attrs({
  source: wateringImage,
})``;

export const ButtonNext = styled(Button)``;
