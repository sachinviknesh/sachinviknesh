type Member = { id: string; name: string; location: string; motion: number; sleeping: boolean }

const MEMBERS: Member[] = [
	{ id: 'm1', name: 'Mohammed Ali', location: 'Assembly', motion: 8, sleeping: true },
	{ id: 'm2', name: 'Priya Sharma', location: 'QA Lab', motion: 22, sleeping: false },
	{ id: 'm3', name: 'Rajesh Kumar', location: 'Packing', motion: 65, sleeping: false },
	{ id: 'm4', name: 'Sneha Patel', location: 'Canteen', motion: 0, sleeping: false },
]

export default function CrewMotionMonitor() {
	function sendAlert(m: Member) {
		console.log('Alert sent for', m.name)
		alert(`Alert sent for ${m.name}`)
	}
	return (
		<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-3xl font-bold">Crew Motion Monitor</h1>
			<div className="mt-8 space-y-3">
				{MEMBERS.map(m => (
					<div key={m.id} className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm flex items-center justify-between">
						<div>
							<p className="font-medium">{m.name} • {m.location}</p>
							<p className="text-sm text-gray-600 dark:text-gray-400">Motion: {m.motion}% {m.sleeping && <span className="text-red-600">(Sleeping suspected)</span>}</p>
						</div>
						<button onClick={() => sendAlert(m)} className="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">Send Alert</button>
					</div>
				))}
			</div>
		</div>
	)
}