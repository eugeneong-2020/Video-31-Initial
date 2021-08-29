import { Fragment } from "react";
import Membership from "../models/membership";
import MembershipItemB from "./MembershipItemB";

const MembershipList: React.FC<{
  memberships: Membership[];
}> = (props) => {
  const editHandler = (event: React.FormEvent, membershipCode: string) => {
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
          <MembershipItemB
            key={membership.membershipCode}
            membership={membership}
          />
          <button onClick={(e) => editHandler(e, membership.membershipCode)}>
            Edit
          </button>
        </Fragment>
      ))}
    </>
  );
};

export default MembershipList;
