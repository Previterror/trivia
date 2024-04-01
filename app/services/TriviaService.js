import { AppState } from "../AppState.js";
import { Question } from "../models/Trivia.js";

class TriviaService {

    async getQuestions() {
        console.log('getting❓🔧')
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=20&difficulty=easy')
        console.log('response 🔧', response)
        const pojos = await response.json()
        console.log('POJO🔧', pojos);
        const questions = pojos.results.map(pojo => new Question(pojo))
        console.log('Questions🔧', questions);
        AppState.questions = questions
        console.log('appstate.questions 🔧', AppState.questions);
    }

}

export const triviaService = new TriviaService