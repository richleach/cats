import {useEffect, useState} from 'react';
import Link from 'next/link';

export default function Home() {

  const [stData, setStData] = useState([]);
  const [stPaginator, setStPaginator] = useState(0);

  function decrementPage(){
    if(stPaginator > 0) {
      const newPaginator = stPaginator - 1
      setStPaginator(newPaginator)
      console.log(stPaginator);
    }
  }

  function incrementPage(){
      const newPaginator = stPaginator + 1
      setStPaginator(newPaginator)
      console.log(stPaginator);
  }


  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const response = await fetch(`/api/breeds?page=${stPaginator}`);  // `https://api.thecatapi.com/v1/images/search?limit=20&page=${stPaginator}&order=DESC`
      // 'https://api.thecatapi.com/v1/images/search?limit=20&page=10&order=DESC'
      // convert the data to json
      const json = await response.json();
  
      // set state with the result
      setStData(json);
      console.log(stPaginator);
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [stPaginator])

  console.log(stData);
  return (
  /* start content wrapper */
   <div className="grid md:grid-cols-4">

          <div className="col-span-1">
            &nbsp;
          </div>

{/* start grid container */}
        <div className="col-span-2 md:grid md:gap-4 md:grid-cols-4">
        <div className="col-span-4 m-2" style={{borderBottom: "thin solid silver", paddingBottom:"10px"}}>
          <h2 className="text-2xl text-center">Don't let them fool you....</h2>
            <h3>They can look friendly, cuddly, inviting.... But the minute you turn your back on a feline they immediately start plotting your demise. Often described as nature's feline equalivent to the murder hornet, cats are basically the parolled inmates of the animal kingdom.</h3>  
          </div> 
          {
            stData.map((item) => 
            
            <div key={item.id} className='card'>
              <Link href={{pathname: '/catInfo', query: {q: item.id}}} >
              <a>
                <span className="text-center" style={{paddingLeft:"4px", fontSize:".8rem"}}>{item.name}</span> 
                <div className='mx-1 text-sm bg-pink-300 rounded'>
                  <span className="block mx-1 text-red-700" style={{fontSize:".9rem"}}>
                  {(() => {
                    switch (item.affection_level) {
                      case 5: return "Most affectionate";
                      case 4: return "Will tolerate you";
                      case 3: return "Slightly demonic";
                      case 2: return "Will cut you";
                      case 1: return "Kitty de Lucifer";
                      default: return "grumpy";
                    }
                  })()}
                     
                  </span>
                </div>
                
                <div className='relative my-1 overflow-hidden'> <img src={item.image?.url ?? 'https://placehold.jp/150x150.png'} alt='Kitty' className='w-auto h-auto max-w-full mx-auto align-middle border-none rounded sm:object-scale-down md:object-contain h-36 sm:h-42'/>  
                </div> 
              </a>  
               </Link> 
            </div>
            
            )
          }
          
          <div className="justify-between col-span-4 my-6 md:inline-flex" style={{textAlign:"center"}}>
            <button onClick={decrementPage} className="px-4 py-2 font-bold text-gray-800 bg-blue-300 rounded-l hover:bg-gray-400">
              Prev
            </button>
            <button onClick={incrementPage} className="px-4 py-2 font-bold text-gray-800 bg-blue-300 rounded-r hover:bg-gray-400">
              Next
            </button>
          </div>
          
        </div>
{/* end grid container */}


          <div className="col-span-1">
            &nbsp;
          </div>

    </div> 
    /* end content wrapper  */
    )
  }
