import "./separator.css"

export function Separator({ className = '', children, props }) {
  return <div className={`separator ${className}`} {...props}>{children}</div>
}
