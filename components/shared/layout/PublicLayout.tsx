import { Header } from "components";

export default function PublicLayout({ children }: any) {
  return (
    <div className="bg-backgroundPrimary">
      <Header />
      <div className="" style={{ minHeight: "calc(100vh - 5rem)" }}>
        {children}
      </div>
    </div>
  );
}
