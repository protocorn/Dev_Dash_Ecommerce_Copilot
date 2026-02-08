
import { useState } from 'react'

import UploadPage from './pages/UploadPage'
import DashboardPage from './pages/DashboardPage'
import MappingsPage from './pages/MappingsPage'

type Step = 'upload' | 'mapping' | 'dashboard'

function App() {
  const [step, setStep] = useState<Step>('upload');
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="h-screen w-screen bg-white text-gray-900 font-sans">
      {step === 'upload' && (
        <UploadPage 
          onUpload={(file) => {
            setFile(file);
            setStep('mapping');
          }} 
        />
      )}
      
      {step === 'mapping' && (
        <MappingsPage 
          file={file}
          onConfirm={() => setStep('dashboard')} 
        />
      )}
      
      {step === 'dashboard' && (
        <DashboardPage file={file} />
      )}
    </div>
  )
}

export default App
