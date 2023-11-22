import React from "react";



import Menu from "./components/menus/Menu";
import Submenu from "./components/menus/submenu";
import Zap from "./components/popup/zapzap";
import Slide from "./components/slides/swiper";
import Slide2 from "./components/slides/swiper2";
import Card from "./components/slides/card"
import Footer from "./components/menus/footer";
import "./css/geral.css"

function Home() {
	
	return (

	

		<React.Fragment>
			<Menu/>
			<Submenu/>
			<Slide/>
			<Zap/>
			<Slide2/>
			<Card/>
			<Footer/>
		
		</React.Fragment>
			

			)
}

export default Home;