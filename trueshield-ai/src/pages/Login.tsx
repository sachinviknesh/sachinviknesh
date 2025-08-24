import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	function submit(e: React.FormEvent) {
		e.preventDefault()
		// Demo only: redirect to dashboard
		navigate('/dashboard')
	}
	return (
		<div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-3xl font-bold mb-6">Login</h1>
			<form onSubmit={submit} className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm space-y-4">
				<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" />
				<input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" />
				<button className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700" type="submit">Sign in</button>
			</form>
		</div>
	)
}