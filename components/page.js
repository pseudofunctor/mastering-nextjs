import Head from 'next/head';
import {withRouter} from 'next/router';
import React from 'react';

import {dateTime} from '../utils/date-format';
import titleStyle from '../utils/title-style';

import GlobalStyle from './GlobalStyle';

const Page = ({children, date, description, image, title = 'Mastering Next.js', keywords, router}) => {
    const domain = 'https://masteringnextjs.com';
    const formattedTitle = titleStyle(title);
    const url = router && router.asPath ? router.asPath : undefined;
    const canonical = url && url === '/' ? domain : domain + url;
    const featuredImage = domain + image;

    return (
        <>
            <Head>
                <title>{formattedTitle}</title>
                <meta charSet="utf-8" />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                {description && <meta content={description} name="description" />}
                {keywords && <meta content={keywords} name="keywords" />}
                <meta content="follow, index" name="robots" />
                <meta content="#ffffff" name="theme-color" />
                <meta content="#ffffff" name="msapplication-TileColor" />
                <meta content="/static/favicons/browserconfig.xml" name="msapplication-config" />
                <link href="/static/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
                <link href="/static/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
                <link href="/static/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
                <link href="/static/favicons/site.webmanifest" rel="manifest" />
                <link color="#4a9885" href="/static/favicons/safari-pinned-tab.svg" rel="mask-icon" />
                <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap"
                    rel="stylesheet"
                />
                <script src="https://gumroad.com/js/gumroad.js" />
                {url && <link href={canonical} rel="canonical" />}
                <meta content="en_US" property="og:locale" />
                <meta content={formattedTitle} property="og:title" />
                <meta content={description} property="og:description" />
                <meta content={canonical} property="og:url" />
                <meta content="t28Kl2fGmZjIEgh6q3mGsf-7gGb8115VMQm1qbMMIKc" name="google-site-verification" />
                {featuredImage && (
                    <>
                        <meta content={featuredImage} property="og:image" />
                        <meta content={description} property="og:image:alt" />
                    </>
                )}
                {date && (
                    <>
                        <meta content="article" property="og:type" />
                        <meta content={dateTime(date)} property="article:published_time" />
                    </>
                )}
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="@leeerob" name="twitter:site" />
                <meta content="@leeerob" name="twitter:creator" />
            </Head>
            <GlobalStyle />
            {children}
        </>
    );
};

export default withRouter(Page);
