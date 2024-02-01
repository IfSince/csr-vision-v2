export const RowHover = ({ className = '', children, Tag = 'div', disableOnMobile = false, onClick = void 0 }) =>
  <Tag className={ `relative transition-colors group/row-hover duration-[400ms]
                          ${ disableOnMobile ? 'lg:hover:text-primary' : 'hover:text-primary' } ${ className }` }
       onClick={ onClick }>
    <div className={ `${ disableOnMobile ? 'hidden lg:block' : '' } absolute top-0 left-0 h-full w-full duration-[400ms] bg-secondary
                      [clip-path:inset(50%_0_50%)] transition-[clip-path] group-hover/row-hover:[clip-path:inset(0_0_0)]` }/>

    <div className="relative">
      { children }
    </div>
  </Tag>