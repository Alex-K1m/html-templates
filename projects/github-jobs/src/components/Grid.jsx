import { arrayOf, shape } from 'prop-types';
import { createUseStyles } from 'react-jss';

import Card from './Card';
import Container from './Container';

const useStyles = createUseStyles(({ breakpoints: { smUp, mdUp } }) => ({
  grid: {
    display: 'grid',
    gridGap: '2.4rem',

    [smUp]: {
      gridGap: '4rem 1.1rem',
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    [mdUp]: {
      gridColumnGap: '3rem',
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
}));

const Grid = ({ data }) => {
  const css = useStyles();

  return (
    <Container>
      <ul className={css.grid}>
        {data.map((positionData) => (
          <li key={positionData.id}>
            <Card position={positionData} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

Grid.propTypes = {
  data: arrayOf(shape({})).isRequired,
};

export default Grid;
