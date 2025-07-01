
const Database = ()=>{  // arrow function
  return(
    <div>
     <h1>Database</h1> 
      <div className='cardCont'>
      <div className="card">
        <img src="mysql.png"/>
        <h2>MySQL</h2>
        <p>An open-source database often used for web applications and e-commerce. </p>
      </div>
      <div className="card">
        <img src="mongoDB_logo.png"/>
        <h2>MongoDB</h2>
        <p>A document database that stores data in JSON-like documents, often used for flexible data storage and applications like social media. </p>
      </div>
      <div className="card">
        <img src="postsql.png"/>
        <h2>PostgreSQL</h2>
        <p>Another open-source database, frequently used in financial systems and ERP applications. </p>
      </div>
      <div className="card">
        <img src="oracle.png"/>
        <h2>Oracle Database</h2>
        <p>A commercial database system known for its scalability and performance. </p>
      </div>
      </div>
    </div>
  )
}

export default Database