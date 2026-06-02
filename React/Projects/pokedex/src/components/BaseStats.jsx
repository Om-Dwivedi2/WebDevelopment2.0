import React from "react";

const BaseStats = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="space-y-4">
        {/* HP */}
        <div className="flex items-center gap-4">
          <p className="w-20 text-gray-500">HP</p>
          <p className="w-10">45</p>

          <div className="flex-1 h-2 bg-gray-200 rounded">
            <div className="w-1/3 h-2 bg-red-400 rounded"></div>
          </div>
        </div>

        {/* Attack */}
        <div className="flex items-center gap-4">
          <p className="w-20 text-gray-500">Attack</p>
          <p className="w-10">60</p>

          <div className="flex-1 h-2 bg-gray-200 rounded">
            <div className="w-3/4 h-2 bg-green-400 rounded"></div>
          </div>
        </div>

        {/* Defense */}
        <div className="flex items-center gap-4">
          <p className="w-20 text-gray-500">Defense</p>
          <p className="w-10">48</p>

          <div className="flex-1 h-2 bg-gray-200 rounded">
            <div className="w-2/5 h-2 bg-red-400 rounded"></div>
          </div>
        </div>

        {/* Sp. Atk */}
        <div className="flex items-center gap-4">
          <p className="w-20 text-gray-500">Sp. Atk</p>
          <p className="w-10">65</p>

          <div className="flex-1 h-2 bg-gray-200 rounded">
            <div className="w-4/5 h-2 bg-green-400 rounded"></div>
          </div>
        </div>

        {/* Sp. Def */}
        <div className="flex items-center gap-4">
          <p className="w-20 text-gray-500">Sp. Def</p>
          <p className="w-10">65</p>

          <div className="flex-1 h-2 bg-gray-200 rounded">
            <div className="w-4/5 h-2 bg-green-400 rounded"></div>
          </div>
        </div>

        {/* Speed */}
        <div className="flex items-center gap-4">
          <p className="w-20 text-gray-500">Speed</p>
          <p className="w-10">45</p>

          <div className="flex-1 h-2 bg-gray-200 rounded">
            <div className="w-1/3 h-2 bg-red-400 rounded"></div>
          </div>
        </div>

        {/* Total */}
        <div className="flex items-center gap-4">
          <p className="w-20 text-gray-500">Total</p>
          <p className="w-10">317</p>

          <div className="flex-1 h-2 bg-gray-200 rounded">
            <div className="w-3/5 h-2 bg-green-400 rounded"></div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-semibold text-lg mb-2">Type defenses</h3>

        <p className="text-gray-500">
          The effectiveness of each type on Charmander.
        </p>
      </div>
    </div>
  );
};

export default BaseStats;
