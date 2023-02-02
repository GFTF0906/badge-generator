import { useBadgeActionsStore } from '../../../store/useBadgeActionsStore';

export const SelectOption = () => {
  const selectedOption = useBadgeActionsStore((state) => state.selectedOption);
  const setSelectedOption = useBadgeActionsStore(
    (state) => state.setSelectedOption
  );

  return (
    <select
      id="selectUrlType"
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
      className="flex w-full items-center gap-2 bg-[#520a8d] text-[#F5F5F5] sm:absolute sm:left-2 sm:top-2 sm:w-[40%]"
    >
      <option value="url">Normal URL</option>
      <option value="html">HTML</option>
      <option value="markdown">MARKDOWN</option>
    </select>
  );
};
