import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Tooltip, Button, Form, Input } from "antd";
import styled from "styled-components";
import Message from "./Message";
const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height; 56px;
  padding 0 16px;
  align-items:center;
  border-bottom: 1px solid rgb(230,230,230);

  .header {
    &__info {
      display:flex;
      flex_direction: column;
      justify-content: center;
    }

    &__title {
      margin : 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items:: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230 ,230)
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MesssageListStyled = styled.div``;

function ChatWindow() {
  return (
    <div>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">Room 1</p>
          <span className="header__description">Day la Room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type="text">
            Mời
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>a</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>a</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>a</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>a</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MesssageListStyled>
          <Message
            text="Test"
            photoURL={null}
            displayName="Tung"
            createAt={123123123123}
          />
          <Message
            text="Test"
            photoURL={null}
            displayName="Tung"
            createAt={123123123123}
          />
          <Message
            text="Test"
            photoURL={null}
            displayName="Tung"
            createAt={123123123123}
          />

          <Message
            text="Test"
            photoURL={null}
            displayName="Tung"
            createAt={123123123123}
          />
        </MesssageListStyled>

        <FormStyled>
          <Form.Item>
            <Input
              bordered={false}
              autoComplete="off"
              placeholder="Nhập tin nhắn"
            />
          </Form.Item>
          <Button type="primary">Gửi</Button>
        </FormStyled>
      </ContentStyled>
    </div>
  );
}

export default ChatWindow;
