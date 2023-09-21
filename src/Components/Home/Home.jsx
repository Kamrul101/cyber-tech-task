import React from 'react';

const Home = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center ">
    {/* Page content here */}
    <div>
        <label htmlFor="my-drawer-2" className="btn btn-ghost text-white drawer-button lg:hidden fixed top-2 right-2">Sidebar<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
        <h1 className='text-center text-4xl md:text-5xl mt-12 font-semibold font-[roboto]'>Main Content</h1>
        <p className='text-black font-[roboto] px-12 text-xl md:text-2xl my-8 text-justify'>
        My country’s name is Bangladesh. Bangladesh is a very small country huge population. It is a medium-developed country in South Asia. We have a very good and progressing economy. It has an area of 147,570 square kilometers. But it has a population of 164 million. That is huge than the area. 

        </p>
        <p className='text-black font-[roboto] px-12 text-xl md:text-2xl my-8 text-justify'>
            
But it is still a very beautiful and peaceful country. People of Bangladesh are so friendly with each other. This country has a glorious history of independence. We got independence from Pakistan in 1971 after nine mothers’ blood-shedding war. More than 3 million Bangladeshi sacrificed their life in that genocide. 

 
        </p>
        <p className='text-black font-[roboto] px-12 text-xl md:text-2xl my-8 text-justify' >
        But still, we were able to get our independence. After independence, the newly born country faced lots of hard times and struggles. But it rises very well. Now Bangladesh is one of the best countries to live in South Asia. There are so many beautiful spots to see in this country.
        </p>
    </div>
    
  
  </div> 
  <div className="drawer-side font-bold">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-[#9398BF] text-base-content ">
      {/* Sidebar content here */}
      <li className="text-xl">Sidebar</li>
      <li tabIndex={0}>
            <details>
              <summary>Item 1</summary>
              <ul className="p-2">
                <li><a>Item A</a></li>
                <li><a>Item B</a></li>
              </ul>
            </details>
          </li>
      <li tabIndex={0}>
            <details>
              <summary>Item 2</summary>
              <ul className="p-2">
                <li><a>Item C</a></li>
                <li><a>Item D</a></li>
              </ul>
            </details>
          </li>
      <li tabIndex={0}>
            <details>
              <summary>Item 3</summary>
              <ul className="p-2">
                <li><a>Item E</a></li>
                <li><a>Item F</a></li>
              </ul>
            </details>
          </li>
      
    </ul>
    
  
  </div>
</div>
    );
};

export default Home;