import { Header } from "components";
import { AppShell, Box } from "@mantine/core";

export default function PublicLayout({ children }: any) {
  return (
    <div
      className="container max-w-full"
      // className="container w-fit mx-[1px] max-w-5xl"
      //  ="background-primary.0" header={<Header />}
    >
      {children}
    </div>
  );
}
