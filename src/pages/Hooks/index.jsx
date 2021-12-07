import React, { useState, useEffect } from "react"
import { Space, Button, Divider } from "antd"

export default function Hooks() {
  const [test, setTest] = useState(1)

  useEffect(() => {
    setTest(10)
  }, [])
  return (
    <>
      <h6>本页面是：hooks语法的demo页面</h6>
      <h6>技术使用：react hooks</h6>
      <Divider></Divider>
      <Space size={16}>
        <Button onClick={() => setTest((val) => val - 1)}>- 1</Button>
        <Button>{test}</Button>
        <Button onClick={() => setTest((val) => val + 1)}>+ 1</Button>
      </Space>
    </>
  )
}
