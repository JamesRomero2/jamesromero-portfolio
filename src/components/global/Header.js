import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';

import Sidebar from './Sidebar';
import TabList from '../TabList';
import headerStyles from '../../styles/components/header.module.scss'; 
 
//TODO : FIX HEADER TO MATCH PATH WITH THE STYLES
//TIP : Use export: to export colors from modules.scss


const Header = ({router}) => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();
	const [toggleSidebar, setToggleSidebar] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;	

	return (
		<header className={headerStyles.header}>
			<Link href={'/'} passHref scroll={false}>
				<div className={headerStyles.header__label}>
					<div className={headerStyles.header__label__logo}>
						<Image src="https://res.cloudinary.com/dcd2fsghf/image/upload/v1646059079/portfolio-res/Crown_g2kvb0.webp" width={30} height={30} alt="James Romero Logo, Website's Logo"/>
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
				<button className={headerStyles.hamburger} onClick={() => setToggleSidebar(!toggleSidebar)}>
					<MenuIcon className={headerStyles.hamburger__icon} style={{fontSize: 21}}/>
				</button>
					{
						toggleSidebar && (
							<Sidebar toggleSidebar={setToggleSidebar}/>
						)
					}
				<button className={headerStyles.toggle_btn} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
				{ 
					resolvedTheme === "dark" ? (
						<LightModeIcon style={{fontSize: 20}}/>
					) : (
						<DarkModeIcon style={{fontSize: 20}}/>
					)
				}
				</button>
			</div>               
		</header>
	)
}

export default Header
