// import './index.css'
// import boundary from '../Images/boundary.png';


// const Graph = ()=>{

//     return(

// <div className='details-dashboard'>
// <div className='perfomance-dashboard'>
//     <div className='perfomance-topic'>
//         <h1>Perfomance per subject</h1>
//     </div>

//     <h2 className='assignment-dashboard'>Assignment</h2>
//     <div className='assignment-subjects'>
//         <div className='assign-subjects'>
//         <div className='science'> 
//             <h3 className='assigned'>Science</h3>
// <img src={boundary} alt="boundary" className="middle" />
//             <h3 className='confirm'>Done</h3>
//         </div>
//         <div className='maths'> 
//             <h3 className='assigned'>Maths</h3>
// <img src={boundary} alt="boundary" className="middle" />

//             <h3 className='confirm'>Done</h3>
//         </div>
//         <div className='kiswahili'> 
//             <h3 className='assigned'>Kiswahili</h3>
// <img src={boundary} alt="boundary" className="middle" />
//             <h3 className='confirmed'>Pending</h3>
//         </div>
//         </div>
//     </div>
// </div>

// </div>
// );
// };

// export default Graph;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './index.css';
// import boundary from '../Images/boundary.png';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const Graph = () => {
  const data = {
    labels: ['Mathematics', 'Kiswahili','English',  'Science','C.R.E', 'Social Studies'],
    datasets: [
      {
        label: 'Average Score',
        data: [73,50,90,68,85,60,100],
        backgroundColor: (context) => {
          const index = context.dataIndex;
          if (index === 5) {
            return '#C82A92';
          } else if(index === 0){
            return '#2639E0'
          }else if(index === 1){
            return '#A52222'
          }else if(index === 2){
            return '#EBEE34'
          }else if(index === 3){
            return '#226512'
          }else if(index === 4){
            return '#26E0E0'
          }
        },
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Subjects',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Average Score',
        },
        beginAtZero: true,
      },
    },
  };
  return (
    <div id='bar2'>
      <div id='bar'>
        <h1 className='header'>Ranking Per Subject</h1>
        <h3>Perfomance per Subject</h3>
      <Bar data={data} options={options} />
      </div>
      <div className='details-dashboard'>
<div className='perfomance-dashboard'>
    {/* <div className='perfomance-topic'>
        <h1>Perfomance per subject</h1>
    </div> */}

{/* <h2 className='assignment-dashboard'>Assignment</h2> */}
    {/* <div className='assignment-subjects'>
        <div className='assign-subjects'>
        <div className='science'> 
            <h3 className='assigned'>Science</h3>
<img src={boundary} alt="boundary" className="middle" />
            <h3 className='confirm'>Done</h3>
        </div>
        <div className='maths'> 
            <h3 className='assigned'>Maths</h3>
<img src={boundary} alt="boundary" className="middle" />

            <h3 className='confirm'>Done</h3>
        </div>
        <div className='kiswahili'> 
            <h3 className='assigned'>Kiswahili</h3>
<img src={boundary} alt="boundary" className="middle" />
            <h3 className='confirmed'>Pending</h3>
        </div>
        </div>
    </div> */}


</div>

</div>
    </div>

    
  );
  
};
export default Graph;