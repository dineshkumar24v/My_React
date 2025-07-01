import './Components.css'

export function Frontend(){  // Named export function
  return(
    <div>
     <h1>Frontend</h1> 
      <div className='cardCont'>
      <div className="card">
        <img src="html.png"/>
        <h2>Html</h2>
        <p>HTML, or HyperText Markup Language, is the standard markup language used to create web pages. It defines the structure and content of a webpage, telling a web browser how to display text, images, and other multimedia elements.</p>
      </div>
      <div className="card">
        <img src="css.webp"/>
        <h2>CSS</h2>
        <p>Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML</p>
      </div>
      <div className="card">
        <img src="JS.png"/>
        <h2>JS</h2>
        <p>JavaScript, a popular programming language used primarily to add interactivity and dynamic content to web pages and applications</p>
      </div>
      <div className="card">
        <img src="react_logo.png"/>
        <h2>React</h2>
        <p>React is a JavaScript library for building user interfaces, specifically for web applications. It's known for its component-based architecture, which allows developers to create reusable UI elements, and its use of a virtual DOM for efficient updates, resulting in faster and more responsive applications.</p>
      </div>
      </div>
    </div>
  )
}