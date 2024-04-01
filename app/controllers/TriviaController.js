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


    let randomizedCorrect = Math.floor(Math.random() * 4)
    let remainingPositions = [0, 1, 2, 3]

    if (selectedQ.incorrect.length = 1) {
      let pos2 = document.getElementById('pos2cont')
      let pos3 = document.getElementById('pos3cont')
      pos2.classList.add('d-none')
      pos3.classList.add('d-none')
      remainingPositions.splice(2, 2)
    } else {

      setText(`${randomizedCorrect}`, selectedQ.correct)

      remainingPositions.splice(randomizedCorrect, 1)

      remainingPositions.forEach(position => setText(`${position}`, selectedQ.incorrect.shift()))
    }



    // setText('qc', selectedQ.incorrect.shift())
    // setText('qd', selectedQ.incorrect.shift())
  }

}