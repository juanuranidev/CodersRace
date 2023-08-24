import { AppShell, Container, Header } from "@mantine/core";
import Navbar from "components/navbar/navbar";

export default function PublicLayout({ children }: any) {
  console.log("OIDANDOIWANdoiadnwaoidnaw");
  return (
    <AppShell m="0" padding="0" header={<></>}>
      {/* <Container size="full" p="0" style={{ maxHeight: "100vh" }} bg="red"> */}
      <Navbar />
      <Container size="full" style={{ overflow: "hidden" }}>
        {children}
      </Container>
      {/* </Container> */}
    </AppShell>
  );
}
