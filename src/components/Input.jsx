import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { IconButton } from './IconButton';

export const Input = ({ name, placeholder, type = 'text', ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        {...register(name)}
        {...props}
        type={showPassword ? 'text' : type}
        className="w-full rounded-4xl bg-gray-100 px-4 py-3 placeholder:text-gray-400 focus:outline-none"
        placeholder={placeholder}
      />

      {type === 'password' && (
        <IconButton
          className="absolute top-1 right-2"
          onClick={() => setShowPassword(!showPassword)}
          icon={showPassword ? <FiEye /> : <FiEyeOff />}
        />
      )}

      {errors[name] && (
        <span className="mt-1 block px-4 text-xs text-red-600">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};
