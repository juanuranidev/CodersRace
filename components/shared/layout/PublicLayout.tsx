import { Header } from "components";
import { AppShell, Box } from "@mantine/core";

export default function PublicLayout({ children }: any) {
  return (
    <div className="bg-background">
      <Header />
      <div className="pt-6">{children}</div>
    </div>
  );
}
