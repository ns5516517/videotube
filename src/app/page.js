import { getApi } from "@/helper/apis";
import Card from "./components/Card";

export default async function Home() {

  const { data } = await getApi('video/all-videos');
  return (
    <>
      <section className="listing pt-5">
        <div className="container mx-auto">
          <div className="xl:max-w-11/12 mx-auto px-3">
            <ul className="grid grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))] gap-5 ">
              {
                data?.videos?.map((item, i) => (
                  <li key={i}>
                    <Card video={item} />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
