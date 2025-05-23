const MainContentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex justify-center p-3">
      <div className=" bg-red-500 w-10/12">
        {children}
      </div>
    </div>
  )
}

export default MainContentContainer
