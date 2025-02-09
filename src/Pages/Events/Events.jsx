import { Management } from "./mgt/Management"
import { NonManagement } from "./nmgt/NonManagement"

export const Events = () => {
  return (
    <div id="events" className="w-full h-[160vh] bg-transparent flex flex-col items-center justify-center scroll-mt-[10vh] relative">
      <Management/>
      <NonManagement/>
    </div>
  )
}