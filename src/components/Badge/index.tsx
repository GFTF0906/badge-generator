import { useState } from 'react';
import { useBadgeStore } from '../../store/useBadgeStore';
import { copyToClipboard } from '../../utils/copyToClipboard';
import { Button } from '../Button';
import { Copy } from '../svgs';

export const Badge = () => {
  const [selectedOption, setSelectedOption] = useState<string>('url');
  const badgeUrl = useBadgeStore((state) => state.badgeUrl);

  return (
    <section className="relative flex items-center justify-center min-h-full rounded border-2 w-full border-[#dbd5d54b] shadow-2xl shadow-[#b1a1be3a] bg-[#dbd5d52f]">
      <div className="flex items-center gap-4">
        <Button
          icon={<Copy />}
          onClickFunction={() =>
            copyToClipboard(
              selectedOption === 'url'
                ? badgeUrl
                : selectedOption === 'html'
                ? `<img src="${badgeUrl}" alt="Here your beautiful badge is being displayed"></img>`
                : selectedOption === 'markdown'
                ? `![Your beautiful badge](${badgeUrl})`
                : ''
            )
          }
          className="absolute right-2 top-2"
        />
        <img
          src={badgeUrl}
          alt="Here your beautiful badge is being displayed"
          className="w-60 shadow- xl shadow-[#0000008b]"
        />
      </div>
      <select
        id="selectUrlType"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="absolute left-2 top-2 flex items-center gap-2 text-[#F5F5F5] bg-[#520a8d]"
      >
        <option value="url">Normal URL</option>
        <option value="html">HTML</option>
        <option value="markdown">MARKDOWN</option>
      </select>
    </section>
  );
};
