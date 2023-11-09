import HomeHeader from "./header/home_header.jsx";
import './home_screen.scss';
import EmailCard from "./components/email_card.jsx";

const Home_screen = () => {
  return <div id={`home`}>
    <HomeHeader />

    {document.body.getAttribute('')}
    <div id={`home-content`}>
      <EmailCard />

      <div style={{height: '20px'}}/>

    </div>
  </div>
}

export default Home_screen;
