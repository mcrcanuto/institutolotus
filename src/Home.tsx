import React from "react";
import Menu from "./components/menus/Menu";
import Submenu from "./components/menus/submenu";
import Zap from "./components/popup/zapzap";
import Slide from "./slides/swiper";


function Home() {
	return (
		<React.Fragment>
			<Menu/>
			<Submenu/>
			<Slide/>
			
		</React.Fragment>
			

			)
}

export default Home;