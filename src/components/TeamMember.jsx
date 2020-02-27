import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '10px auto',
    width: '250px',
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px 0 10px 30px',
    backgroundColor: '#ddd',
  },
  text: {
    margin: '0',
  },
});

const TeamMember = props => {
  const classes = useStyles();
  const { name, email, role } = props.teamMemberData;

  return (
    <div className={classes.root}>
      <h2 className={classes.text}>{name}</h2>
      <p className={classes.text}>Email: {email}</p>
      <p className={classes.text}>Role: {role}</p>
    </div>
  );
};

export default TeamMember;
