import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion";

import Sidebar from './Sidebar';
import TabList from '../TabList';
import headerStyles from '../../styles/components/header.module.scss'; 

const Header = ({router}) => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();
	const [toggleSidebar, setToggleSidebar] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;	

	return (
		<motion.header className={headerStyles.header} animate={{ y : [-50,0]}} transition={{ease: "easeIn"}}>
			<Link href={'/'} passHref scroll={false}>
				<div className={headerStyles.header__label}>
					<div className={headerStyles.header__label__logo}>
						<Image src="https://res.cloudinary.com/blueshomepage/image/upload/v1646376715/portfolio/Crown_gqlwlj.webp" width={30} height={30} alt="James Romero Logo, Website's Logo"/>
					</div>
					<p>
						JAMES ROMERO 
					</p>
				</div>
			</Link>

			<div className={headerStyles.header__tab}>
				<div className={headerStyles.header__tab__list}>
					<TabList path={router.asPath}/>
				</div>
				<motion.button whileTap={{scale: 0.8}} className={headerStyles.hamburger} onClick={() => setToggleSidebar(!toggleSidebar)}>
					{
						toggleSidebar ? 
							<CloseIcon style={{fontSize: 24}}/>
								:
							<MenuIcon style={{fontSize: 24}}/>
					}
				</motion.button>
					{
						toggleSidebar && (
							<Sidebar toggleSidebar={setToggleSidebar}/>
						)
					}
				<motion.button whileTap={{scale: 0.8}} className={headerStyles.toggle_btn} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
				{ 
					resolvedTheme === "dark" ? (
						<LightModeIcon style={{fontSize: 20}}/>
					) : (
						<DarkModeIcon style={{fontSize: 20}}/>
					)
				}
				</motion.button>
			</div>               
		</motion.header>
	)
}

export default Header
