import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function MappingsPage({ file: _file, onConfirm }: { file: File | null; onConfirm: () => void }) {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6 h-full flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Map your columns</h2>
        <p className="text-gray-500">We detected these fields. Confirm they match our standard schema.</p>
      </div>
      
      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Your Column (CSV)</th>
              <th className="px-6 py-3">Mapped To (Standard)</th>
              <th className="px-6 py-3">Sample Value</th>
              <th className="px-6 py-3">Confidence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { csv: 'Created at', std: 'order_date', sample: '2025-02-14 10:00', conf: 'High' },
              { csv: 'Total', std: 'total_price', sample: '142.50', conf: 'High' },
              { csv: 'Email', std: 'customer_email', sample: 'bob@example.com', conf: 'High' },
              { csv: 'Financial Status', std: 'payment_status', sample: 'paid', conf: 'Medium' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{row.csv}</td>
                <td className="px-6 py-4 text-blue-600 font-mono">{row.std}</td>
                <td className="px-6 py-4 text-gray-500">{row.sample}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100">
                    <CheckCircle2 className="w-3 h-3" /> {row.conf}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end">
        <button 
          onClick={onConfirm}
          className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-lg font-medium transition-all"
        >
          Confirm Mapping <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
