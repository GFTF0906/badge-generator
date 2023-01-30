import { MainTitle } from '../Headings/MainTitle';
import { SubTitle } from '../Headings/SubTitle';

export const Titles = () => {
  return (
    <section className="flex justify-center items-center flex-col mb-16">
      <MainTitle text="Badge generator!" />
      <SubTitle text="With few clicks you can generate a fully customizable badge!" />
    </section>
  );
};
