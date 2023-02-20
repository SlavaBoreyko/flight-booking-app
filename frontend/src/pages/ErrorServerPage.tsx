import React from "react";
import { CenterFlex } from "../components/shared/Containers/CenterFlex";
import { Message } from "../components/shared/Messages";
import { BigButton } from "../components/shared/Buttons";

const ErrorServerPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <CenterFlex>
        <Message title="Error server" message="Please refresh a page." />
        <BigButton
          title="Refresh a page"
          onClick={() => window.location.reload()}
        />
      </CenterFlex>
    </div>
  );
};

export default ErrorServerPage;
