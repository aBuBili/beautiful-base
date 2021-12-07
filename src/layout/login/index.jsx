import React from "react"
import { Form, Button, Input, message } from "antd"
import style from "./login.module.scss"
import logon from "../../assets/image/pic.svg"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

import store from "../../store"
import http from "../../utils/http"
import { saveToken } from "../../utils/token"

export default function Login() {
  const navigate = useNavigate()

  const onFinish = async (values) => {
    const res = await http.post("/login", values)
    if (res.code == 200) {
      message.success(`欢迎，${res.data.username}回来！`)
      saveToken(res.data.token)
      store.user.setUserName(res.data.username)
      navigate("/")
    } else {
      message.error(res.message)
    }
  }

  return (
    <div className={style.login}>
      <div className={style.content}>
        <div className={style.bg}>
          <h1>相信自己，你能行！</h1>
          <img src={logon} alt="logon" />
        </div>
        <div className={style.fill}>
          <div className={style.logon}>
            <h2>登陆您的账号</h2>
          </div>
          <div className={style.from}>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "请输入账号" }]}
              >
                <Input
                  prefix={
                    <UserOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }} />
                  }
                  placeholder="请填写账号"
                  size="large"
                  allowClear
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
              >
                <Input
                  prefix={
                    <LockOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }} />
                  }
                  type="password"
                  placeholder="请填写密码"
                  size="large"
                  allowClear
                />
              </Form.Item>
              <Form.Item className={style.space}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={style.submit}
                  size="large"
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
