
export function TextBold({
  children,
}: {
  children: React.ReactNode
}){
  return(
    <strong className='font-bold text-cyan-300'>{children}</strong>
  )
}