import { useMemo, useState } from 'react'

const plans = [
	{ name: 'Basic', price: 29, features: ['Up to 5 cameras', 'Email alerts', 'Basic analytics'] },
	{ name: 'Pro', price: 79, features: ['Up to 25 cameras', 'Priority alerts', 'Advanced analytics'] },
	{ name: 'Enterprise', price: 199, features: ['Unlimited cameras', 'SLA support', 'Custom AI models'] },
]

const currencies = {
	USD: 1,
	EUR: 0.92,
	GBP: 0.79,
	INR: 83.0,
	AUD: 1.55,
	CAD: 1.38,
}

type Currency = keyof typeof currencies

export default function Pricing() {
	const [currency, setCurrency] = useState<Currency>('USD')
	const symbol = useMemo(() => ({ USD: '$', EUR: '€', GBP: '£', INR: '₹', AUD: 'A$', CAD: 'C$' }[currency]), [currency])
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<div className="flex items-center justify-between gap-4">
				<h1 className="text-3xl font-bold">Pricing</h1>
				<label className="text-sm">Currency
					<select className="ml-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-1" value={currency} onChange={(e) => setCurrency(e.target.value as Currency)}>
						{Object.keys(currencies).map((c) => <option key={c} value={c}>{c}</option>)}
					</select>
				</label>
			</div>
			<p className="mt-2 text-gray-600 dark:text-gray-400">Prices shown in {currency}. Converted dynamically for display.</p>
			<div className="mt-8 grid md:grid-cols-3 gap-6">
				{plans.map((p) => {
					const converted = Math.round(p.price * currencies[currency])
					return (
						<div key={p.name} className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm flex flex-col">
							<h3 className="text-xl font-semibold">{p.name}</h3>
							<p className="mt-2 text-3xl font-bold">{symbol}{converted}<span className="text-base font-normal text-gray-500">/mo</span></p>
							<ul className="mt-4 space-y-2 text-sm flex-1">
								{p.features.map((f) => <li key={f}>• {f}</li>)}
							</ul>
							<button className="mt-6 inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Get Started</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}