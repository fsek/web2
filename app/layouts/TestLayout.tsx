import { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
    children: ReactNode;
    title?: string;
}

export const TestLayout = (props) => {
    return(
    <><Head>
        <title>{props.title ? props.title : siteTitle}</title>
    </Head>
    <div className="h-screen w-screen bg-red-400">
        <div>{props.children}</div>
    </div></>);
}