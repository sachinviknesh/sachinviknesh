import { useState } from 'react'

type Recipient = 'HR' | 'Admin' | 'Security'

export default function CustomCameraSettings() {
	const [fight, setFight] = useState(true)
	const [intrusion, setIntrusion] = useState(true)
	const [lpr, setLpr] = useState(false)
	const [face, setFace] = useState(false)
	const [canteen, setCanteen] = useState(true)
	const [breakStart, setBreakStart] = useState('13:00')
	const [breakEnd, setBreakEnd] = useState('13:30')
	const [grace, setGrace] = useState(5)
	const [recipients, setRecipients] = useState<Recipient[]>(['HR', 'Security'])

	function toggleRecipient(r: Recipient) {
		setRecipients(prev => prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r])
	}

	function save() {
		console.log({ fight, intrusion, lpr, face, canteen, breakStart, breakEnd, grace, recipients })
		alert('Settings saved')
	}

	return (
		<div>
			<div className="sticky top-16 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200/60 dark:border-gray-800">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
					<h1 className="font-semibold">Custom Camera Settings</h1>
					<div className="flex items-center gap-3">
						<button onClick={save} className="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">Save</button>
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid lg:grid-cols-2 gap-6">
				<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm space-y-4">
					<h2 className="font-medium">Detection</h2>
					<label className="flex items-center justify-between">Detect Fight <input type="checkbox" checked={fight} onChange={(e) => setFight(e.target.checked)} /></label>
					<label className="flex items-center justify-between">Detect Intrusion <input type="checkbox" checked={intrusion} onChange={(e) => setIntrusion(e.target.checked)} /></label>
					<label className="flex items-center justify-between">License Plate Recognition <input type="checkbox" checked={lpr} onChange={(e) => setLpr(e.target.checked)} /></label>
					<label className="flex items-center justify-between">Face Recognition <input type="checkbox" checked={face} onChange={(e) => setFace(e.target.checked)} /></label>
				</div>
				<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm space-y-4">
					<h2 className="font-medium">Canteen Overtime Alert</h2>
					<label className="flex items-center justify-between">Enable <input type="checkbox" checked={canteen} onChange={(e) => setCanteen(e.target.checked)} /></label>
					<label className="block text-sm">Break Start<input type="time" value={breakStart} onChange={(e) => setBreakStart(e.target.value)} className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" /></label>
					<label className="block text-sm">Break End<input type="time" value={breakEnd} onChange={(e) => setBreakEnd(e.target.value)} className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" /></label>
					<label className="block text-sm">Grace Period (minutes)<input type="number" min={0} value={grace} onChange={(e) => setGrace(parseInt(e.target.value || '0'))} className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" /></label>
					<div className="text-sm">
						<p className="font-medium">Alert To</p>
						<div className="mt-2 flex flex-wrap gap-2">
							{(['HR','Admin','Security'] as Recipient[]).map(r => (
								<button key={r} type="button" onClick={() => toggleRecipient(r)} className={`px-3 py-1.5 rounded-md border ${recipients.includes(r) ? 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300' : 'border-gray-300 dark:border-gray-700'}`}>{r}</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}