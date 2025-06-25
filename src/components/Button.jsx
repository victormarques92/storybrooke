import clsx from 'clsx';

export const Button = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'bg-primary hover:bg-primary-dark cursor-pointer rounded-4xl px-6 py-2 font-medium text-white transition-colors duration-200 ease-in-out focus:outline-none',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
