const getThemeStringFn = `!function(){let e=(()=>{let e=window.localStorage.getItem("theme");if("string"==typeof e)return e;let t=window.matchMedia("(prefers-color-scheme: dark)"),a="boolean"==typeof t.matches;return a&&t.matches?"dark":"light"})(),t=document.documentElement;t.classList.add(e)}();`

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <link rel="preload" href="/fonts/overpass/Overpass-VariableFont_wght.ttf" as="font" crossOrigin="anonymous" type="font/ttf" key="Overpass VariableFont"/>,
    <link rel="preload" href="/fonts/undotted/Undotted-Regular.woff2" as="font" crossOrigin="anonymous" type="font/woff2" key="Undotted Regular"/>,
    <link rel="preload" href="/fonts/undotted/Undotted-Bold.woff2" as="font" crossOrigin="anonymous" type="font/woff2" key="Undotted Bold"/>,
    <link rel="preload" href="/fonts/undotted/Undotted-Black.woff2" as="font" crossOrigin="anonymous" type="font/woff2" key="Undotted Black"/>,
  ])

  setPreBodyComponents([
    <script key="theme" dangerouslySetInnerHTML={ { __html: getThemeStringFn } }/>,
  ])
}

export { wrapPageElement } from './gatsby-shared.js'
export { wrapRootElement } from './gatsby-shared.js'