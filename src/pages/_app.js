import { ThemeProvider } from 'next-themes';

import Layout from "../components/global/Layout";
import "../styles/index.scss";

function App({ Component, router, ...pageProps}) {
	return (
		<ThemeProvider defaultTheme='system'>
			<Layout router={router}>
				<Component {...pageProps} key={router.route}/>
			</Layout>
		</ThemeProvider>
	)
}

export default App
