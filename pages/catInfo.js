import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CatInfo() {
    const {query} = useRouter();

    const [stData, setStData] = useState([]);
    const [stDescription, setStDescription] = useState('');
    const [stAffection, setStAffection] = useState('');
    const [stName, setStName] = useState('');
    const [stImage, setStImage] = useState('');

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
          // get the data from the api
          const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${query.q}`);  
          //console.log(`https://api.thecatapi.com/v1/images/search?breed_ids=${query.q}`);
          // convert the data to json
          const json = await response.json();
      
          // set state with the results
          setStData(json[0]);
          setStDescription(json[0].breeds[0].description);
          setStAffection(json[0].breeds[0].affection_level);
          setStName(json[0].breeds[0].name);
          setStImage(json[0].url)
        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, [query.q])

//console.log(stData);

  return (
/* start content wrapper */
<div className="grid m-2 md:grid-cols-4">
    <div className="col-span-1">&nbsp; </div>

    {/* start grid container */}
    <div className="col-span-2 m-1 md:grid md:gap-4">
            <div className="col-span-4">
                <Link href='/'><button className="px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100">Look up another cat</button></Link>
            </div> 

            
            <div className='card'>
                <div className="my-2 text-2xl text-center">{stName}</div>
                <img src={stImage} alt={stName} className='w-auto max-w-full mx-auto align-middle border-none rounded h-60 sm:object-scale-down md:object-contain sm:h-42'/>
                <h3 className="m-2"><span className="font-semibold">Affection level: </span> 
                    {(() => {
                        switch (stAffection) {
                        case 5: return " Most affectionate";
                        case 4: return " Will tolerate you";
                        case 3: return " Slightly demonic";
                        case 2: return " Will cut you";
                        case 1: return " Kitty de Lucifer";
                        default: return " grumpy";
                        }
                    })()}
                </h3> 
                <h3 className="m-2"><span className="font-semibold">About the {stName} </span> <br />{stDescription}</h3> 
            </div>
    </div>   

            

    {/* end grid container */}    
    <div className="col-span-1">&nbsp; </div>  
</div>


    
    

  )
}
