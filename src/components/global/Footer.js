import FooterStyle from '../../styles/components/footer.module.scss';

const Footer = () => {
	return (
		<footer className={FooterStyle.footer}>
			&copy; JAMES ROMERO | BLUE ROYALTY {new Date().getFullYear()}. All Rights Reserved
		</footer>
	)
}

export default Footer
