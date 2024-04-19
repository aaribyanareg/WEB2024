import styles from './Course.module.scss'

const Course = ({course}) => {
   
    return(
        <div className={styles.course}>
            <h3>{course.title}</h3>
            {course.img}
        </div>
        
    );
};

export default Course;