import { Page } from "../../layout";
import { sampleData } from "../../constant";

export const About = () => {
  return (
    <Page>
      <h1>About page</h1>
      {sampleData.map((e) => (
        <div>
          <h1>{e.content}</h1>
          <img src={e.image} alt={e.content} />
        </div>
      ))}
    </Page>
  );
};
