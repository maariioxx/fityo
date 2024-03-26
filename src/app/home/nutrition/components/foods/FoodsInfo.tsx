import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import FoodsSearch from './FoodsSearch';
import FoodsFetch from './searchTypes/fityo/FityoFoodsFetch';
import UserFoods from './UserFoods';
import FityoFoodsFetch from './searchTypes/fityo/FityoFoodsFetch';
import CustomFoodsFetch from './searchTypes/custom/CustomFoodsFetch';
import CreateFood from './CreateFood';

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
    <div className="bg-slate-100 border-2 rounded-xl p-12 flex flex-col items-center gap-12 w-[700px]">
      <div className="flex gap-4">
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
