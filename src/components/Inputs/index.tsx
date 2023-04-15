import { InputFileContainer, StyledInputs } from "./style";
import { IoIosArrowDown } from "react-icons/io";
import { Children, FormEvent, useState } from "react";
import { DownloadSimple, UploadSimple } from "phosphor-react";
import Image from "next/image";

type InputProps = {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: any;
  onBlur?: any;
  className?: string;
  required?: boolean;
  maxLength?: number;
  max?: number;
  children?: string;
  onInput?: (e: FormEvent<HTMLInputElement>) => void;

};

type SelectProps = {
  name?: string;
  value?: string | number;
  onChange?: any;
  className?: string;
  children: any;
  required?: boolean;
};

type InputFileProps = {
  childrenTitle?: string;
  childrenSubtitle?: string;
  className?: string;
  children?: any;
  value?: any;
  onChange?: any;
  name?: any;
  id?: any;
};

export function Input({
  type,
  placeholder,
  className,
  onChange,
  onBlur,
  children,
  required,
  maxLength,
  max,
  onInput,
  ...othersProps
}: InputProps) {
  return (
    <StyledInputs className={className}>
      <input
        type={type}
        max={max}
        placeholder={placeholder}
        onInput={onInput}
        onBlur={onBlur}
        onChange={onChange}
        {...othersProps}
        required={required}
        maxLength={maxLength}
      />
    </StyledInputs>
  );
}

export function Select({
  children,
  required,
  value,
  onChange,
  className,
  option,
  label,
  optionObject,
  optionString = false,
}: any) {
  const [options, setOpetions] = useState<boolean>(false);

  return (
    <StyledInputs className={className} options={options}>
      <div>
        {optionString ? (
          <p onClick={() => setOpetions(!options)}>{value !== "" ? value : label}<IoIosArrowDown />
          </p>
        ) : (
          <p  onClick={() => setOpetions(!options)}>
          <IoIosArrowDown />
          <Image src={value.image} width={20} height={15} layout='fixed' />
          {value.dial_code !== "" ? value.dial_code : label}
          </p>
        )}
        <div className="options">
          <span className="option" onClick={() => onChange("")}>
            {label}
          </span>
          {optionString
            ? optionString.map((op: string, index: number) => (
                <span
                  key={index}
                  className="option"
                  onClick={() => {
                    onChange(op) 
                    setOpetions(false)
                  }}
                >
                  {op}
                </span>
              ))
            : optionObject?.map((op: any, index: number) => (
                <span
                  key={index}
                  className="option"
                  onClick={() => onChange(op)}
                >
                  <Image src={op.image} alt={op.name} width={20} height={15} />
                 {op.dial_code} 
                </span>
              ))}
        </div>
      </div>
    </StyledInputs>
  );
}

export function InputFile({
  className,
  onChange,
  name,
  children,
  id,
}: InputFileProps) {
  return (
    <InputFileContainer>
      <input
        type="file"
        id={id}
        onChange={onChange}
        name={name}
      />
      <label className={className} htmlFor={id}>
        {children}
        <UploadSimple weight="bold" size={32} />
      </label>
    </InputFileContainer>
  );
}

