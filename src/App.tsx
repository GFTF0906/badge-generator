import { Badge } from './components/Badge';
import { FormNewGenerateBadge } from './components/Form';
import { Titles } from './components/Titles';

export const App = () => {
  return (
    <main className="sm:flex sm:items-center sm:justify-center sm:flex-col sm:gap-4 sm:mt-40">
      <Titles />

      <section className="flex flex-col sm:grid sm:grid-cols-2 sm:place-content-center sm:items-center sm:gap-8">
        <Badge />
        <FormNewGenerateBadge />
      </section>
    </main>
  );
};
