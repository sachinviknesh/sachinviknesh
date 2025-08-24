import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import LiveView from './pages/LiveView'
import Alerts from './pages/Alerts'
import CameraHealth from './pages/CameraHealth'
import CustomCameraSettings from './pages/CustomCameraSettings'
import AICameraCustomization from './pages/AICameraCustomization'
import WomenSafety from './pages/WomenSafety'
import CEOControl from './pages/CEOControl'
import CrewMotionMonitor from './pages/CrewMotionMonitor'

export const appRoutes = [
	{ path: '/', element: <Home /> },
	{ path: '/features', element: <Features /> },
	{ path: '/pricing', element: <Pricing /> },
	{ path: '/contact', element: <Contact /> },
	{ path: '/login', element: <Login /> },
	{ path: '/dashboard', element: <Dashboard /> },
	{ path: '/live', element: <LiveView /> },
	{ path: '/alerts', element: <Alerts /> },
	{ path: '/health', element: <CameraHealth /> },
	{ path: '/settings/custom-camera', element: <CustomCameraSettings /> },
	{ path: '/ai/customization', element: <AICameraCustomization /> },
	{ path: '/women-safety', element: <WomenSafety /> },
	{ path: '/ceo', element: <CEOControl /> },
	{ path: '/crew-motion', element: <CrewMotionMonitor /> },
]