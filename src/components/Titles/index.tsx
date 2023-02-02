import { SubTitle } from '../Headings/SubTitle';
import { Title } from '../Headings/Title';

export const Titles = () => {
  return (
    <section className="mb-8 mt-10  flex flex-col items-center justify-center text-center sm:mt-0 sm:text-left">
      <Title
        text="Badge generator!"
        className="mb-4 sm:mb-0"
      />
      <SubTitle
        text="With few clicks you can generate a fully customizable badge!"
        className="text-lg"
      />
    </section>
  );
};
