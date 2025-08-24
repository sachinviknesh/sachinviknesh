import { useState } from 'react'

export default function WomenSafety() {
	const [sosSent, setSosSent] = useState(false)
	function sendSOS() {
		console.log('SOS sent to HR and Security')
		setSosSent(true)
		setTimeout(() => setSosSent(false), 3000)
	}
	return (
		<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-6">
			<h1 className="text-3xl font-bold">Women Safety Panel</h1>
			<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
				<h2 className="font-medium">Emergency SOS</h2>
				<button onClick={sendSOS} className="mt-3 inline-flex items-center rounded-md bg-red-600 text-white px-4 py-2 hover:bg-red-700">Send SOS</button>
				{sosSent && <p className="mt-2 text-sm text-green-600">SOS sent!</p>}
			</div>
			<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
				<h2 className="font-medium">Smart Escort</h2>
				<p className="text-sm text-gray-600 dark:text-gray-400">Add trusted contacts to monitor movements after hours.</p>
			</div>
			<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
				<h2 className="font-medium">Geo Zones</h2>
				<p className="text-sm text-gray-600 dark:text-gray-400">Configure alert zones and schedules.</p>
			</div>
		</div>
	)
}