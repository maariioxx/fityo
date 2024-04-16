import CaloriesProgressBar from './summary/CaloriesProgressBar';
import { Suspense } from 'react';
import {
  CaloriesLoadingSkeleton,
  CarbosLoadingSkeleton,
  FatsLoadingSkeleton,
  ProteinLoadingSkeleton,
} from './summary/Skeletons';
import CarbosProgressBar from './summary/CarbosProgressBar';
import FatsProgressBar from './summary/FatsProgressBar';
import ProteinProgressBar from './summary/ProteinProgressBar';

export default function NutritionSummary({ date }: { date: string }) {
  return (
    <div className="grid lg:grid-cols-2 mt-12 justify-center lg:scale-125">
      <Suspense fallback={<CaloriesLoadingSkeleton />}>
        <CaloriesProgressBar date={date} />
      </Suspense>
      <div className="flex flex-col gap-7 -mt-2 lg:pt-3">
        <Suspense fallback={<CarbosLoadingSkeleton />}>
          <CarbosProgressBar date={date} />
        </Suspense>
        <Suspense fallback={<FatsLoadingSkeleton />}>
          <FatsProgressBar date={date} />
        </Suspense>
        <Suspense fallback={<ProteinLoadingSkeleton />}>
          <ProteinProgressBar date={date} />
        </Suspense>
      </div>
    </div>
  );
}
