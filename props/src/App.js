import { useState, useEffect } from "react";
import MembershipList from "./components/MembershipList";
import MembershipForm from "./components/MembershipForm";
function App() {
  const [memberships, setMemberships] = useState([
    {
      membershipCode: "SLVR",
      title: "Silver",
      description: "Customer Accumulating $100 spent enjoy 2% discount",
    },
    {
      membershipCode: "GLD",
      title: "Gold",
      description: "Customer Accumulating $500 spent enjoy 5% discount",
    },
    {
      membershipCode: "PLTNM",
      title: "Platinum",
      description: "Customer Accumulating $1000 spent enjoy 10% discount",
    },
  ]);

  const [appState, setAppState] = useState("ListMembership");
  const [selectedMembership, setSelectedMembership] = useState();

  //useEffects
  useEffect(() => {
    console.log("useEffect - Page Load");
  }, []);

  useEffect(() => {
    console.log("useEffect - Page Render");
  });

  useEffect(() => {
    console.log("useEffect - State Update Membership");
  }, [memberships]);

  useEffect(() => {
    console.log("useEffect - State Update appState");
  }, [appState]);

  const submitMembershipHandler = (Membership) => {
    appState === "AddMembership"
      ? addMembershipHandler(Membership)
      : editMembershipHandler(Membership);

    setMemberships((prevMemberships) =>
      prevMemberships.sort((a, b) => {
        let x = a.membershipCode.toLowerCase();
        let y = b.membershipCode.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      })
    ); // https://www.w3schools.com/js/js_array_sort.asp
    setAppState("ListMembership");
  };

  const addMembershipHandler = (newMembership) => {
    setMemberships((prevMemberships) => {
      return prevMemberships.concat(newMembership);
    });
  };
  const editMembershipHandler = (Membership) => {
    setMemberships([
      ...memberships.filter(
        (membership) => membership.membershipCode !== Membership.membershipCode
      ),
      Membership,
    ]);
  };

  const editButtonHandler = (membershipCode) => {
    setAppState("UpdateMembership");
    const membership = memberships.find(
      (membership) => membership.membershipCode === membershipCode
    );
    setSelectedMembership(membership);
  };

  const membershipFormUnloadHandler = () => {
    setSelectedMembership(undefined);
  };

  let displayMembership;

  switch (appState) {
    case "AddMembership":
    case "UpdateMembership":
      displayMembership = (
        <MembershipForm
          membership={selectedMembership}
          onSubmitMembership={submitMembershipHandler}
          onCancel={() => setAppState("ListMembership")}
          onUnload={membershipFormUnloadHandler}
        />
      );
      break;
    default:
      displayMembership = (
        <>
          <button onClick={() => setAppState("AddMembership")}>
            Add Membership
          </button>
          <MembershipList
            memberships={memberships}
            onEdit={editButtonHandler}
          />
        </>
      );
  }

  return <div className="App">{displayMembership}</div>;
}

export default App;
