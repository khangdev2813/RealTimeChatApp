import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth, db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { addDocument } from "../../firebase/service";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
  const nav = useNavigate();

  const handleFbLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    console.log(additionalUserInfo);
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.displayName,
        providerID: additionalUserInfo.providerId,
      });
    }
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Row justify={"center"} style={{ height: 800, textAlign: "center" }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun Chat
          </Title>
          <Button style={{ with: "100%", marginBottom: 5 }}>
            Dang Nhap bang Google
          </Button>
          <Button onClick={handleFbLogin} style={{ with: "100%" }}>
            Dang Nhap bang Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
