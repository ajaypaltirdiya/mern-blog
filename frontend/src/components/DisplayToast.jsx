import { Toast } from "flowbite-react"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"


const DisplayToast = () => {
  return (
    <Toast className='fixed top-20 right-4 z-10'>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <IoMdCheckmarkCircleOutline className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Logged In successfully.</div>
        <Toast.Toggle />
      </Toast>
  )
}

export default DisplayToast