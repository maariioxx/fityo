import { NutritionSearch } from '@/types/API/nutritionSearchEndpoint';
import { FoodNutrients } from '@/types/API/nutritionInstantEndpoint';
import CustomFoods from './CustomFoods';
import { getUserCustomFoods } from '@/lib/utils';

export default async function FityoFoodsFetch({
  query,
  date,
}: {
  query: string;
  date: string;
}) {
  const data = await getUserCustomFoods(query);

  return (
    <div>
      {data !== null && data.length > 0 ? (
        data.map((food) => {
          return <CustomFoods key={food.id} food={food} date={date} />;
        })
      ) : (
        <h1 className="text-2xl">There&apos;s nothing!</h1>
      )}
    </div>
  );
}
