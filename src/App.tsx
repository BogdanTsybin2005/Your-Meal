import Wrapper from './components/wrapper/Wrapper';
import { Suspense, lazy, memo } from 'react';
const Header = lazy(() => import('./components/header/Header'));
const Main = lazy(() => import('./components/main/Main'));
const MainContainer = lazy(() => import('./components/MainContainer/MainContainer'));
const MainSection = lazy(() => import('./components/MainSection/MainSection'));
const Footer = lazy(() => import('./components/footer/Footer'));
import './App.scss';


function App() {
  return (
    <Wrapper>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Suspense fallback={null}>
        <Main>
          <MainContainer />
          <MainSection />
        </Main>
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </Wrapper>
  )
}

export default memo(App);
