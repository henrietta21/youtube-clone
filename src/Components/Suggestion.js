import React from 'react'

function Suggestion() {
    const urlList = [
        {
          src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
          title: `CSS-in-JS — Max Stoiber`,
          view:"20M"
        },
        {
          src: `https://www.youtube.com/embed/v1JAUiqskiw?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
          title: `Modern Forms in React — Erik Rasmussen`,
        },
        {
          src: `https://www.youtube.com/embed/N0wHweOu-LQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
          title: `Engineering led design — Lauren Argenta`,
          view:"20M"
        },
        {
          src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
          title: `Rethinking Design Practices — Mark Dalgleish`,
          view:"20M"
        },
      ];

    return (
        <div >
            {
                urlList.map((list,key) =>(
                   <div key={key} className="col suggestion">
                        <iframe
                        title={list.title}
                        width='200'
                        src={list.src}
                        frameBorder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        ></iframe>   
                        <div>
                        <h4>{list.title}</h4>
                        <span>{list.view} views</span>
                        </div>                  
                   </div> 
                ))
            }
        </div>
    )
}

export default Suggestion
