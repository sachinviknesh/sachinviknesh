import { Link } from 'react-router-dom'

export default function Dashboard() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-3xl font-bold">Dashboard</h1>
			<p className="mt-2 text-gray-600 dark:text-gray-400">Quick links to core modules.</p>
			<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<Link to="/live" className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900">Live View</Link>
				<Link to="/alerts" className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900">Alerts</Link>
				<Link to="/health" className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900">Camera Health</Link>
				<Link to="/settings/custom-camera" className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900">Custom Camera Settings</Link>
				<Link to="/ai/customization" className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900">AI Camera Customization</Link>
				<Link to="/women-safety" className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900">Women Safety Panel</Link>
				<Link to="/ceo" className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900">CEO Control Panel</Link>
				<Link to="/crew-motion" className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900">Crew Motion Monitor</Link>
			</div>
		</div>
	)
}