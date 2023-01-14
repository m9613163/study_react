import UserOrCreateTest from './pages/UserOrCreateTest'
import Memo from './pages/Memo'
import Callback from './pages/Callback'
import HightOrderCallback from './pages/HighOrderCallback'

export default function App() {
	return (
		<div>
			<HightOrderCallback />
			<Callback />
			<Memo />
			<UserOrCreateTest />
		</div>
	)
}