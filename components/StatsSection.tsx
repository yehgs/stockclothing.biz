import { Package, Users, TrendingUp, Award } from 'lucide-react';

const stats = [
  {
    icon: Package,
    value: '10,000+',
    label: 'Products in Stock',
    color: 'text-blue-600',
    bg: 'bg-blue-100'
  },
  {
    icon: Users,
    value: '5,000+',
    label: 'Happy Retailers',
    color: 'text-green-600',
    bg: 'bg-green-100'
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Customer Satisfaction',
    color: 'text-purple-600',
    bg: 'bg-purple-100'
  },
  {
    icon: Award,
    value: '50+',
    label: 'Top Brands',
    color: 'text-amber-600',
    bg: 'bg-amber-100'
  }
];

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
            <div className={`${stat.bg} ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
