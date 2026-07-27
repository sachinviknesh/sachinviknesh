import { useState } from 'react'

export default function CEOControl() {
	const [verified, setVerified] = useState(false)
	function fingerprintVerify() {
		setVerified(true)
	}
	return (
		<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-6">
			<h1 className="text-3xl font-bold">CEO Control Panel</h1>
			{!verified ? (
				<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
					<p className="text-sm">Fingerprint authentication required to proceed.</p>
					<button onClick={fingerprintVerify} className="mt-3 inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Verify Fingerprint</button>
				</div>
			) : (
				<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm space-y-3">
					<p className="text-sm text-gray-600 dark:text-gray-400">Access granted. Customize AI and delegate tasks.</p>
					<ul className="list-disc pl-5 text-sm space-y-1">
						<li>Adjust detection sensitivity</li>
						<li>Assign monitoring duties</li>
						<li>Review system performance</li>
					</ul>
				</div>
			)}
		</div>
	)
}