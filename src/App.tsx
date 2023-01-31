import { Badge } from './components/Badge';
import { CommonBadgesBox } from './components/CommonBadgesBox';
import { FormNewGenerateBadge } from './components/Form';
import { Titles } from './components/Titles';

export const App = () => {
  return (
    <main className="sm:mt-40 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-4">
      <CommonBadgesBox />

      <Titles />

      <section className="flex flex-col sm:grid sm:grid-cols-2 sm:place-content-stretch sm:items-stretch sm:gap-8">
        <Badge />
        <FormNewGenerateBadge />
      </section>
    </main>
  );
};
