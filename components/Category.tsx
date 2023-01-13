import Link from "next/link";
import React, { FC } from "react";

interface IEmojiCategoryTabs {
  categoryName?: string;
}

const category = [
  "All",
  "smileys-and-people",
  "animals-and-nature",
  "food-and-drink",
  "travel-and-places",
  "activities",
  "objects",
  "symbols",
  "flags",
];

const EmojiCategoryTabs: FC<IEmojiCategoryTabs> = ({ categoryName }) => {
  return (
    <div>
      <div className="font-bold text-lg ml-4">Category</div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 py-2 px-2">
        {category.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={item.toLowerCase() === "all" ? "/" : `/category/${item}`}
            >
              <div
                key={index}
                className={`${
                  categoryName === item.toLowerCase()
                    ? "bg-black border-black text-white font-bold"
                    : ""
                } text-sm cursor-pointer  border-2 text-center rounded-full py-1 hover:border-gray-600`}
              >
                {item}
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default EmojiCategoryTabs;
