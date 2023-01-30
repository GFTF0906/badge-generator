export const Label = ({
  htmlFor,
  text,
  className,
}: {
  htmlFor: string;
  text: string;
  className?: string;
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`font-semibold text-lg ${className ?? ''}`}
    >
      {text}
    </label>
  );
};
