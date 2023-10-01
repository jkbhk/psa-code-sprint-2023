import { EvaluationTopic } from "./evaluation-topic.model";

export class Evaluation {
    topics: Map<string,EvaluationTopic> 
    remarks: string

    constructor(){
        this.topics = new Map<string, EvaluationTopic>(); 
        
        this.topics.set("Quality of work", new EvaluationTopic("Quality of Work"));
        this.topics.set("Attendance and punctuality", new EvaluationTopic("Attendance and punctuality"));
        this.topics.set("Reliability", new EvaluationTopic("Reliability"));
        this.topics.set("Communication skills", new EvaluationTopic("Communication skills"));
        this.topics.set("Decision making", new EvaluationTopic("Decision making"));

        this.remarks = "";
    }
}
