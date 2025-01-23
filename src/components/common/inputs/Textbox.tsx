import React, { forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { cn } from "@/utils/cn";

// Definimos los tipos de las props
interface TextboxProps {
  type: string; // Tipo de entrada (e.g., 'text', 'password')
  placeholder: string; // Texto de marcador de posición
  label?: string; // Etiqueta opcional para el campo
  className?: string; // Clases CSS opcionales para personalización
  register: any; // Registro de formulario (probablemente de react-hook-form o similar)
  name: string; // Nombre del campo de entrada
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

// Tipado para el ref de forwardRef
export const Textbox = forwardRef<HTMLInputElement, TextboxProps>(
  ({ type, placeholder, label, className, register, name, error }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label htmlFor={name} className="text-slate-800">
            {label}
          </label>
        )}

        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={cn(
              "bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300",
              className
            )}
          />
        </div>
        {error && (
          <span className="text-xs text-[#f64949fe] mt-0.5 ">
            {error as string}
          </span>
        )}
      </div>
    );
  }
);
