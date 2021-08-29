const MembershipItem: React.FC<{ name: string; description: string }> = ({
  name,
  description,
}) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
    </>
  );
};
export default MembershipItem;
