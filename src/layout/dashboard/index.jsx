import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import styled from "@emotion/styled"
import { Row, Col } from "antd"

import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
import { refreshToken } from "../../utils/token.js"

export default function Dashboard() {
  useEffect(() => {
    // refreshToken()
  }, [])

  return (
    <>
      <Header></Header>
      <Row>
        <Col>
          <Sidebar></Sidebar>
        </Col>
        <Col style={{ padding: "0 16px", flex: 1 }}>
          <Outlet />
        </Col>
      </Row>
    </>
  )
}
