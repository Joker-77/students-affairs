import React from 'react'
import Admin from 'layouts/Admin.js';

const CourseReult = () => {
    return (
        <div>
            Hello
    </div>
    )
}

(CourseReult as any).auth = true;
(CourseReult as any).layout = Admin;
export default CourseReult;
