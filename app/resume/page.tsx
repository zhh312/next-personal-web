import React from 'react'

const Page = () => {
  return (
    <main className='w-screen h-screen relative z-[45]'>

        <div className='pdf-container z-[45] w-full h-full'>
        <embed
            src={'/CV-Honghao Zheng.pdf'}
            type='application/pdf'
            width='100%'
            height='100%'
        />
        </div>
        
      
    </main>
  );
}

export default Page
