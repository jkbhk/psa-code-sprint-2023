export class EvaluationTopic {
    name: string;
    score: number; 
    maxScore: number;

    constructor(name:string){
        this.name = name;
        this.score = 0;
        this.maxScore = 5;
    }
    
    
}
