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
  <div class="row justify-content-around">${this.setAnswers}</div>
  `
  }

  get setAnswers() {
    let allAnswers = this.incorrect.push(this.correct)
    let answers = ''

    allAnswers.forEach(answer => answers += `<span class="bg-dark border rounded col-5 fs-3 m-1 ps-4">${answer}</span>`);

    return answers

  }






}