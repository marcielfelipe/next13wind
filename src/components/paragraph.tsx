
export function Paragraph({
  children,
}: {
  children: React.ReactNode
}){
  return(
    <p className='text-white font-light text-2xl'>
    {children}
  </p>
  )
}