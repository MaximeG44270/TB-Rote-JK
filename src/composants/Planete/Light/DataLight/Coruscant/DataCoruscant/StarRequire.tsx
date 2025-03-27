import React from 'react';

const starRequirements = [
  { stars: "1 Star", mpg: "116 406 250 MPG" },
  { stars: "2 Stars", mpg: "186 250 000 MPG" },
  { stars: "3 Stars", mpg: "248 333 333 MPG" },
];

const StarRequire: React.FC = () => {
  return (
    <div className="flex justify-center mt-8">
      <table className="border border-gray-600 text-white font-poppins text-center w-full max-w-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-3 border border-gray-600 first:rounded-tl-lg last:rounded-tr-lg">Stars</th>
            <th className="p-3 border border-gray-600 first:rounded-tl-lg last:rounded-tr-lg">MPG</th>
          </tr>
        </thead>
        <tbody>
          {starRequirements.map((item, index) => (
            <tr key={index} className="bg-gray-700 last:rounded-b-lg">
              <td className="p-3 border border-gray-600">{item.stars}</td>
              <td className="p-3 border border-gray-600">{item.mpg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StarRequire;