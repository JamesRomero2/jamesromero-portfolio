import Head from "next/head";

const Meta = ({title, description, keywords}) => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<meta name="keywords" content={keywords}/>
			<meta name="description" content={description}/>
			<meta name="author" content="James Romero"/>
			<meta name="author" content="Blue Royalty"/>
			<meta charSet="UTF-8"/>
			<title>{title}</title>
		</Head>
	)
}

export default Meta;
