import React, { useEffect, useState } from "react"
import { Button, Table, Divider } from "antd"
import http from "../../utils/http"
import { useAntdTable } from "../../hooks/useAntdTable"
import QueryModule from "../../components/queryModule"

export default function AsyncTest() {
  const { tableProps, run } = useAntdTable("/home/infoList", {
    manual: true,
  })

  useEffect(() => {
    run({})
  }, [])

  const columns = [
    {
      title: "序号",
      render: (text, record, index) => {
        return <span>{index + 1}</span>
      },
    },
    {
      title: "姓名",
      dataIndex: "name",
    },
    {
      title: "性别",
      dataIndex: "sex",
      render: (sex) => {
        return <span>{sex == 1 ? "女" : "男"}</span>
      },
    },
    {
      title: "电话号码",
      dataIndex: "phone",
    },
    {
      title: "证件号 ",
      dataIndex: "card",
    },
    // {
    //   title: "类型",
    //   dataIndex: "cardType",
    // },
    {
      title: "证件",
      dataIndex: "paperwork",
      render: (paperwork) => {
        return <span>{paperwork ? "有" : "无"}</span>
      },
    },
    {
      title: "知情同意书",
      dataIndex: "isConsent",
      render: (isConsent) => {
        return <span>{isConsent ? "有" : "无"}</span>
      },
    },
    {
      title: "化验单",
      dataIndex: "isTestSheet",
      render: (isTestSheet) => {
        return <span>{isTestSheet ? "有" : "无"}</span>
      },
    },
    {
      title: "病历",
      dataIndex: "isCase",
      render: (isCase) => {
        return <span>{isCase ? "有" : "无"}</span>
      },
    },
  ]

  // 点击搜索
  const onSearch = async (values) => {
    const res = await run({}, { ...values })
  }

  return (
    <>
      <h6>
        本页面是：hooks组件 useAntdTable 和 查询筛选控件 queryModel
        的联合用法展示
      </h6>
      <h6>技术使用：ahooks的useRequest、antd的Form表单</h6>
      <Divider></Divider>
      <QueryModule onSearch={onSearch} />
      <Table columns={columns} rowKey="id" {...tableProps} />
    </>
  )
}
