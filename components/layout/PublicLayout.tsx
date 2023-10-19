import { Header } from "components";
import { AppShell, Box } from "@mantine/core";

export default function PublicLayout({ children }: any) {
  return (
    <AppShell bg="background-primary.0" header={<Header />}>
      <Box pt="2rem">{children}</Box>
    </AppShell>
  );
}
