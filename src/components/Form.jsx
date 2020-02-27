import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    margin: '0 auto',
  },
  label: {
    padding: '10px 0 2px 15px',
  },
  input: {
    border: '1px solid black',
    height: '20px',
  },
  button: {
    width: '120px',
    margin: '10px auto',
    border: '1px solid black',
    borderRadius: '5px',
  },
});

const Form = props => {
  const classes = useStyles();
  const { updateTeamList } = props;
  const [member, setMember] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChanges = event => {
    setMember({
      ...member,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = event => {
    event.preventDefault();
    updateTeamList(member);
    setMember({name: '', email: '', role: ''});
  };

  return (
    <form className={classes.root} onSubmit={submitForm}>
      <label className={classes.label} htmlFor="name">Name</label>
      <input className={classes.input} id="name" type="text" name="name" onChange={handleChanges} value={member.name} />
      <label className={classes.label} htmlFor="email">Email</label>
      <input className={classes.input} id="email" type="email" name="email" onChange={handleChanges} value={member.email} />
      <label className={classes.label} htmlFor="role">Role</label>
      <input className={classes.input} id="role" type="text" name="role" onChange={handleChanges} value={member.role} />
      <button className={classes.button} type="submit">Add Team Member</button>
    </form>
  );
};

export default Form;
