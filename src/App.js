import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TeamListContainer from './components/TeamListContainer.jsx';

const useStyles = makeStyles({
  root: {
    maxWidth: '900px',
    margin: '0 auto',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TeamListContainer />
    </div>
  );
}

export default App;
