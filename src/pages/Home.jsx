import React, { useEffect, useState } from 'react'
import logo from '../assets/img1.png'
import gsap from 'gsap'
import p9 from '../assets/p9.png'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'
import p7 from '../assets/p7.jpg'
import p8 from '../assets/p8.jpg'
const Home = () => {
  const [showText, setText] = useState(false)
  const [showText1, setText1] = useState(false)
  const [showText2, setText2] = useState(false)
  const handleClick = () => {
    setText(!showText)
  }
  useEffect(() => {
    if (showText) {
      gsap.to(".text1",
        { opacity: 1, height: 'auto', duration: 1.5, ease: 'power2.out' }
      )
    }
    else {
      gsap.to('.text1',
        { opacity: 1, height: 0, duration: 1.5, ease: 'power1.in' }
      )
    }
  }, [showText])
  useEffect(() => {
    if (showText1) {
      gsap.to(".text1",
        { opacity: 1, height: 'auto', duration: 1.5, ease: 'power2.out' }
      )
    }
    else {
      gsap.to('.text1',
        { opacity: 1, height: 0, duration: 1.5, ease: 'power1.in' }
      )
    }
  }, [showText1])
  useEffect(() => {
    if (showText2) {
      gsap.to(".text1",
        { opacity: 1, height: 'auto', duration: 1.5, ease: 'power2.out' }
      )
    }
    else {
      gsap.to('.text1',
        { opacity: 1, height: 0, duration: 1.5, ease: 'power1.in' }
      )
    }
  }, [showText2])
  const handleClick1 = () => {
    setText1(!showText1)
  }
  const handleClick2 = () => {
    setText2(!showText2)
  }
  return (
    <div className='flex '>
      <div className='w-[30%] fixed h-[100vh]  bg-green-50 font-semibold   xl:block hidden border-r-gray-400 border-r'>
        <div className='h-full px-10 overflow-y-scroll'>
          <div className='border-b   border-gray-300'>
            <img className='h-32 ' src={logo} alt="" />
          </div>
          <div className='border-b py-3 border-gray-300'>
            <p >INTRODUCTION</p>

          </div>
          <div className='border-b py-3 border-gray-300'>
            <div className='flex justify-between  ' onClick={handleClick}><p>GETTING STARTED</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            </div>
            {showText && (<div className='text1 text-gray-600 opacity-0 h-0 overflow-hidden'><p>Requirements</p><p>What's Included</p></div>)}
          </div>
          <div className='border-b py-3 border-gray-300'>
            <p>REACT INSTALLATION</p>
          </div>
          <div className='border-b py-3 border-gray-300'>
            <div onClick={handleClick1} className='flex justify-between'>
              <p>SETTINGS</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            {showText1 && (<div className='text1 text-gray-600 opacity-0 h-0 overflow-hidden'>
              <p>Site URL</p>
              <p>Basename and Route</p>
              <p>Site Title and Favicon</p>
              <p>Logo</p>
              <p>Menu</p>
              <p>Footer</p>
              <p>Copyright</p>
              <p>Change Home Page</p>
              <p>Section Components</p>
              <p>Page Banner</p>
              <p>Social Networks</p>
              <p>Font Family Change</p>
              <p>Color Change</p>

            </div>)}

          </div>
          <div className='border-b py-3 border-gray-300'>
            <div onClick={handleClick2} className='flex justify-between'><p>CREDIT</p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg></div>
            {showText2 && (<div className='text1 text-gray-600 opacity-0 h-0 overflow-hidden'>
              <p>Credit (Fonts)</p>
              <p>Credit (CSS)</p>
              <p>Credit (Javascript)</p>
              <p>Credit (Images)</p>
            </div>)}
          </div>
          <div className='border-b py-3 border-gray-300'>
            <p>SUPPORT</p>
          </div>
          <div className='border-b py-3 border-gray-300'>
            <p>THANKS</p>
          </div>
        </div>
      </div>
      <div className='xl:w-[70%] absolute right-0 md:w-full'>
        <div className='bg-green-50 h-16 w-full pt-3 pl-14'>
          <h1 className='text-3xl font-bold'>Introduction</h1>
        </div>
        <div className='mx-14 text-lg mt-10'>
          <h1 className='text-4xl pb-5 border-b border-gray-400 font-bold mb-5'>Digital solution - coporate React.js Template.</h1>
          <p><strong>Created:</strong> March, 2025</p>
          <p><strong>By:</strong>TechBoot</p>
          <p><strong>E-mail: </strong><a className='text-purple-700' href="mailto:md.sirforce@gmail.com">md.sirforce@gmail.com</a></p>
          <br />
          <br />
          <p>Thank you for purchasing our template.</p>
          <p>If you have any questions that are beyond the scope of this help file,</p>
          <p>Please feel free to contact us with sending mail to <a className='text-purple-700' href="mailto:md.sirforce@gmail.com">md.sirforce@gmail.com</a></p>
        </div>
        <div className='bg-green-50 mt-14 h-16 text-3xl font-bold w-full pt-3 pl-14'>
          <h1>Requirements</h1>
        </div>
        <p className='text-lg mx-14 mt-10'>These are system requirements in order to install and setup the "digital solution" and it's components properly. Make sure that you are running the <strong>node.js install</strong> and <strong>npm install.</strong></p>
        <p className='text-lg mx-14 mb-10'>You can download Node.js from here <a className='text-red-500' href="https://nodejs.org/en">Node.js</a>. NPM come bundled with <strong>Node.js</strong> Or <a className='text-red-500' href="https://classic.yarnpkg.com/en/docs/install/#windows-stable">yarn</a> install</p>

        <h1 className='text-2xl font-bold mx-14 mt-10'>Recommended node and npm</h1>
        <div className='mx-14 text-lg mt-6 p-5 border-l-4 bg-purple-50  border-purple-600'>
          <p>node install</p>
          <p>npm install</p>
        </div>
        <h1 className='text-2xl font-bold mx-14 mt-10'>You can use npm or yarn to install Packages</h1>
        <p className='mx-14 text-lg mt-4'><strong>NPM:</strong> You must have to <strong>npm install</strong> packeges. You can do this by running npm install from the root of your project to install all the necessary dependencies.</p>
        <div className='mx-14 text-lg mt-6 p-5 border-l-4 bg-purple-50 border-purple-600'>
          <p>npm install Or yarn add</p>
        </div>
        <br />
        <br />
        <h1 className='text-2xl font-bold mx-14'>Development server</h1>
        <br />
        <p className='mx-14 text-lg'>Run npm run dev for a dev server. Navigate to http://localhost:5173/. The app will automatically reload if you change any of the source files</p>
        <div className='mx-14 text-lg mt-6 p-5 border-l-4 bg-purple-50 border-purple-600'>
          <p>npm run dev Or yarn dev</p>
        </div>
        <br />
        <br />
        <h1 className='text-2xl font-bold mx-14'>Build</h1>
        <p className='text-lg mx-14'>Run npm run build to build the project. The build artifacts will be stored in the build/ directory. Use the npm run build -- prod flag for a production build.</p>
        <div className='text-lg mx-14 mt-6 p-5 border-l-4 bg-purple-50 border-purple-600'>
          <p>npm run build or yarn build</p>
        </div>
        <div className='bg-green-50 h-16 mt-14 w-full pt-3 pl-14'>
          <p className='text-3xl font-bold'>What's Included</p>

        </div>
        <img className='px-14 mt-10' src={p9} alt="" />
        <div className='bg-green-50 h-16 mt-14 w-full pt-3 pl-14'>
          <p className='text-3xl font-bold'>How to start development server</p>

        </div>
        <p className='mt-7 mx-14'>Please follow the instructions of this video tutorial to see how you can install packages and run the project</p>
        <div className='mx-14 text-lg mt-6 pl-10 p-5 border-l-4 bg-purple-50 border-purple-600'>
          <p>For local host -</p>
          <p>1. Open your command terminal</p>
          <p>2. npm install or yarn add</p>
          <p>3. npm run dev or yarn dev</p>
        </div>
        <div className='bg-green-50 h-16 mt-14 w-full pt-3 pl-14'>
          <p className='text-3xl font-bold'>Change Site Title and Favicon</p>

        </div>
        <img className='px-14 mt-10' src={p1} alt="" />
        <img className='px-14 mt-5' src={p2} alt="" />
        <div className='bg-green-50 h-16 mt-14 w-full pt-3 pl-14'>
          <p className='text-3xl font-bold'>Change Title</p>

        </div>
        <p className='mx-14 mt-8 text-lg'>Open index.html file and replace text from title tag</p>
        <img className='px-14 mt-5' src={p3} alt="" />

        <div className='bg-green-50 h-16 mt-14 w-full pt-3 pl-14'>
          <p className='text-3xl font-bold'>Change Logo</p>

        </div>
        <img className='px-14 mt-5' src={p4} alt="" />
        <img className='px-14 mt-5' src={p5} alt="" />
        <p className='text-center text-red-500 my-5'>Then</p>
        <img className='px-14 mt-5' src={p6} alt="" />
        <div className='bg-green-50 h-16 mt-14 w-full pt-3 pl-14'>
          <p className='text-3xl font-bold'>Change Copyright Information</p>

        </div>
        <img className='px-14 mt-10' src={p7} alt="" />
        <div className='bg-green-50 h-16 mt-14 w-full pt-3 pl-14'>
          <p className='text-3xl font-bold'>Footer</p>

        </div>
        <img className='px-14 mt-10' src={p8} alt="" />

        <div className='bg-green-50 h-16 mt-14 w-full pt-3 pl-14'>
          <p className='text-3xl font-bold'>CSS Credit</p>

        </div>
        <div className='mx-18 text-lg mt-10'>
          <p><strong>Plugins Used for CSS:</strong></p>
          <p>Tailwind CSS: <span className='text-purple-600'>Tailwind CSS</span></p>
          <p>GSAP: <span className='text-purple-600'>GSAP Animation</span></p>
          <p>Swiper: <span className='text-purple-600'>Swiper CSS</span></p></div>
      
      <div className='bg-green-50 h-16 mt-14 w-full pt-3 pl-14'>
        <p className='text-3xl font-bold'>Images Credit</p>

      </div>
      <div className='mx-16 text-lg mt-8'>
        <p><strong>Images Used:</strong> All images we used in this template come from sources. They are very good sources for free images</p>
        <br />
        <p>Pinterest: <span className='text-purple-500'>Pinterest</span></p>
        <p>FreePik: <span className='text-purple-500'>Freepik</span></p>
        <p>Unsplash: <span className='text-purple-500'>Unsplash</span></p>
        <p>Pexels: <span className='text-purple-500'>Pexels</span></p>
      </div>
      <div className='bg-green-50 h-16 mt-14 w-full pt-3 pl-14'>
        <p className='text-3xl font-bold'>Support</p>

      </div>
      <div className='mx-14 mt-8 text-lg'>
        <p>Thank you for purchasing our template.</p>
        <p>If you have any questions that are beyond the scope of this help file,</p>
        <p>Please feel free to contact us with sending mail to <a className='text-purple-600' href="mailto:md.sirforce@gmail.com">md.sirforce@gmail.com</a></p>
        <button className=''>24/7 Support: Send Us message from our profile</button>
      </div> 
      <div className='bg-green-50 h-16 mt-14 w-full pt-3 pl-14'>
        <p className='text-3xl font-bold'>Thanks</p>

      </div>
      <div className='mx-16 mt-8 text-lg'>
        <p>Once again thank you for purchasing one of our Templates</p>
        <p>Best Regards</p>
        <p>md.sirforce</p>
        <br />
                      <p>Copyright <span>md.sirforce</span> made with the Documenter v1.0.0</p>

      </div>
      </div>
    </div>
  )
}

export default Home
