import clsx from 'clsx';

export const IconButton = ({ icon, onClick, className = '', ...props }) => {
  return (
    <button
      type="button"
      className={clsx(
        'flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-200 p-2 text-gray-500 duration-200 ease-in-out hover:bg-gray-300',
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {icon}
    </button>
  );
};
