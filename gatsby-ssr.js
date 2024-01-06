export const onRenderBody = ({setHeadComponents}) => {
  setHeadComponents([
    <link rel="preload" href="/fonts/overpass/Overpass-VariableFont_wght.ttf" as="font" crossOrigin="anonymous" type="font/ttf" key="Overpass VariableFont"/>,
    <link rel="preload" href="/fonts/undotted/Undotted-Regular.woff2" as="font" crossOrigin="anonymous" type="font/woff2" key="Undotted Regular"/>,
    <link rel="preload" href="/fonts/undotted/Undotted-Bold.woff2" as="font" crossOrigin="anonymous" type="font/woff2" key="Undotted Bold"/>,
    <link rel="preload" href="/fonts/undotted/Undotted-Black.woff2" as="font" crossOrigin="anonymous" type="font/woff2" key="Undotted Black"/>,
  ])
}