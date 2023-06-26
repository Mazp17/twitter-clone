import { FunctionComponent, ReactElement } from "react";

interface HeaderItemProps {
    children: ReactElement | string;
    active?: boolean;
}

const HeaderItem: FunctionComponent<HeaderItemProps> = ({ active = false, children }) => {
    return (
        <a
            href="#"
            className={`py-2 w-full flex flex-col hover:bg-zinc-800 items-center ${!active ? "font-normal" : ""}`}
        >
            <div className=" ">
                {children}
                {(active ? (
                    <div className={`h-1 bg-blue-400 rounded-full `}></div>
                ) : "")}
            </div>
        </a>
    );
}

export default HeaderItem;