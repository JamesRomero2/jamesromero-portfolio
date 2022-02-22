import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";
import LayoutStyle from "../../styles/components/layout.module.scss";


const Layout = ({children, router}) => {
	return (
		<div className={LayoutStyle.layout}>
			<Meta/>
			<Header router={router}/>
				{children}
			<Footer/>
		</div>
	)
}

export default Layout
