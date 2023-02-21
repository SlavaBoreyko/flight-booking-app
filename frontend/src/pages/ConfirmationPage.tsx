import React from "react";
import { Message } from "@/components/shared/Messages";
import { BigButton } from "@/components/shared/Buttons";
import { CenterFlex } from "@/components/shared/Containers/CenterFlex";
import { useHistory } from "react-router-dom";

const ConfirmationPage = () => {
  const history = useHistory();
  return (
    <div style={{ height: "100vh" }}>
      <CenterFlex>
        <Message
          title="Booking is Confirmed"
          message="We will send your ticket to your email"
        />
        <BigButton
          title="Return to Flights"
          onClick={() => history.push("/flights")}
        />
      </CenterFlex>
    </div>
  );
};

export default ConfirmationPage;
