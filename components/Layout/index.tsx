import React from 'react';
import Head from 'next/head';

import './Layout.css';

type Props = {
    title: string
}

const Layout: React.FC<Props> = props => 
    <div className={'layout-root'}>
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet" />
        </Head>
        <header className='layout-root__header'>
            <div className='sf-container layout-root__brand'>
                <h1 className='layout-root__brand-text'>
                    strictly a formality
                </h1>
                <div className='layout-root__social-links'>
                    <a href='https://www.linkedin.com/in/jonny-kreell/' target='_blank' className='layout-root__social-link'>
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='https://github.com/strictlyaformality' target='_blank' className='layout-root__social-link'>
                        <i className='fab fa-github'></i>
                    </a>
                </div>
            </div>
        </header>
        <main className='layout-root__main'>
            {props.children}
        </main>
        <footer className='layout-root__footer'>
            THIS IS A FOOOOOT
        </footer>
    </div>

export default Layout;