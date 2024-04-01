import { AppState } from "../AppState.js"
import { triviaService } from "../services/TriviaService.js"
import { setHTML, setText } from "../utils/Writer.js"

export class TriviaController {
  constructor() {
    console.log('This is the Trivia Controller')
    AppState.on('questions', this.drawQuestion)
    this.getQuestions()
  }


  getQuestions() {
    console.log('Getting ❓')
    triviaService.getQuestions()
  }

  drawQuestion() {
    const questions = AppState.questions
    let indexToSelect = Math.floor(Math.random() * questions.length)
    console.log('selected index', indexToSelect);

    let selectedQ = questions[indexToSelect]
    setHTML('question', selectedQ.QuestionText)
  }

}