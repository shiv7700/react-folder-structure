import { Page } from "../../layout";
import { Sample1 } from "../../components";
import { Sample2 } from "../../components";

export const Home = () => {
  console.log(import.meta.env.VITE_BASEURL);
  return (
    <Page>
      <h1>home page</h1>
      <Sample1 />
      <Sample2 />
    </Page>
  );
};
