import { TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

export default function DashboardPage({ file: _file }: { file: File | null }) {
  return (
    <div className="h-full bg-gray-50 p-8 overflow-y-auto">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Executive Overview</h1>
          <p className="text-gray-500 text-sm">Data range: Jan 1 - Feb 14, 2026</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm text-gray-600 shadow-sm">
            Quality Score: <strong className="text-green-600">98/100</strong>
          </span>
        </div>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Total Revenue', val: '$42,590', trend: '+12%', icon: TrendingUp, color: 'text-green-600' },
          { label: 'Avg Order Value', val: '$85.00', trend: '-2%', icon: TrendingDown, color: 'text-red-500' },
          { label: 'Refund Rate', val: '4.2%', trend: '+0.5%', icon: AlertTriangle, color: 'text-yellow-600' },
        ].map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-gray-500 text-sm font-medium">{m.label}</span>
              <m.icon className={`w-5 h-5 ${m.color}`} />
            </div>
            <div className="text-3xl font-bold text-gray-900">{m.val}</div>
            <div className={`text-sm mt-1 ${m.color.replace('text-', 'text-opacity-80 ')}`}>
              {m.trend} from last period
            </div>
          </div>
        ))}
      </div>

      {/* Decision Template Stub */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Why is revenue down?</h3>
        <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200 text-gray-400">
          [Chart: Revenue Drivers Waterfall will go here]
        </div>
      </div>
    </div>
  );
}
