import { useState } from 'react'

type Protocol = 'RTSP' | 'ONVIF' | 'HTTP'

type Camera = {
	id: string
	name: string
	location: string
	ip: string
	port: number
	username?: string
	password?: string
	protocol: Protocol
	enabled: boolean
}

function generateId() { return Math.random().toString(36).slice(2, 9) }

const DEFAULTS: Camera[] = [
	{ id: generateId(), name: 'Main Entrance', location: 'Main Entrance', ip: '192.168.1.110', port: 554, protocol: 'RTSP', enabled: true },
	{ id: generateId(), name: 'Canteen', location: 'Canteen', ip: '192.168.1.120', port: 80, protocol: 'ONVIF', enabled: true },
]

export default function AICameraCustomization() {
	const [cameras, setCameras] = useState<Camera[]>(DEFAULTS)
	const [editing, setEditing] = useState<Camera | null>(null)

	function addQuick() {
		const lastIp = cameras[cameras.length - 1]?.ip || '192.168.1.100'
		const parts = lastIp.split('.')
		const next = Number(parts[3]) + 1
		const ip = `${parts[0]}.${parts[1]}.${parts[2]}.${isNaN(next) ? 101 : next}`
		setCameras(prev => [...prev, { id: generateId(), name: `Camera ${prev.length + 1}`, location: 'Custom', ip, port: 554, protocol: 'RTSP', enabled: true }])
	}

	function save(cam: Camera) {
		setCameras(prev => prev.map(c => c.id === cam.id ? cam : c))
		setEditing(null)
	}

	function test(cam: Camera) {
		const url = cam.protocol === 'RTSP' ? `rtsp://${cam.ip}:${cam.port}` : cam.protocol === 'ONVIF' ? `http://${cam.ip}:${cam.port}/onvif/device_service` : `http://${cam.ip}:${cam.port}`
		alert(`Testing: ${url}`)
	}

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-semibold">AI Camera Customization</h1>
				<div className="flex items-center gap-3">
					<button onClick={addQuick} className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-900">Quick Add Camera</button>
				</div>
			</div>
			<div className="mt-6 grid md:grid-cols-2 gap-6">
				{cameras.map(cam => (
					<div key={cam.id} className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm space-y-3">
						<div className="flex items-center justify-between">
							<p className="font-medium">{cam.name} <span className="text-xs text-gray-500">({cam.location})</span></p>
							<label className="text-sm flex items-center gap-2">Enabled <input type="checkbox" checked={cam.enabled} onChange={(e) => save({ ...cam, enabled: e.target.checked })} /></label>
						</div>
						<p className="text-sm text-gray-600 dark:text-gray-400">{cam.protocol} • {cam.ip}:{cam.port}</p>
						<div className="flex items-center gap-2">
							<button onClick={() => setEditing(cam)} className="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">Edit</button>
							<button onClick={() => test(cam)} className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-900">Test Connection</button>
						</div>
						{editing?.id === cam.id && (
							<form onSubmit={(e) => { e.preventDefault(); save({ ...editing }) }} className="mt-3 grid grid-cols-2 gap-3">
								<input className="rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} placeholder="Name" />
								<input className="rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={editing.location} onChange={(e) => setEditing({ ...editing, location: e.target.value })} placeholder="Location" />
								<input className="rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={editing.ip} onChange={(e) => setEditing({ ...editing, ip: e.target.value })} placeholder="IP address" />
								<input type="number" className="rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={editing.port} onChange={(e) => setEditing({ ...editing, port: parseInt(e.target.value || '0') })} placeholder="Port" />
								<select className="rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={editing.protocol} onChange={(e) => setEditing({ ...editing, protocol: e.target.value as Protocol })}>
									<option>RTSP</option>
									<option>ONVIF</option>
									<option>HTTP</option>
								</select>
								<input className="rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={editing.username || ''} onChange={(e) => setEditing({ ...editing, username: e.target.value })} placeholder="Username (optional)" />
								<input className="rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={editing.password || ''} onChange={(e) => setEditing({ ...editing, password: e.target.value })} placeholder="Password (optional)" />
								<div className="col-span-2 flex items-center gap-2">
									<button className="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700" type="submit">Save</button>
									<button type="button" onClick={() => setEditing(null)} className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-900">Cancel</button>
								</div>
							</form>
						)}
					</div>
				))}
			</div>
		</div>
	)
}