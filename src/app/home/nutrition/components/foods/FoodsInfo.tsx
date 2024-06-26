import CreateFood from './CreateFood';
import FoodsSearch from './FoodsSearch';
import UserFoods from './UserFoods';
import CustomFoodsFetch from './searchTypes/custom/CustomFoodsFetch';
import FityoFoodsFetch from './searchTypes/fityo/FityoFoodsFetch';

export default function FoodsInfo({
  query,
  date,
  searchType,
}: {
  query: string;
  date: string;
  searchType: string;
}) {
  return (
    <div className="bg-slate-100 dark:bg-zinc-900 border-2 dark:border-zinc-700 rounded-xl p-12 flex flex-col items-center gap-12  w-4/5 lg:w-[700px]">
      <div className="flex gap-2 lg:gap-8">
        <FoodsSearch />
        <CreateFood />
      </div>
      {typeof query === 'undefined' ? (
        <UserFoods date={date} />
      ) : searchType === 'custom' ? (
        <CustomFoodsFetch query={query} date={date} />
      ) : (
        <FityoFoodsFetch query={query} date={date} />
      )}
    </div>
  );
}
