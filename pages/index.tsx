import EmojiCard from "../components/Card";
import EmojiCategoryTabs from "../components/Category";
import { EmojiHub } from "../interfaces/emoji.interface";

interface IHome {
  data: EmojiHub[];
}

const Home = ({ data }: IHome) => {
  return (
    <div className="p-2">
      <EmojiCategoryTabs categoryName={"all"} />
      <div className="font-bold text-lg ml-4 mt-4 mb-2">List</div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {data?.map((item, index) => {
          return <EmojiCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://emojihub.yurace.pro/api/all`);
  const data = await res.json();

  return { props: { data } };
}

export default Home;
