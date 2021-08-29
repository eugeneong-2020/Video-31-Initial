import { Fragment } from "react";
import MembershipItemB from "./MembershipItemB";

const MembershipList = (props) => {
  const editHandler = (event, membershipCode) => {
    event.preventDefault();
    props.onEdit(membershipCode);
  };

  if (props.memberships.length === 0) {
    return <h2>No Membership Tier Available</h2>;
  }
  return (
    <>
      <h2>Membership Tiers</h2>
      {props.memberships.map((membership) => (
        <Fragment key={membership.membershipCode}>
          <MembershipItemB membership={membership} />
          <button onClick={(e) => editHandler(e, membership.membershipCode)}>
            Edit
          </button>
        </Fragment>
      ))}
    </>
  );
};

export default MembershipList;
