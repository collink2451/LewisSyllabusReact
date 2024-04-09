import React from "react";
import { Container } from "react-bootstrap";
import { FallbackProps } from "react-error-boundary";

function ErrorPage({ error }: Readonly<FallbackProps>) {
  return (
    <Container fluid className="vw-100 vh-100 text-center p-5">
      Error
      {error.message}
    </Container>
  );
}

export default ErrorPage;
