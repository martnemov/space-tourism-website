import { FC } from "react";

interface Props extends React.PropsWithChildren {
    index: number;
}

export const NavLink: FC<Props> = ({index, children}) =>  <li><a href="#">{index} {children}</a></li>