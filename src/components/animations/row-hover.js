export const RowHover = ({
  className = '',
  first = <></>,
  second = null,
  Tag = 'div',
  disableOnMobile = false,
  onClick = void 0,
}) =>
  <Tag className={ `grid group/row-hover ${ className }` } onClick={ onClick }>
    <div className={ `${ disableOnMobile ? 'hidden lg:block' : '' } z-20 w-full bg-secondary text-primary col-start-1 row-start-1
                      [clip-path:inset(50%_0_50%)] transition-[clip-path] group-hover/row-hover:[clip-path:inset(0_0_0)] duration-500` }>
      { second ? second : first }
    </div>

    <div className="col-start-1 row-start-1">
      { first }
    </div>
  </Tag>