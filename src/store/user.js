import { autorun, makeAutoObservable, when } from "mobx"

const user = makeAutoObservable({
  name: "",
  setUserName(name: String) {
    this.name = name
    window.sessionStorage.setItem("name", name)
  },
})

// 这样子写就只有运行的第一次执行 更改不会执行
when(
  () => user.name == "",
  () => {
    let name = window.sessionStorage.getItem("name")
    user.setUserName(name)
  }
)

export default user
