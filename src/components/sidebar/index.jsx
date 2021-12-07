import React, { useEffect, useState } from "react"
import { matchRoutes, useLocation, useNavigate } from "react-router-dom"
import { Menu } from "antd"
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons"

import router from "../../router"
const { SubMenu } = Menu

export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const [isInit, setIsInit] = useState(false)
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([])
  const [defaultOpenKeys, setDefaultOpenKeys] = useState([])

  //   高亮
  useEffect(() => {
    const routes = matchRoutes(router, location.pathname)
    let pathArr = []

    if (routes !== null) {
      for (let r of routes) {
        let path = r.route.path
        if (path) {
          pathArr = [path]
        }
      }
    }
    // console.log("🚀 ~ file: index.jsx ~ line 25 ~ useEffect ~ pathArr", pathArr)
    setDefaultSelectedKeys(pathArr)
    setIsInit(true)
  }, [location.pathname])

  const handleClick = (e) => {
    console.log("click ", e)
  }
  return (
    <>
      {isInit && (
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={defaultSelectedKeys}
          defaultOpenKeys={defaultOpenKeys}
          mode="inline"
          style={{ minHeight: "calc(100vh - 110px)" }}
        >
          <Menu.Item
            key="/"
            icon={<SettingOutlined />}
            onClick={() => navigate("/")}
          >
            useAntdTable
          </Menu.Item>
          <Menu.Item
            key="/hooks"
            icon={<AppstoreOutlined />}
            onClick={() => navigate("/hooks")}
          >
            Hooks
          </Menu.Item>
          <Menu.Item
            key="/print"
            icon={<MailOutlined />}
            onClick={() => navigate("/print")}
          >
            打印
          </Menu.Item>
          <Menu.Item
            key="/previwer"
            icon={<SettingOutlined />}
            onClick={() => navigate("/previwer")}
          >
            预览图片
          </Menu.Item>
          <Menu.Item
            key="/drag"
            icon={<AppstoreOutlined />}
            onClick={() => navigate("/drag")}
          >
            拖拽
          </Menu.Item>
          <Menu.Item
            key="/charts"
            icon={<MailOutlined />}
            onClick={() => navigate("/charts")}
          >
            图表
          </Menu.Item>
          <Menu.Item
            key="/mobx"
            icon={<MailOutlined />}
            onClick={() => navigate("/mobx")}
          >
            mobx 6
          </Menu.Item>

          {/* <SubMenu
            key="/previwer"
            icon={<SettingOutlined />}
            title="Navigation Three"
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu> */}
        </Menu>
      )}
    </>
  )
}
