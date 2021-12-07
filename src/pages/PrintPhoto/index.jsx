import React, { useRef } from "react"
import { Button, Divider } from "antd"
import { useReactToPrint } from "react-to-print"

export default function PrintImage() {
  // 打印组件ref
  const PrintRef = useRef()

  //   打印hook
  const handlePrint = useReactToPrint({
    content: () => PrintRef.current,
  })

  return (
    <>
      <h6>本页面是：打印功能测试 可以选择打印的区域</h6>
      <h6>技术使用：react-to-print库</h6>
      <h6>使用方法：将ref=PrintRef 挂到打印范围的最外层容器上</h6>
      <Divider></Divider>
      <Button type="primary" size="small" onClick={handlePrint}>
        打印
      </Button>
      {/* div控制在页面上不显示  */}
      {/* <div style={{ display: "none" }}> */}
      <div ref={PrintRef} style={{ border: "2px solid #000", marginTop: 24 }}>
        <p style={{ fontSize: 18 }}>需要打印的布局</p>
        <img
          src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
          style={{ width: 400 }}
          alt=""
        />
      </div>
      {/* </div> */}
    </>
  )
}
