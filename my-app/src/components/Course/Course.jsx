import styles from './Course.css'

const Course = ({course}) => {

    return(
        <div className={styles.course}>
            <h3>{course.title}</h3>
             <img src={course.img} alt={course.title} style={{ width: '200px', height: '200px' }} />
             <p>{course.description}</p>
             
        </div>
    );
};

export default Course;
