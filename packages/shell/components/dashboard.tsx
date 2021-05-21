/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

export default function Dashboard({ projects }) {
  return (
    <div
      sx={{
        display: 'grid',
        flex: 1,
        gridGap: 2,
        gridTemplateColumns: '1fr 1.618fr',
        gridTemplateRows: 'auto',
      }}
    >
      <section
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ul>
          {Array.isArray(projects) &&
            projects.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </section>
      <section sx={{ alignItems: 'center', display: 'flex' }}></section>
    </div>
  );
}
