'use client';

import { MeasurementsData } from '@/types/API/measurementsdata';
import { useTheme } from 'next-themes';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from 'recharts';

export default function MeasurementsGraph({
  data,
}: {
  data: MeasurementsData;
}) {
  const { theme } = useTheme();

  for (const measure of data) {
    for (let field in measure) {
      if (measure[field as keyof typeof measure] === 0) {
        // @ts-ignore
        measure[field as keyof typeof measure] = null;
      }
    }
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <h2>Measurements evolution during last 3 months</h2>
      <ResponsiveContainer
        height={300}
        className="!w-[350px] pr-3 md:!w-auto md:max-w-[600px] text-zinc-950"
      >
        <LineChart data={data} className="mr-12">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={false} />
          <YAxis type="number" domain={['dataMin - 10', 'dataMax + 10']} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="weight"
            connectNulls={true}
            unit="kg"
            stroke="#8884d8"
          />
          <Line
            type="monotone"
            dataKey="neck"
            connectNulls={true}
            unit="cm"
            stroke="#32a852"
          />
          <Line
            type="monotone"
            connectNulls={true}
            dataKey="chest"
            unit="cm"
            stroke="#3262a8"
          />
          <Line
            type="monotone"
            connectNulls={true}
            dataKey="arm"
            unit="cm"
            stroke="#b02134"
          />
          <Line
            type="monotone"
            connectNulls={true}
            dataKey="belly"
            unit="cm"
            stroke="#d1c624"
          />
          <Line
            type="monotone"
            connectNulls={true}
            dataKey="leg"
            unit="cm"
            stroke="#fc6f03"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
