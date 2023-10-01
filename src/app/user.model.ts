import { Course } from "./course.model";
import { Evaluation } from "./evaluation.model";

export class User {
    email: string;
    name: string;
    resume_score: number;
    evaluation: Evaluation;
    courses: Map<string, Course>
    role: string;

    constructor(email:string, name:string, role:string){
        this.email = email;
        this.name = name;
        this.resume_score = 0;
        this.evaluation = new Evaluation();
        this.courses = new Map<string, Course>();
        this.role = role

        this.courses.set("Basic Java",new Course("Basic Java"));
        this.courses.set("Basic C#",new Course("Basic C#"));
        this.courses.set("Basic C++",new Course("Basic C++"));
        
        
    }

}
