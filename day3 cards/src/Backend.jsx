
function Backend(){  // default export function
  return(
    <div>
     <h1>Backend</h1> 
      <div className='cardCont'>
      <div className="card">
        <img src="Java.png"/>
        <h2>Java</h2>
        <p>Java is a widely used, object-oriented programming language and software platform designed to be "write once, run anywhere".</p>
      </div>
      <div className="card">
        <img src="PHP.png"/>
        <h2>PHP</h2>
        <p>PHP, which stands for Hypertext Preprocessor, is a widely used, open-source server-side scripting language primarily used for web development.</p>
      </div>
      <div className="card">
        <img src="Python.png"/>
        <h2>Python</h2>
        <p>Python is a high-level, general-purpose programming language known for its readability and versatility</p>
      </div>
      <div className="card">
        <img src="nodejs.png"/>
        <h2>Node JS</h2>
        <p>Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. </p>
      </div>
      </div>
    </div>
  )
}

export default Backend