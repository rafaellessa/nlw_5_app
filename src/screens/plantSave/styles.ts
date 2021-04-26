import { SvgUri } from "react-native-svg";
import styled from "styled-components/native";
import waterDrop from "../../assets/waterdrop.png";
import RoundedButton from "../../components/RoundedButton";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";

export const SafeContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.shape,
  },
})``;

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.shape};
`;

export const Content = styled.View`
  flex: 1;
  padding-horizontal: 30px;
  padding-vertical: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.shape};
`;

export const ContainerController = styled.View`
  background-color: ${colors.white};
  padding-horizontal: 20px;
  padding-top: 20px;
`;

export const ContainerTipController = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const NamePlant = styled.Text`
  font-family: ${fonts.heading};
  font-size: 24px;
  color: ${colors.heading};
  margin-top: 15px;
`;

export const AboutPlant = styled.Text`
  text-align: center;
  font-family: ${fonts.text};
  color: ${colors.heading};
  font-size: 17px;
  margin-top: 10px;
`;

export const TipLabel = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${fonts.text};
  color: ${colors.blue};
  font-size: 17px;
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${fonts.complement};
  color: ${colors.heading};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Button = styled(RoundedButton)`
  color: ${colors.white};
`;

export const ButtonLabel = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.heading};
`;

export const TipImage = styled.Image.attrs({
  source: waterDrop,
})`
  width: 56px;
  height: 56px;
`;

export const ImagePlant = styled(SvgUri).attrs({
  height: 150,
  width: 150,
})``;

export const ContainerTimePickerLabel = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding-vertical: 40px;
`;

export const TimePicker = styled(DateTimePicker).attrs({
  mode: "time",
  display: "spinner",
})``;

export const LabelTimePicker = styled.Text`
  color: ${colors.heading};
  font-size: 24px;
  font-family: ${fonts.text};
`;
