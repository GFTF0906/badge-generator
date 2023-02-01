import { useBadgeActionsStore } from "../../../store/useBadgeActionsStore";

export const SelectOption = () => {
  const selectedOption = useBadgeActionsStore((state) => state.selectedOption);
  const setSelectedOption = useBadgeActionsStore((state) => state.setSelectedOption);

  return (
    <select
      id="selectUrlType"
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
      className="absolute left-2 top-2 flex items-center gap-2 bg-[#520a8d] text-[#F5F5F5]"
    >
      <option value="url">Normal URL</option>
      <option value="html">HTML</option>
      <option value="markdown">MARKDOWN</option>
    </select>
  );
};
