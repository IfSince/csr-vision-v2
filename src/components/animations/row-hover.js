export const RowHover = ({ className = '', children, Tag = 'div' }) =>
  <Tag className={ `relative transition-colors group/row-hover duration-[400ms] hover:text-primary ${ className }` }>
    { children }
    <div
      className="absolute top-0 left-0 h-full w-full duration-[400ms] bg-secondary [clip-path:inset(50%_0_50%)] transition-[clip-path] group-hover/row-hover:[clip-path:inset(0_0_0)]"/>
  </Tag>