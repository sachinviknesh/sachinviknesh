import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div>
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 -z-10">
					<div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
				</div>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
					<h1 className="text-4xl sm:text-5xl font-bold">TrueShield AI</h1>
					<p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
						AI-powered surveillance with real-time threat detection, intuitive controls, and secure access.
					</p>
					<div className="mt-8 flex items-center justify-center gap-4">
						<Link to="/contact" className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Request a Demo</Link>
						<Link to="/features" className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">Explore Features</Link>
					</div>
				</div>
			</section>
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
				<h2 className="text-2xl font-semibold">Core Capabilities</h2>
				<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
						<h3 className="font-medium">Fight Detection</h3>
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Detects violent behavior with proactive alerts.</p>
					</div>
					<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
						<h3 className="font-medium">Intrusion Alerts</h3>
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Restricted area monitoring with instant notifications.</p>
					</div>
					<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
						<h3 className="font-medium">License Plate Recognition</h3>
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Parking cameras with LPR for access logs.</p>
					</div>
					<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
						<h3 className="font-medium">Face Recognition</h3>
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Identify employees at entrances and canteens.</p>
					</div>
				</div>
			</section>
		</div>
	)
}