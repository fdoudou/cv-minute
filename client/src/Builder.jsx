import React, { useState } from 'react';
import EditorForm from './components/EditorForm';
import CVPreview from './components/CVPreview';

function Builder() {
  const [cvData, setCvData] = useState({
    personalInfo: { fullName: '', email: '', phone: '', location: '', website: '', summary: '' },
    experience: [],
    education: [],
    skills: [],
    themeColor: '#3b82f6'
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">MERN CV Builder</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Export Document
        </button>
      </header>

      <main className="flex-1 flex flex-col md:flex-row p-6 gap-6 max-w-7xl mx-auto w-full">
        {/* Input Panel */}
        <section className="w-full md:w-1/2 bg-white rounded-lg shadow p-6 overflow-y-auto max-h-[85vh]">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Resume Details</h2>
          <EditorForm cvData={cvData} setCvData={setCvData} />
        </section>

        {/* Live Presentation Rendering Canvas */}
        <section className="w-full md:w-1/2 bg-slate-200 rounded-lg p-4 overflow-y-auto max-h-[85vh] flex justify-center items-start">
          <div className="w-full max-w-[210mm] bg-white shadow-2xl p-8 min-h-[297mm] sticky top-0" id="cv-print-area">
            <CVPreview cvData={cvData} />
          </div>
        </section>
      </main>
    </div>
  );
}


export default Builder
