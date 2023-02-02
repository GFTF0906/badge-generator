export const Tooltip = ({
  tip,
  isHovered,
}: {
  tip: string;
  isHovered: boolean;
}) => {
  return isHovered ? (
    <div
      aria-label={tip}
      className="absolute -right-20 top-12 z-20 hidden w-60 rounded border-2 border-gray-500 bg-gray-700 p-6 font-bold text-[#F5F5F5] lg:block"
    >
      <h3>{tip}</h3>
    </div>
  ) : (
    <></>
  );
};
