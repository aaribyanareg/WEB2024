 import styles from './CourseList.css'

 import data from '../../data.json';
import Course from '../Course/Course';

const CourseList = () => {
    return(
        <div className={styles.courseList}>
            {data.map ((item)=>
                <div key={item.id}>
                    <Course course={item}/>
                </div>
            )}
            
        </div>
    );
};

export default CourseList;