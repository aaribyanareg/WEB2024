import Course from "../course/Course" ;
import styles from './courselist.css';
import data from '../../data.json';

const courselist = () =>    {
    console.log(data);

    return(
        <div>
            {data.map((item) => {
                <Course  course ={item}/>
            })


            }

        </div>
    )
}

export default courselist;