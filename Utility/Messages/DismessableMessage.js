import { Alert } from "react-bootstrap";
import React, { useState } from "react";
function DismessableMessage(props) {
  let variantType =
    props.Type == 0 ? "danger" : props.Type == 1 ? "success" : "warning";

  let HeaderText =
    props.Type == 0
      ? "Oh snap! you got an error!"
      : props.Type == 1
      ? "Hurray! It is done."
      : "You got warning";
  if (props.Type != 0)
    setTimeout(() => props.OnHide({ Content: "", Type: 0 }), 6000);
  return props.Type !== -1 ? (
    <Alert
      variant={variantType}
      onClose={() => props.OnHide({ Content: "", Type: 0 })}
      dismissible
    >
      <Alert.Heading>{HeaderText}</Alert.Heading>
      <p>{props.Message}</p>
    </Alert>
  ) : (
    <> </>
  );
}
export default DismessableMessage;
