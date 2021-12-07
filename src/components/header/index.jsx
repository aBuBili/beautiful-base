import React from "react"
import { Row, Col, Avatar, Image, Dropdown, Menu } from "antd"
import { Link, useNavigate } from "react-router-dom"
import styled from "@emotion/styled"
import { UserOutlined, PoweroffOutlined } from "@ant-design/icons"

import store from "../../store"
import { observer } from "mobx-react-lite"

export default function Header() {
  const navigate = useNavigate()
  const menu = (
    <Menu>
      <Menu.Item onClick={() => navigate("/personal")}>个人中心</Menu.Item>
      <Menu.Item onClick={() => navigate("/login")}>退出登录</Menu.Item>
    </Menu>
  )

  let UserName = observer(() => <span className="name">{store.user.name}</span>)

  return (
    <HeaderStyle>
      <Row className="container" align="middle" justify="space-between">
        <Col>
          <Link to="/">
            <img
              className="logo"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            ></img>
            <span className="title">Beaytiful Base</span>
          </Link>
        </Col>
        <Col>
          <Dropdown overlay={menu} placement="bottomLeft">
            <div>
              <UserName></UserName>
              <Avatar
                style={{ backgroundColor: "#1890ff", cursor: "pointer" }}
                icon={<UserOutlined />}
              />
            </div>
          </Dropdown>
        </Col>
      </Row>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  .container {
    height: 64px;
    padding: 0 24px;
    box-shadow: rgb(240, 241, 242) 0px 2px 8px;
    margin-bottom: 24px;
  }

  .logo {
    width: 32px;
    margin-right: 8px;
    margin-top: -6px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .name {
    font-size: 14px;
    color: #333;
    padding-right: 8px;
    cursor: pointer;
  }
`
