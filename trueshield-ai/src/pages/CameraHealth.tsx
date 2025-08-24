import { useMemo, useState } from 'react'
import { sendEmail } from '../services/email'

type Cam = { id: string; name: string; location: string; status: 'online' | 'warning' | 'offline' }

const CAMS: Cam[] = [
	{ id: 'c1', name: 'Entrance 1', location: 'Main Entrance', status: 'online' },
	{ id: 'c2', name: 'Canteen 2', location: 'Canteen', status: 'warning' },
	{ id: 'c3', name: 'Parking 1', location: 'Parking', status: 'offline' },
	{ id: 'c4', name: 'Server 1', location: 'Server Room', status: 'online' },
]

export default function CameraHealth() {
	const [filter, setFilter] = useState<'all' | Cam['status']>('all')
	const [sending, setSending] = useState(false)
	const filtered = useMemo(() => (filter === 'all' ? CAMS : CAMS.filter(c => c.status === filter)), [filter])

	async function emailHealth() {
		setSending(true)
		const lines = filtered.map(c => `${c.name} (${c.location}) - ${c.status}`)
		await sendEmail({ to: ['sachinviknesh6002@gmail.com'], subject: 'TrueShield Camera Health', body: lines.join('\n') })
		setSending(false)
		alert('Health report emailed')
	}

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<div className="flex items-end justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold">Camera Health</h1>
					<p className="mt-2 text-gray-600 dark:text-gray-400">Monitor camera connectivity and status.</p>
				</div>
				<div className="flex items-center gap-3">
					<label className="text-sm">Status
						<select className="ml-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-1" value={filter} onChange={(e) => setFilter(e.target.value as any)}>
							<option value="all">All</option>
							<option value="online">Online</option>
							<option value="warning">Warning</option>
							<option value="offline">Offline</option>
						</select>
					</label>
					<button onClick={emailHealth} disabled={sending} className="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700 disabled:opacity-50">{sending ? 'Sending...' : 'Email Health Report'}</button>
				</div>
			</div>
			<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{filtered.map(c => (
					<div key={c.id} className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
						<div className="flex items-center justify-between">
							<div>
								<p className="font-medium">{c.name}</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">{c.location}</p>
							</div>
							<span className={{ online: 'text-green-600', warning: 'text-yellow-600', offline: 'text-red-600' }[c.status]}>●</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}