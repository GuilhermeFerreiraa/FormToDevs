import { Link } from 'react-router-dom'
import * as C from './style'

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SideBarItem = ({ 
    title, description,
    icon, path, active }: Props) => {
    return (
        <C.Container>
            <Link className="sideNav" to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    <img src={icon} alt="icon-alt" width={24} height={24}/>
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
}
