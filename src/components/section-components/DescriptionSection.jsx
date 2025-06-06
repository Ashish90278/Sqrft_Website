import React from "react";

const ProjectDetails = ({title, description, dimension, projectData}) => {
  return (
    <section className="p-6 space-y-8 text-gray-800">
      {/* Description */}
      <div>
        <h2 className="text-3xl font-semi-bold text-gray-100 mb-2">
          {projectData.title}
        </h2>
        <p className="text-gray-400 mb-2">
          {projectData.description}
        </p>
        {/* <p className="text-gray-400">
          Paras Plots Meerut is a high-end residential development that
          encompasses 30 acres and offers exclusively developed plots...
        </p> */}
      </div>

      {/* Amenities & Facilities */}
      {/* <div>
        <h3 className="text-xl font-semi-bold text-gray-100">
          Paras Estate Meerut Amenities & Facilities
        </h3>
        <ul className="list-disc text-gray-400 pl-5 space-y-1 mt-2">
          <li>Gated Community</li>
          <li>Green spaces and landscaped parks</li>
          <li>Clubhouse and community center</li>
          <li>Fitness center and jogging tracks</li>
          <li>Ample parking</li>
          <li>24/7 CCTV cameras</li>
          <li>LED street lighting</li>
        </ul>
      </div> */}

      {/* Site Area Breakdown */}
      <div>
        <h3 className="text-xl font-semi-bold text-gray-100">
          Paras Estate Meerut Site & Area Break-Down
        </h3>
        <table className="w-full mt-3 border text-gray-400 border-gray-300 text-sm">
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-medium">Dimension</td>
              <td className="p-2">{projectData.lotDimensions}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Number of Rooms</td>
              <td className="p-2">{projectData.rooms}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Type of Property</td>
              <td className="p-2">
                {projectData.category}
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Price</td>
              <td className="p-2">{projectData.price}</td>
            </tr>
            <tr>
              <td className="p-2 font-medium">
                Year of Completion
              </td>
              <td className="p-2">{projectData.yearBuilt}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Commercial Space */}
      <div>
        <h3 className="text-xl font-semi-bold text-gray-100">
          Paras Estate Meerut offers luxurious commercial space in:
        </h3>
        <ul className="list-disc text-gray-400 pl-5 space-y-1 mt-2">
          <li>Retail stores and showrooms</li>
          <li>Offices for local businesses</li>
          <li>Co-working areas and innovation hubs</li>
          <li>Food options like cafés and restaurants</li>
          <li>Entertainment uses like cinemas</li>
        </ul>
      </div>

      {/* Location Advantages */}
      <div>
        <h3 className="text-xl font-semi-bold text-gray-100">
          Paras Estate Meerut Location Advantages
        </h3>
        <ul className="list-disc text-gray-400 pl-5 space-y-1 mt-2">
          <li>Strategic location near Meerut Bypass</li>
          <li>Excellent connectivity</li>
          <li>Nearby landmarks</li>
          <li>Educational, health and shopping facilities</li>
          <li>Pleasant green surroundings</li>
        </ul>
      </div>

      {/* Price & Payments */}
      <div>
        <h3 className="text-xl font-semi-bold text-gray-100">
          Paras Estate Meerut Price & Payments
        </h3>
        <table className="w-full mt-3 border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Unit Type</th>
              <th className="p-2 text-left">Size</th>
              <th className="p-2 text-left">Starting Price*</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr>
              <td className="p-2">Plots</td>
              <td className="p-2">On Request</td>
              <td className="p-2">On Request</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Why Invest */}
      <div>
        <h3 className="text-xl font-semi-bold text-gray-100">
          Why to Invest in Paras Estate Meerut?
        </h3>
        <ul className="list-disc text-gray-400 pl-5 space-y-1 mt-2">
          <li>High potential for appreciation</li>
          <li>Quality of life investment</li>
          <li>Gated community living</li>
          <li>Sustainable living with green space</li>
          <li>Open plots with environmentally friendly priorities</li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetails;
