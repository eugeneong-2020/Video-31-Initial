import Membership from "../models/membership";

const MembershipItemB: React.FC<{ membership: Membership }> = ({
  membership,
}) => {
  return (
    <>
      <h3>{membership.title}</h3>
      <p>{membership.description}</p>
    </>
  );
};
export default MembershipItemB;
