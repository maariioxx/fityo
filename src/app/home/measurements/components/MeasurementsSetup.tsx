import { setupMeasurements } from '@/lib/actions';
import { Button } from 'flowbite-react';
import moment from 'moment';
import { MdInfo } from 'react-icons/md';

export default function MeasurementsSetup() {
  return (
    <div className="flex flex-col items-center gap-5">
      <p className="flex gap-2 items-center text-green-700">
        <MdInfo /> All fields are optional
      </p>
      <form
        action={setupMeasurements}
        className="flex flex-col gap-4 items-center"
      >
        <input
          type="hidden"
          name="date"
          value={moment().format('YYYY-MM-DD').toString()}
        />
        <label className="grid grid-cols-[50px,150px] items-center gap-16 col-start-1 relative">
          Height:
          <input
            type="number"
            name="height"
            max={1000}
            className="form-input number-input"
          />
          <span className="absolute right-2 top-3 text-sm text-gray-400">
            cm
          </span>
        </label>
        <label className="grid grid-cols-[50px,150px] items-center gap-16 col-start-1 relative">
          Weight:
          <input
            type="number"
            name="weight"
            max={1000}
            className="form-input number-input"
          />
          <span className="absolute right-2 top-3 text-sm text-gray-400">
            kg
          </span>
        </label>
        <label className="grid grid-cols-[50px,150px] items-center gap-16 col-start-1 relative">
          Neck:
          <input
            type="number"
            name="neck"
            max={1000}
            className="form-input number-input"
          />
          <span className="absolute right-2 top-3 text-sm text-gray-400">
            cm
          </span>
        </label>
        <label className="grid grid-cols-[50px,150px] items-center gap-16 col-start-1 relative">
          Chest:
          <input
            type="number"
            name="chest"
            max={1000}
            className="form-input number-input"
          />
          <span className="absolute right-2 top-3 text-sm text-gray-400">
            cm
          </span>
        </label>
        <label className="grid grid-cols-[50px,150px] items-center gap-16 col-start-1 relative">
          Arm:
          <input
            type="number"
            name="arm"
            max={1000}
            className="form-input number-input"
          />
          <span className="absolute right-2 top-3 text-sm text-gray-400">
            cm
          </span>
        </label>
        <label className="grid grid-cols-[50px,150px] items-center gap-16 col-start-1 relative">
          Belly:
          <input
            type="number"
            name="belly"
            max={1000}
            className="form-input number-input"
          />
          <span className="absolute right-2 top-3 text-sm text-gray-400">
            cm
          </span>
        </label>
        <label className="grid grid-cols-[50px,150px] items-center gap-16 col-start-1 relative">
          Leg:
          <input
            type="number"
            name="leg"
            max={1000}
            className="form-input number-input"
          />
          <span className="absolute right-2 top-3 text-sm text-gray-400">
            cm
          </span>
        </label>
        <Button type="submit" color="success" className="max-w-20">
          Submit
        </Button>
      </form>
    </div>
  );
}
