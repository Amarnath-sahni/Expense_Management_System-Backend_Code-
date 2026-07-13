import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import { FaDownload } from "react-icons/fa";

const SipCalculator = () => {
  const [monthly, setMonthly] = useState(25000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState(0);
  const [invested, setInvested] = useState(0);

  // Calculate SIP maturity
  useEffect(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const maturity = monthly * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    setResult(maturity.toFixed(0));
    setInvested(monthly * n);
  }, [monthly, rate, years]);

  // PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(20);
    doc.text("SIP Calculator Report", 20, 20);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Monthly Investment: ₹${monthly}`, 20, 40);
    doc.text(`Expected Return Rate: ${rate}%`, 20, 50);
    doc.text(`Time Period: ${years} years`, 20, 60);
    doc.text(`----------------------------------`, 20, 70);
    doc.text(`Maturity Value: ₹${result}`, 20, 85);
    doc.save("SIP-Report.pdf");
  };

  // DOCX
  const generateDOCX = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "SIP Calculator Report", bold: true, size: 32 }),
              ],
            }),
            new Paragraph(""),
            new Paragraph(`Monthly Investment: ₹${monthly}`),
            new Paragraph(`Expected Return Rate: ${rate}%`),
            new Paragraph(`Time Period: ${years} years`),
            new Paragraph("----------------------------------"),
            new Paragraph(`Maturity Value: ₹${result}`),
          ],
        },
      ],
    });
    const blob = await Packer.toBlob(doc);
    saveAs(blob, "SIP-Report.docx");
  };

  const data = [
    { name: "Invested Amount", value: invested },
    { name: "Estimated Returns", value: result - invested },
  ];

  const COLORS = ["#D3D3D3", "#4F46E5"];

  return (
    <div className="bg-gray-900 min-h-screen pt-20 px-4 md:px-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-3xl max-w-4xl mx-auto shadow-xl border border-gray-700"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">SIP Calculator</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Monthly Investment (₹)</label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="500"
                value={monthly}
                onChange={(e) => setMonthly(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-green-400 font-bold mt-1">₹{monthly}</div>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Expected Return (%)</label>
              <input
                type="range"
                min="1"
                max="25"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-green-400 font-bold mt-1">{rate}%</div>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Time Period (Years)</label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-green-400 font-bold mt-1">{years} Yr</div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={generatePDF}
                className="flex-1 bg-green-600 py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-green-700"
              >
                <FaDownload /> PDF
              </button>
              <button
                onClick={generateDOCX}
                className="flex-1 bg-blue-600 py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-blue-700"
              >
                <FaDownload /> DOCX
              </button>
            </div>
          </div>

          {/* Chart + Result */}
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>

            <div className="bg-gray-700 p-4 rounded-xl text-center w-full">
              <h2 className="text-xl font-semibold">Maturity Amount</h2>
              <p className="text-3xl font-bold text-green-400">₹{result}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SipCalculator;
