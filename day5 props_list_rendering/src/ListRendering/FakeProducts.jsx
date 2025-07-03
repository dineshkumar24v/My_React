
import DummyData from './DummyProductsData'

export const FakeProducts = () => {
  console.log(DummyData);
  return (
    <div className="mainContainer">
      {DummyData.products.map((hai) => (
        <div className="cards" key={hai.id}>
          <img src={hai.images} height={100} alt={hai.title} />
          <h4>{hai.title}</h4>
          <p>{hai.brand}</p>
          <p>{hai.description}</p>
          <p>Rs. {hai.price}</p>
        </div>
      ))}
    </div>
  );
};
