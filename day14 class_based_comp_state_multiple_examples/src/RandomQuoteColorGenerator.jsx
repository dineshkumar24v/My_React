import React from "react"
class RandomQuoteColorGenerator extends React.Component{
  constructor(){
    super();
    this.state = {
      quote: 'practice makes man perfect',
      colorState: "#ffffff"
    }
  }
  handleRandomQC = ()=>{
    const arrOfQuotes = 
    [
      "The only way to do great work is to love what you do. – Steve Jobs",
      "In the middle of difficulty lies opportunity. – Albert Einstein",
      "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
      "Life is what happens when you're busy making other plans. – John Lennon",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
      "Be yourself; everyone else is already taken. – Oscar Wilde",
      "You miss 100% of the shots you don’t take. – Wayne Gretzky",
      "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
      "I have not failed. I've just found 10,000 ways that won't work. – Thomas Edison",
      "A day without laughter is a day wasted. – Charlie Chaplin",
      "The best way to predict the future is to invent it. – Alan Kay",
      "It does not matter how slowly you go as long as you do not stop. – Confucius",
      "What we think, we become. – Buddha",
      "Don’t count the days, make the days count. – Muhammad Ali",
      "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
      "If you tell the truth, you don’t have to remember anything. – Mark Twain",
      "The mind is everything. What you think you become. – Buddha",
      "Great minds discuss ideas; average minds discuss events; small minds discuss people. – Eleanor Roosevelt",
      "Injustice anywhere is a threat to justice everywhere. – Martin Luther King Jr.",
      "The purpose of our lives is to be happy. – Dalai Lama"
    ]
  let randomQuote = Math.floor(Math.random()*arrOfQuotes.length)
  // this.setState({quote:arrOfQuotes[randomQuote]})
    // color change code
  const chars = '0123456789abcdef'
  let color= '#'
    for(let i=0; i<6; i++){
    const randomChar = Math.floor(Math.random()*chars.length)
    color += chars[randomChar]
    }
    console.log(color, 'color')
    this.setState({colorState: color,quote:arrOfQuotes[randomQuote] })
  }
  render(){
    return(
      <div className="container" style={{backgroundColor:this.state.colorState}}>
        <h1>Random quote & Color Generator</h1>
        <h2><i>"{this.state.quote}"</i></h2>
        <button onClick={this.handleRandomQC}>random quote & color</button>
      </div>
    )
  }
}
export default RandomQuoteColorGenerator 
