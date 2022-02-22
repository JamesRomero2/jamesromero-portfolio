import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

import DominoStyle from '../styles/components/domino.module.scss';

const items = [
    {
        key: "1",
        icon: <DesignServicesIcon style={{ fontSize: 24 }}/>,
        title: "Better Design"
    },
    {
        key: "2",
        icon: <CodeIcon style={{ fontSize: 24 }}/>,
        title: "Professional Development"
    },
    {
        key: "3",
        icon: <DevicesIcon style={{ fontSize: 24 }}/>,
        title: "Responsive Design"
    },
    {
        key: "4",
        icon: <SettingsSuggestIcon style={{ fontSize: 24 }}/>,
        title: "Latest Technology"
    },
]

const DominoCard = () => {
    return (
        <div className={DominoStyle.container}>
            <div className={DominoStyle.carousel}>
                <div className={DominoStyle.carousel__inner}>
                    {
                        items.map(({key, icon, title}) => (
                            <div className={DominoStyle.carousel__inner__item} key={key}>
                                <div className={DominoStyle.carousel__inner__item__icon}>
                                    {icon}
                                </div>
                                <div className={DominoStyle.carousel__inner__item__text}>
                                    {title}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DominoCard