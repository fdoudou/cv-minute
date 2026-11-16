import React from 'react';

export default function EditorForm({ cvData, setCvData }) {
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setCvData({
      ...cvData,
      personalInfo: { ...cvData.personalInfo, [name]: value }
    });
  };

  const addExperience = () => {
    setCvData({
      ...cvData,
      experience: [...cvData.experience, { company: '', position: '', startDate: '', endDate: '', description: '' }]
    });
  };

  return (
    <div className="space-y-6">
      {/* Personal Identity Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase">Full Name</label>
          <input type="text" name="fullName" onChange={handlePersonalChange} className="mt-1 w-full border rounded p-2 text-sm focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase">Professional Objective</label>
          <input type="text" name="email" onChange={handlePersonalChange} className="mt-1 w-full border rounded p-2 text-sm focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      {/* Dynamic List Block Controls */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Work History</h3>
          <button type="button" onClick={addExperience} className="text-xs bg-gray-100 text-blue-600 px-2 py-1 rounded border border-blue-200 hover:bg-blue-50">
            + Add Position
          </button>
        </div>
        {cvData.experience.map((exp, index) => (
          <div key={index} className="p-3 bg-gray-50 border rounded-md mb-2 space-y-2">
            <input 
              type="text" placeholder="Company Name" 
              onChange={(e) => {
                const updated = [...cvData.experience];
                updated[index].company = e.target.value;
                setCvData({ ...cvData, experience: updated });
              }}
              className="w-full border rounded p-2 text-xs" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
