import React from "react";
import { CenterFlex } from "../components/shared/Containers/CenterFlex";
import { Message } from "../components/shared/Messages";
import { BigButton } from "../components/shared/Buttons";
import { useHistory } from "react-router-dom";

const Error404 = () => {
  const history = useHistory();
  return (
    <div style={{ height: "100vh" }}>
      <CenterFlex>
        <Message title="No Page Found" message="Error 404" />
        <BigButton
          title="Return to Home page"
          onClick={() => history.push("/flights")}
        />
      </CenterFlex>
    </div>
  );
};

export default Error404;
