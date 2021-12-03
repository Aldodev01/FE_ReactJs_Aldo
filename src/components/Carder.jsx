import React from "react";
import { Badge, Card } from "antd";

const Carder = ({ title, body, index }) => {
  return (
    <Badge.Ribbon text={"No. " + index} color="magenta">
      <Card
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: 20,
          height: "100%",
          minHeight: 400,
        }}
        title={title}
        bordered={false}
        style={{ width: 300 }}
      >
        <p>{body}</p>
      </Card>
    </Badge.Ribbon>
  );
};

export default Carder;
