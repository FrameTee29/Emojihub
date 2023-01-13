import { FC } from "react";
import { EmojiHub } from "../interfaces/emoji.interface";

interface IEmojiCard {
  key: string | number;
  data: EmojiHub;
}

const EmojiCard: FC<IEmojiCard> = ({ key, data }) => {
  return (
    <div
      key={key}
      className="border-2 px-3 pt-1 pb-2 rounded-md hover:border-gray-500 hover:bg-gray-100"
    >
      <div className="text-center">
        {data.htmlCode?.map((item, idx) => (
          <div
            className="htmlCode"
            key={idx}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>
      <div>
        <span className="font-bold text-sm">Name : </span>
        <span className="text-xs text-gray-500">{data.name}</span>
      </div>
      <div>
        <span className="font-bold text-sm">Category : </span>
        <span className="text-xs text-gray-500">{data.category}</span>
      </div>
      <div>
        <span className="font-bold text-sm">Group : </span>
        <span className="text-xs text-gray-500">{data.group}</span>
      </div>
    </div>
  );
};

export default EmojiCard;
