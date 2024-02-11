const getThemeStringFn = `!function(){let e=(()=>{let e=window.localStorage.getItem("theme");if("string"==typeof e)return e;let t=window.matchMedia("(prefers-color-scheme: dark)"),a="boolean"==typeof t.matches;return a&&t.matches?"dark":"light"})(),t=document.documentElement;t.classList.add(e)}();`

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <link rel="preload" href="/fonts/overpass/Overpass-Regular.woff2" as="font" crossOrigin="anonymous" type="font/woff2" key="Overpass Regular"/>,
    <link rel="preload" href="/fonts/overpass/Overpass-Medium.woff2" as="font" crossOrigin="anonymous" type="font/woff2" key="Overpass Medium"/>,
    <link rel="preload" href="/fonts/undotted/Undotted.woff2" as="font" crossOrigin="anonymous" type="font/woff2" key="Undotted Regular"/>,

    <link as="script" rel="preload" href="/scripts/preloader.js"/>
  ])

  setPreBodyComponents([
    <script key="theme" dangerouslySetInnerHTML={ { __html: getThemeStringFn } }/>,
  ])
}

export { wrapPageElement } from './gatsby-shared.js'
export { wrapRootElement } from './gatsby-shared.js'