import { Link } from 'react-router-dom'

export default function Features() {
	const items = [
		{ title: 'AI Threat Detection', desc: 'Detects fights, intrusions, and anomalies in real-time with proactive alerts.' },
		{ title: 'Real-time Alerts', desc: 'Instant notifications across email and dashboard with severity tags.' },
		{ title: 'User Controls', desc: 'Role-based access with CEO fingerprint lock for critical settings.' },
		{ title: 'LPR & Face Recognition', desc: 'Vehicle access auditing and employee identification at entrances.' },
	]
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-3xl font-bold">Features</h1>
			<p className="mt-2 text-gray-600 dark:text-gray-400 max-w-3xl">A clean, organized, grid-based layout to explore TrueShield AIs surveillance capabilities.</p>
			<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{items.map((it) => (
					<div key={it.title} className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
						<h3 className="font-medium">{it.title}</h3>
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{it.desc}</p>
					</div>
				))}
			</div>
			<div className="mt-8">
				<Link to="/contact" className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Request a Demo</Link>
			</div>
		</div>
	)
}