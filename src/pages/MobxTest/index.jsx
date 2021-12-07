import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { Button, Row, Col, Input, Divider } from "antd"

import store from "../../store"
const { user } = store

export default function MobxTest() {
  let UserName = observer(() => <span>{user.name}</span>)

  return (
    <div>
      <h6>本页面是：利用修改用户名称功能测试mobx是都生效</h6>
      <h6>技术使用：mobx6</h6>
      <Divider></Divider>
      <p>
        用户名： <UserName></UserName>
      </p>
      <p>修改用户名（失焦生效）：</p>
      <Row>
        <Col>
          <Input
            placeholder="请输入新的用户名"
            onBlur={({ target }) => user.setUserName(target.value)}
          ></Input>
        </Col>
      </Row>
    </div>
  )
}
