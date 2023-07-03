import Main from './components/Main.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import Banner from './components/Banner.jsx';
import BannerTwo from './components/BannerTwo.jsx';
import BannerThree from './components/BannerThree.jsx';

import './styles/App.css';


const bannerMaterialOne = {
  title: "Black Jacket",
  content: "Guess??",
  bgColor: "cyan",
  fontColor: "white"
};

const bannerMaterialTwo = {
  title: "Tied Shirt",
  content: "Roam the unknown",
  bgColor: "grey",
  fontColor: "orange"
};

function App() {
  return (
   <>
   <Main />
   <Body />
   <Banner 
      title="Blue Sweater" 
      content="I wear white shoes"
      bgColor="pink"
      fontColor="red" />
   <Banner 
      title="Grey Sweater" 
      content="I wear pink socks"
      bgColor="blue"
      fontColor="white" />
    <BannerTwo info={bannerMaterialOne}/>

    <BannerThree data={bannerMaterialTwo}/>

   <Footer />
   </>
  );
}

export default App;
