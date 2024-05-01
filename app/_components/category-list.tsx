import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  const categories = await db.category.findMany({});

  return (
    // <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-5 pt-6">
    <div className="flex gap-3 overflow-x-auto px-5 pb-3 pt-6">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
