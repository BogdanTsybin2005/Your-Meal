import Wrapper from "./components/wrapper/Wrapper"
import Header from "./components/header/Header"
import Main from "./components/main/Main";
import MainContainer from "./components/MainContainer/MainContainer";
import BurgerSection from "./components/BurgerSection/BurgerSection";
import Footer from "./components/footer/Footer";
import './App.scss';


function App() {
  return (
    <Wrapper>
      <Header/>
      <Main>
        <MainContainer/>
        <BurgerSection/>
      </Main>
      <Footer/>
    </Wrapper>
  )
}

export default App
