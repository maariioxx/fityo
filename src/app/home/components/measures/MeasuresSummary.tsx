'use client';

import { addMeasures } from '@/lib/actions';
import { useState } from 'react';
import { Button } from 'flowbite-react';
import { MdAdd, MdClose, MdEdit } from 'react-icons/md';
import { TodayMeasures } from '@/types/API/measuressummary';

const FORM_FIELDS = ['weight', 'neck', 'chest', 'arm', 'belly', 'leg'] as const;
const SHOW_INPUT = [false, false, false, false, false, false];

export default function MeasuresSummary({
  todayMeasures,
}: {
  todayMeasures: TodayMeasures;
}) {
  const [showInputs, setShowInputs] = useState(SHOW_INPUT);
  return (
    <form
      action={addMeasures}
      className="flex flex-col gap-4 w-4/5 lg:max-w-sm"
    >
      {FORM_FIELDS.map((field, index) => {
        return (
          <label key={index} className="relative grid grid-cols-2 gap-4">
            <div className="grid grid-cols-3 gap-8 items-center">
              {field[0].toUpperCase() + field.slice(1)}:
              <span>
                {typeof todayMeasures !== 'undefined' &&
                  todayMeasures[`${field}`] !== '' &&
                  todayMeasures[`${field}`]}
              </span>
              <Button
                color="success"
                className="max-w-16"
                onClick={() =>
                  setShowInputs(
                    showInputs.map((value, i) => {
                      if (i === index) return !value;
                      else return value;
                    })
                  )
                }
              >
                {showInputs[index] ? (
                  <MdClose className="text-2xl pointer-events-none" />
                ) : typeof todayMeasures !== 'undefined' &&
                  todayMeasures[`${field}`] !== '' ? (
                  <MdEdit className="text-2xl pointer-events-none" />
                ) : (
                  <MdAdd className="text-2xl pointer-events-none" />
                )}
              </Button>
            </div>
            <input
              type="number"
              name={field}
              defaultValue={
                typeof todayMeasures !== 'undefined' &&
                todayMeasures[`${field}`] !== ''
                  ? todayMeasures[`${field}`]
                  : ''
              }
              step="0.01"
              className={`form-input number-input max-w-24 ${
                showInputs[index]
                  ? 'scale-100 translate-x-0'
                  : 'scale-0 -translate-x-8'
              } transition-transform`}
            />
            <span
              className={`absolute top-3 right-14 text-sm text-gray-400 ${
                showInputs[index]
                  ? 'scale-100 translate-x-0'
                  : 'scale-0 -translate-x-8'
              } transition-transform`}
            >
              {index === 0 ? 'kg' : 'cm'}
            </span>
          </label>
        );
      })}
      <Button type="submit" color="success" className="max-w-36">
        Update
      </Button>
    </form>
  );
}