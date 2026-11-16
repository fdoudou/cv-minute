import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

// Inside your main functional component body wrapper:
const cvRef = useRef(null);

const handlePrint = useReactToPrint({
  contentRef: cvRef,
  documentTitle: `${cvData.personalInfo.fullName || 'Resume'}_CV`,
});

// Update component bindings:
// 1. Pass the reference binding identifier directly to the layout viewer tag:
//    <div ref={cvRef} id="cv-print-area">

// 2. Attach the click action directly onto your toolbar button element:
//    <button onClick={handlePrint}>Export Document</button>
