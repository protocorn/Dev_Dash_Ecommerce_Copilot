import { Upload } from "lucide-react";
import { ChangeEvent } from "react";

export default function UploadPage({ onUpload }: { onUpload: (file: File) => void }) {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onUpload(file);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center h-full animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <div className="bg-blue-50 p-6 rounded-full inline-block">
          <Upload className="w-12 h-12 text-blue-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Import your Shopify Orders</h2>
        <p className="text-gray-500 max-w-sm">
          Upload the <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">orders_export.csv</code> file directly from your Shopify Admin.
        </p>
        <input
          id="file-input"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="hidden"
        />
        <button 
          onClick={() => document.getElementById('file-input')?.click()}
          className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg shadow-blue-500/30 transition-all active:scale-95"
        >
          Upload File
        </button>
      </div>
    </div>
    );
}