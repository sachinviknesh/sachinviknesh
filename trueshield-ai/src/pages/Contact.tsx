import { useState } from 'react'

export default function Contact() {
	const [status, setStatus] = useState<string | null>(null)
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const form = e.currentTarget
		const formData = new FormData(form)
		const payload = Object.fromEntries(formData.entries())
		console.log('Contact form payload', payload)
		setStatus('Thanks! We\'ll get back to you shortly.')
		form.reset()
	}
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-3xl font-bold">Contact Us</h1>
			<div className="mt-8 grid md:grid-cols-2 gap-8">
				<form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
					<div className="grid sm:grid-cols-2 gap-4">
						<label className="block text-sm">Name<input name="name" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" /></label>
						<label className="block text-sm">Email<input type="email" name="email" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" /></label>
						<label className="block text-sm sm:col-span-2">Company<input name="company" className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" /></label>
						<label className="block text-sm sm:col-span-2">Message<textarea name="message" required rows={5} className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" /></label>
					</div>
					<div className="mt-4 flex items-center gap-3">
						<button className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700" type="submit">Submit</button>
						{status && <p className="text-sm text-green-600">{status}</p>}
					</div>
				</form>
				<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
					<h2 className="font-semibold">Get in touch</h2>
					<ul className="mt-4 space-y-2 text-sm">
						<li><span className="font-medium">Email:</span> <a className="hover:underline" href="mailto:sachinviknesh6002@gmail.com">sachinviknesh6002@gmail.com</a></li>
						<li><span className="font-medium">Phone:</span> +91 9363975429</li>
						<li><span className="font-medium">Location:</span> RMK College of Engineering and Technology</li>
						<li><a className="hover:underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sachin-viknesh-m-k-417862311">LinkedIn Profile</a></li>
					</ul>
				</div>
			</div>
		</div>
	)
}