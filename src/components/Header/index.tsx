import React from "react";
import img from "../../assets/avatar.png";

import { Container, ContainerTitle, Title, UserName, Avatar } from "./styles";
interface HeaderProps {
  title: string;
  name: string;
}

const Header: React.FC<HeaderProps> = ({ title, name }) => {
  return (
    <Container>
      <ContainerTitle>
        <Title>{title}</Title>
        <UserName>{name}</UserName>
      </ContainerTitle>
      <Avatar source={img} />
    </Container>
  );
};

export default Header;
