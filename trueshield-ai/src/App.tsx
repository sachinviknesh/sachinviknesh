import { Link, Outlet } from 'react-router-dom'

export default function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200/60 dark:border-gray-800">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
					<Link to="/" className="font-semibold text-lg">TrueShield AI</Link>
					<nav className="flex items-center gap-4 text-sm">
						<Link to="/features" className="hover:underline">Features</Link>
						<Link to="/pricing" className="hover:underline">Pricing</Link>
						<Link to="/contact" className="hover:underline">Contact</Link>
						<Link to="/login" className="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">Login</Link>
					</nav>
				</div>
			</header>
			<main className="flex-1">
				<Outlet />
			</main>
			<footer className="border-t border-gray-200 dark:border-gray-800 py-8">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 dark:text-gray-300 flex items-center justify-between">
					<p>© {new Date().getFullYear()} TrueShield AI</p>
					<div className="flex items-center gap-4">
						<a href="mailto:sachinviknesh6002@gmail.com" className="hover:underline">sachinviknesh6002@gmail.com</a>
						<a href="https://www.linkedin.com/in/sachin-viknesh-m-k-417862311" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
					</div>
				</div>
			</footer>
		</div>
	)
}
