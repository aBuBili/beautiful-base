import useRequest from "@ahooksjs/use-request"
import React, { useRef, useCallback } from "react"
import http from "../../utils/http"

export function useAntdTable(toPoint, options) {
  // 获取data
  const getTableData = async ({ current = 1, pageSize = 10 }, formData) => {
    const params = {
      pageNum: current,
      pageSize: pageSize,
      sex: 2, //采集特殊要求
      cardType: 0, //采集特殊要求
      ...formData,
    }
    const res = await http.post(toPoint, params)
    return {
      total: res.data.total,
      list: res.data.list,
    }
  }

  // useRequest
  const result = useRequest(getTableData, {
    paginated: true,
    ...options,
  })

  return {
    ...result, //data、error、loading、paginated
  }
}
