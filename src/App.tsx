import { PromoFlixLanding } from './components/PromoFlixLanding';
import IndustriesPage from './industries/IndustriesPage';
import './styles/interactive.css';

export default function App() {
  if (window.location.pathname.startsWith('/industries')) {
    return <IndustriesPage />;
  }

  return <PromoFlixLanding />;
}
