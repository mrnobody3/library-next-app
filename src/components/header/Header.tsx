import NavBar from "@/components/header/NavBar/NavBar";
import { Container } from "@mui/material";
import { FC } from "react";

interface IHeader {}

const Header: FC<IHeader> = () => {
  return (
    <Container>
      <NavBar />
    </Container>
  );
};

export default Header;
