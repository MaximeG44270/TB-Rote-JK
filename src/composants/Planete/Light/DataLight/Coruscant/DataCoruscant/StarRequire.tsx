import React from 'react';

const starRequirements = [
  { stars: "1 Star", mpg: "116 406 250 MPG" },
  { stars: "2 Stars", mpg: "186 250 000 MPG" },
  { stars: "3 Stars", mpg: "248 333 333 MPG" },
];

const StarRequire: React.FC = () => {
  return (
    <div className="flex justify-center mt-8 px-4">
      <div className="w-full max-w-xl overflow-x-auto">
        <table className="border border-gray-600 text-white font-poppins text-center w-full rounded-lg overflow-hidden md:text-xl">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3 border border-gray-600">Stars</th>
              <th className="p-3 border border-gray-600">MPG</th>
            </tr>
          </thead>
          <tbody>
            {starRequirements.map((item, index) => (
              <tr key={index} className="bg-gray-700 odd:bg-gray-600">
                <td className="p-3 border border-gray-600 whitespace-nowrap">{item.stars}</td>
                <td className="p-3 border border-gray-600 whitespace-nowrap">{item.mpg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StarRequire;