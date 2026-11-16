import React from 'react';

export default function CVPreview({ cvData }) {
  const { personalInfo, experience, themeColor } = cvData;

  return (
    <div className="font-sans text-gray-900">
      {/* Header Accent Bar driven by color picker element state */}
      <header className="border-b-4 pb-4" style={{ borderColor: themeColor }}>
        <h1 className="text-3xl font-extrabold tracking-tight">{personalInfo.fullName || 'John Doe'}</h1>
        <p className="text-sm text-gray-500 mt-1">{personalInfo.email || 'johndoe@example.com'}</p>
      </header>

      <section className="mt-6">
        <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: themeColor }}>
          Professional Experience
        </h2>
        {experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-semibold text-sm">{exp.position || 'Position Title'}</h3>
            <p className="text-xs text-gray-600 font-medium">{exp.company || 'Company Location'}</p>
            <p className="text-xs text-gray-500 mt-1 whitespace-pre-line">{exp.description || 'Job tasks summary text...'}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
