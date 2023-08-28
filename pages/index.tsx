import Landing from "views/landing";
import { PublicLayout } from "components";

export default function Index() {
  return (
    <PublicLayout>
      <Landing />
    </PublicLayout>
  );
}

// Index.getLayout = function getLayout(page: any) {
//   console.log(page);
//   return <PublicLayout>{page}</PublicLayout>;
// };

// Index.getLayout = function getLayout(page: any) {
//   return <PublicLayout>{page}</PublicLayout>;
// };
