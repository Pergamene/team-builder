import React, { Fragment } from 'react';

const TeamMember = props => {
  const { name, email, role } = props.teamMemberData;

  return (
    <Fragment>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </Fragment>
  );
};

export default TeamMember;
