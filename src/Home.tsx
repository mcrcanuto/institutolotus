import React from "react";
import Menu from "./components/menus/Menu";
import Submenu from "./components/menus/submenu";
import Zap from "./components/popup/zapzap";
import Slide from "./slides/swiper";
import Slide2 from "./slides/swiper2";
import Card from "./components/card"
import Espaco from "./components/espaco"


function Home() {
	return (
		<React.Fragment>
			<Menu/>
			<Submenu/>
			<Slide/>
			<Zap/>
			<Slide2/>
			<Card/>
			<Espaco/>
		
		</React.Fragment>
			

			)
}

export default Home;