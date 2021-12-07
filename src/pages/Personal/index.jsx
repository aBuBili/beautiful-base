import { observer } from "mobx-react-lite"
import React from "react"
import userStore from "../../store/user"

export default function Personal() {
  let UserName = observer(() => <span>{userStore.name}</span>)

  return (
    <div>
      <p>个人中心</p>
      <p>
        用户名称：<UserName></UserName>
      </p>
    </div>
  )
}
