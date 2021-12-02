import React from 'react';
import { Suspense } from 'react';
import Catalogue from './components/catalogue/Catalogue';
const FilteringFixed = React.lazy(() =>
	import('./components/filtering/FilteringFixed')
);
const NavBar = React.lazy(() => import('./components/NavBar/NavBar'));
const CoverPage = React.lazy(() => import('./components/coverPage/CoverPage'));

const App = () => {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<FilteringFixed />
				<NavBar />
				<div className='containerProject'>
					<CoverPage />
					<Catalogue />
				</div>
			</Suspense>
		</>
	);
};

export default App;
