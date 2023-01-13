import EmojiCard from "../../components/Card";
import EmojiCategoryTabs from "../../components/Category";
import { EmojiHub } from "../../interfaces/emoji.interface";

interface ICategory {
  data: EmojiHub[];
  category: string;
}

const CategoryName = ({ data, category }: ICategory) => {
  return (
    <div className="p-2">
      <EmojiCategoryTabs categoryName={category} />
      <div className="font-bold text-lg ml-4 mt-4 mb-2">List</div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {data?.map((item, index) => {
          return <EmojiCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const category = context.params.name;
  const res = await fetch(
    `https://emojihub.yurace.pro/api/all/category/${category}`
  );
  const data = await res.json();

  return { props: { data, category: category } };
}

export default CategoryName;
