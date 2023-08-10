import Logo from "../Logo"

const Loading = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Logo animation='loading' />
    </div>
  )
}

export default Loading