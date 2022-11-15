import { PlusIcon } from "@heroicons/react/24/outline"




export default function PlusButton() {
  return (
    <>
    <div className="button-plus xl:max-w-sm xl:left-1/2 xl:translate-x-28 xl:right-0">
        <button className="w-16 h-16 rounded-full bg-primaryBlue flex justify-center items-center"> 
            <PlusIcon className="text-white h-12 w-12" />
        </button>
    </div>
    </>
  )
}