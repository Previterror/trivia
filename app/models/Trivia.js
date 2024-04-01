export class Question {
  constructor(data) {
    this.type = data.type
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    this.correct = data.correct_answer
    this.incorrect = data.incorrect_answers
  }


  get QuestionText() {
    return `
  <h1>${this.question}</h1>
  `

  }






}