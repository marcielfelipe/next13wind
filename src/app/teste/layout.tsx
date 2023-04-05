import { Paragraph } from '@/components/paragraph'

export const metadata = {
  title: 'Next 13 + tailwindcss',
  description: 'Project Next 13 with tailwindcss',
}

export default function TesteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className='min-h-screen bg-sky-950'
      >
        {children}
      </body>
    </html>
  )
}
