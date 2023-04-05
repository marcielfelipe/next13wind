import { Paragraph } from '@/components/paragraph';
import { TextBold } from '@/components/text-bold';

export default function Home() {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col gap-5'>
      <h1 className="text-9xl text-white font-bold">
        Hello world!
      </h1>
      
      <Paragraph>
        Base project created using <TextBold>Nextjs 13</TextBold>  and <TextBold>tailwindcss</TextBold>
      </Paragraph>
    </div>
  )
}