import { Course } from "./course.model";
import { Evaluation } from "./evaluation.model";

export class User {
    email: string;
    name: string;
    resume_score: number;
    evaluation: Evaluation;
    courses: Map<string, Course>

    constructor(email:string, name:string){
        this.email = email;
        this.name = name;
        this.resume_score = 0;
        this.evaluation = new Evaluation();
        this.courses = new Map<string, Course>();
        
    }

}
