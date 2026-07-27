export default function LiveView() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-3xl font-bold">Live View</h1>
			<p className="mt-2 text-gray-600 dark:text-gray-400">Real-time camera feeds will appear here.</p>
			<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<div className="aspect-video rounded-xl border border-gray-200 dark:border-gray-800 bg-black/60" />
				<div className="aspect-video rounded-xl border border-gray-200 dark:border-gray-800 bg-black/60" />
				<div className="aspect-video rounded-xl border border-gray-200 dark:border-gray-800 bg-black/60" />
			</div>
		</div>
	)
}