export const Button = ({ children, className, onClick }) => {
  let classes = 'px-3 py-2 rounded-md ' + className
  return (
    <button className={classes} onClick={onClick || 'submit'}>
      {children}
    </button>
  )
}
