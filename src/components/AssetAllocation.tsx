
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Alternatives", value: 41 },
  { name: "Equities", value: 29 },
  { name: "Real Estate", value: 9 },
  { name: "Cash", value: 8 },
  { name: "Bonds", value: 6 },
  { name: "Other", value: 7 },
];

// Updated colors - Changed Cash color (index 3) from #F5F5F5 to #33C3F0 (Sky Blue)
const COLORS = ['#C5A572', '#1A1F2C', '#8E9196', '#33C3F0', '#2d3748', '#4a5568'];

export const AssetAllocation = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-sply-navy">
          High Net Worth Asset Allocation
        </h2>
        <p className="text-base md:text-lg text-gray-600 text-center mb-6 md:mb-8 max-w-3xl mx-auto">
          Alternative investments now make up the largest portion of high-net-worth portfolios
        </p>
        
        <div className="h-[300px] md:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name} ${value}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="text-xs md:text-sm text-gray-500 text-center mt-4">
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
