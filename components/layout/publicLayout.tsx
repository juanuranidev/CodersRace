import { AppShell } from "@mantine/core";
import { Header } from "components";

export default function PublicLayout({ children }: any) {
  return (
    <AppShell
      m="0"
      padding="0"
      header={<Header />}
      style={{ height: "100vh", overflow: "hidden" }}
    >
      {children}
    </AppShell>
  );
}
