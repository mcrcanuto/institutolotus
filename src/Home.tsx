import React from "react";
import Menu from "./components/menus/Menu";
import Submenu from "./components/menus/submenu";
import Zap from "./components/popup/zapzap"


function Home() {
	return (
		<React.Fragment>
			<Menu/>
			<Submenu/>
			<Zap/>

		</React.Fragment>
			

			)
}

export default Home;