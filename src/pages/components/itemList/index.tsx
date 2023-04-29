import Item from "@/components/item";
import { AiOutlineRight } from "react-icons/ai";
import { Item as ItemModel } from "@/models";

export interface ItemListProp {
  title: String;
  items: ItemModel[];
}

const ItemList = ({ title, items }: ItemListProp) => {
  return (
    <div className="py-10 text-white">
      <div className="flex items-center justify-between mb-7">
        <div className="text-xl font-bold">{title}</div>
        <div className="flex items-center gap-1 text-xs font-medium text-gray-500 cursor-pointer hover:text-purple-600">
          TẤT CẢ
          <AiOutlineRight className="text-base" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-x-6">
        {items?.map((item: ItemModel, index: Number) => {
          return <Item key={String(index)} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
