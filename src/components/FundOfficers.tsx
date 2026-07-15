import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Scale } from "lucide-react";

const officers = [
  { name: "Tyler Williams", title: "Managing Principal" },
  { name: "Tom Wenz", title: "President" },
  { name: "James Wiseman", title: "Secretary" },
];

export const FundOfficers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-800 mb-4">
              Fund Officers & Counsel
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sply-navy to-sply-gold mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-200 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sply-navy to-sply-gold flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-gray-900">
                    Officers
                  </h3>
                </div>
                <ul className="space-y-3">
                  {officers.map((o) => (
                    <li key={o.name} className="flex justify-between border-b border-gray-100 pb-2 last:border-0">
                      <span className="font-noto-serif-ethiopic text-gray-800">{o.name}</span>
                      <span className="font-noto-serif-ethiopic text-gray-600 text-sm">{o.title}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sply-navy to-sply-gold flex items-center justify-center">
                    <Scale className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-gray-900">
                    Fund Counsel
                  </h3>
                </div>
                <p className="font-noto-serif-ethiopic text-gray-800 text-lg">
                  Wiseman Counsel PLLC
                </p>
                <p className="font-noto-serif-ethiopic text-gray-600 text-sm mt-2">
                  Independent legal counsel to the fund.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
