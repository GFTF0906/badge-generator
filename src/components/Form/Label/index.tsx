export const Label = ({ htmlFor, text }: { htmlFor: string; text: string }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="font-medium text-lg"
    >
      {text}
    </label>
  );
};
