import { useMemo, useState } from 'react'
import { sendEmail } from '../services/email'

type Alert = {
	id: string
	type: 'fight' | 'intrusion' | 'lpr' | 'canteen'
	timestamp: string
	location: string
	description: string
}

const MOCK: Alert[] = [
	{ id: '1', type: 'fight', timestamp: new Date().toISOString(), location: 'Canteen', description: 'Altercation detected near counter' },
	{ id: '2', type: 'intrusion', timestamp: new Date().toISOString(), location: 'Server Room', description: 'Restricted area entry' },
	{ id: '3', type: 'lpr', timestamp: new Date().toISOString(), location: 'Parking', description: 'Unknown plate detected' },
	{ id: '4', type: 'canteen', timestamp: new Date().toISOString(), location: 'Canteen', description: 'Overtime after break' },
]

export default function Alerts() {
	const [type, setType] = useState<'all' | Alert['type']>('all')
	const [sending, setSending] = useState(false)
	const filtered = useMemo(() => (type === 'all' ? MOCK : MOCK.filter(a => a.type === type)), [type])

	async function emailReport() {
		setSending(true)
		const lines = filtered.map(a => `${a.type} @ ${a.location} - ${new Date(a.timestamp).toLocaleString()}`)
		await sendEmail({ to: ['sachinviknesh6002@gmail.com'], subject: 'TrueShield Alerts Report', body: lines.join('\n') })
		setSending(false)
		alert('Report emailed')
	}

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<div className="flex items-end justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold">Alerts</h1>
					<p className="mt-2 text-gray-600 dark:text-gray-400">Filter by type to review security events.</p>
				</div>
				<div className="flex items-center gap-3">
					<label className="text-sm">Type
						<select className="ml-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-1" value={type} onChange={(e) => setType(e.target.value as any)}>
							<option value="all">All</option>
							<option value="fight">Fight</option>
							<option value="intrusion">Intrusion</option>
							<option value="lpr">LPR</option>
							<option value="canteen">Canteen Overtime</option>
						</select>
					</label>
					<button onClick={emailReport} disabled={sending} className="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700 disabled:opacity-50">{sending ? 'Sending...' : 'Email Report'}</button>
				</div>
			</div>
			<div className="mt-8 space-y-3">
				{filtered.map((a) => (
					<div key={a.id} className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm flex items-center justify-between">
						<div>
							<p className="font-medium capitalize">{a.type} • {a.location}</p>
							<p className="text-sm text-gray-600 dark:text-gray-400">{a.description}</p>
						</div>
						<div className="text-xs text-gray-500">{new Date(a.timestamp).toLocaleString()}</div>
					</div>
				))}
			</div>
		</div>
	)
}