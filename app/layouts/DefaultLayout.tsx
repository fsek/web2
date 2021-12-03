import { ReactNode } from 'react';
import Head from 'next/head';
import { BottomBar } from '../elements/BottomBar';

interface Props {
    children: ReactNode;
    title?: string;
}

export const DefaultLayout = (props) => {
    const siteTitle = "F-sektionen";

    return(
    <><Head>
        <title>{props.title ? `${siteTitle} | ${props.title}` : siteTitle}</title>
    </Head>
    <div className="flex flex-col min-w-screen min-h-screen">
        <div className="bg-white z-10 sticky top-0">
            <p className="text-7xl">F-sektionen</p>
        </div>
        <div className="h-full">
            {props.children}
        </div>
        <div className="mt-auto">
            <BottomBar></BottomBar>
        </div>
    </div></>);
}