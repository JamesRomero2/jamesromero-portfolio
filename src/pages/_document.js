import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocs extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
					<link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Lato:wght@400;700&display=swap" rel="stylesheet"/>
				</Head>
				<body>
					<Main/>
				</body>
				<NextScript/>
			</Html>
		)
	}
}

export default MyDocs
