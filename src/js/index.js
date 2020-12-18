import { Menu } from "./menu"
import { Popup } from "./popup"
import { NewItemForm } from "./form"

const initNewItem = () => {
  Popup("new_item")
  NewItemForm("new_item")
}

Menu()
initNewItem()
