// src/components/GrowthChart.jsx
import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { motion } from 'framer-motion'

const GrowthChart = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const incomeRes = await fetch('http://localhost:5000/income/fetch')
        const incomeData = await incomeRes.json()
        const expenseRes = await fetch('http://localhost:5000/expense/fetch')
        const expenseData = await expenseRes.json()

        if (incomeData.success && expenseData.success) {
          // Aggregate by day (format: "MMM DD")
          const allDates = [...incomeData.incomes, ...expenseData.expenses]
            .map(item => new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))
          const uniqueDates = [...new Set(allDates)]

          const chartData = uniqueDates.map(date => {
            const dailyIncome = incomeData.incomes
              .filter(i => new Date(i.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) === date)
              .reduce((sum, i) => sum + i.amount, 0)
            const dailyExpense = expenseData.expenses
              .filter(e => new Date(e.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) === date)
              .reduce((sum, e) => sum + e.amount, 0)
            return { day: date, Income: dailyIncome, Expense: dailyExpense }
          })

          setData(chartData)
        }
      } catch (err) {
        console.error('Error fetching chart data:', err)
      }
    }
    fetchData()
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl h-72 bg-slate-900 p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-white">Income vs Expense</h4>
        <div className="text-sm text-slate-400">Last 30 days</div>
      </div>

      <LineChart width={500} height={250} data={data} margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
        <XAxis dataKey="day" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderRadius: '8px', border: 'none' }} itemStyle={{ color: '#fff' }} />
        <Legend wrapperStyle={{ color: '#fff' }} />

        <Line
          type="monotone"
          dataKey="Income"
          stroke="#22c55e"
          strokeWidth={3}
          dot={{ r: 3, fill: '#22c55e' }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="Expense"
          stroke="#ef4444"
          strokeWidth={3}
          dot={{ r: 3, fill: '#ef4444' }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </motion.div>
  )
}

export default GrowthChart
