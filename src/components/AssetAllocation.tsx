import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Alternatives", value: 41 },
  { name: "Equities", value: 29 },
  { name: "Real Estate", value: 9 },
  { name: "Cash", value: 8 },
  { name: "Bonds", value: 6 },
  { name: "Other", value: 7 },
];

const COLORS = ['#C5A572', '#1A1F2C', '#8E9196', '#F5F5F5', '#2d3748', '#4a5568'];

export const AssetAllocation = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-sply-navy">
          Ultra High Net Worth Asset Allocation
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Alternative investments now make up the largest portion of ultra-high-net-worth portfolios
        </p>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name} ${value}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="text-sm text-gray-500 text-center mt-4">
          Source:{" "}
          <a 
            href="https://www.barrons.com/articles/alternative-investments-super-rich-marinas-whiskey-1f4035af" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sply-gold hover:underline"
          >
            Barron's - Alternative Investments Are Gaining Ground With the Super Rich
          </a>
        </div>
      </div>
    </section>
  );
};