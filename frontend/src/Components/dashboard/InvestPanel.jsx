import React from 'react'
import { Bolt, BarChart } from 'lucide-react'
import { motion } from 'framer-motion'


const InvestPanel = () => {
return (
<motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}}  className="rounded-xl card-sketch h-full flex flex-col gap-4 p-3">
<div>
<h5 className="font-semibold">Investment plan</h5>
<p className="text-sm text-slate-400">Invest according to your plan or try smart suggestions</p>
</div>


<div className="flex-1 grid grid-rows-2 gap-4">
<div className="p-3 rounded-lg bg-slate-800 flex flex-col justify-center items-start">
<div className="flex items-center gap-3">
<Bolt className="w-5 h-5" />
<div>
<div className="text-sm">Invest according to your plan</div>
<div className="text-xs text-slate-400">Manual plan</div>
</div>
</div>
</div>


<div className="p-3 rounded-lg bg-slate-800 flex flex-col justify-center items-start">
<div className="flex items-center gap-3">
<BarChart className="w-5 h-5" />
<div>
<div className="text-sm">Invest with smart suggestion</div>
<div className="text-xs text-slate-400">AI suggestions</div>
</div>
</div>
</div>
</div>


<button className="w-full py-2 mt-2 rounded bg-amber-500 text-slate-900 font-semibold">Start Investing</button>
</motion.div>
)
}

export default InvestPanel;