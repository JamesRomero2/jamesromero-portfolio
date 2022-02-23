import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import SocialStyles from '../styles/components/social.module.scss';
 
const SocialMedia = [
    {
        key: "1",
        icon: <LinkedInIcon style={{ fontSize: 30 }}/>,
        title: "Linkedin",
        link: "https://www.linkedin.com/in/james-romero-213403224/"
    },
    {
        key: "2",
        icon: <GitHubIcon style={{ fontSize: 30 }}/>,
        title: "Github",
        link: "https://github.com/JamesRomero2"
    },
    {
        key: "3",
        icon: <InstagramIcon style={{ fontSize: 30 }}/>,
        title: "Instagram",
        link: "https://www.instagram.com/blue_semiColon/"
    },
    {
        key: "4",
        icon: <YouTubeIcon style={{ fontSize: 30 }}/>,
        title: "Youtube",
        link: "https://www.youtube.com/channel/UCh0ur_US53T69ajW9K2aYjA"
    },
    {
        key: "5",
        icon: <TwitterIcon style={{ fontSize: 30 }}/>,
        title: "Twitter",
        link: "https://twitter.com/Blue_semicolon"
    },
]
const SocialMediaLinks = () => { 
  return (
    <div className={SocialStyles.container}>
        {
            SocialMedia.map((links) => (
                <a href={links.link} passhref={"true"} key={links.key} target={"_blank"} rel={"noreferrer"}>
                    <div className={SocialStyles.link__container}>
                        <div className={SocialStyles.link__container__logo}>
                            {links.icon}
                        </div>
                        <div className={SocialStyles.link__container__text}>
                            {links.title}
                        </div>
                    </div>
                </a>
            ))
        }
    </div>
  )
}
 
export default SocialMediaLinks