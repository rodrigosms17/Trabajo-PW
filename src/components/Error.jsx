export function Error({ children, className, ...props } = {}) {
  if (!children) {
    return null;
  }

  return (
    <p className={`text-red-500 ${className}`} {...props}>
      {children.message}
    </p>
  );
}
