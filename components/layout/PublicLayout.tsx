import { AppShell, Container } from "@mantine/core";
import { Header } from "components";

export default function PublicLayout({ children }: any) {
  return (
    <AppShell
      m="0"
      padding="0"
      header={<Header />}
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <Container bg="background-primary.0" size="full" h="100%">
        {children}
      </Container>
    </AppShell>
  );
}
