import { useRef, useEffect } from "react";

const MembershipForm = (props) => {
  const membershipCodeInputRef = useRef("");
  const titleInputRef = useRef("");
  const descriptionInputRef = useRef("");

  useEffect(() => {
    console.log("useEffect - Form Load");
    return () => {
      console.log("useEffect - Form Unload");
    };
  }, []);

  useEffect(() => {
    if (props.membership !== undefined) {
      membershipCodeInputRef.current.value = props.membership.membershipCode;
      titleInputRef.current.value = props.membership.title;
      descriptionInputRef.current.value = props.membership.description;
    }
    return () => {
      props.onUnload();
    };
  });

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onCancel();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const Membership = {
      membershipCode: membershipCodeInputRef.current.value,
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
    };
    props.onSubmitMembership(Membership);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="membershipCode">Membership Code:</label>
        <br />
        <input
          type="text"
          id="membershipCode"
          ref={membershipCodeInputRef}
          disabled={props.membership !== undefined ? true : false}
        />
      </p>
      <p>
        <label htmlFor="title">Title:</label>
        <br />
        <input type="text" id="title" ref={titleInputRef} />
      </p>
      <p>
        <label htmlFor="description">Description:</label>
        <br />
        <textarea
          id="description"
          rows={4}
          cols={50}
          ref={descriptionInputRef}
        />
      </p>
      <button type="submit">Submit</button>
      <button onClick={cancelHandler}>Cancel</button>
    </form>
  );
};
export default MembershipForm;
