import { SubTitle } from '../Headings/SubTitle';
import { Title } from '../Headings/Title';

export const Titles = () => {
  return (
    <section className="mb-8 flex flex-col items-center justify-center">
      <Title text="Badge generator!" />
      <SubTitle
        text="With few clicks you can generate a fully customizable badge!"
        className="text-lg"
      />
    </section>
  );
};
