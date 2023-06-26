import React from "react";
import Avatar from "../Avatar";
import { IconBrandTwitterFilled } from "@tabler/icons-react";
import HeaderItem from "./HeaderItem";

interface HeaderProps {

}

interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {
    render() {
        return (
            <header className="flex flex-col pt-2 w-full flex-nowrap">
                <section className="inline-flex px-4 py-4">
                    <Avatar></Avatar>
                    <div className="grow inline-flex justify-center">
                        <IconBrandTwitterFilled className='tw-icon-main grow-1'></IconBrandTwitterFilled>
                    </div>
                </section>
                <section className="inline-flex justify-around font-bold text-center border-b border-zinc-700">
                    <HeaderItem active={true}>
                        Para ti
                    </HeaderItem>
                    <HeaderItem>
                        Siguiendo
                    </HeaderItem>
                </section>
            </header>
            
        );
    }

}

export default Header;