import React, { useState, useEffect } from "react";

const BicyclesList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3001/bicycles")
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setBicycles(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, 1500);
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="container flex gap-5 flex-wrap justify-center items-center">
        {bicycles.map((bicycle) => (
          <div
            key={bicycle.id}
            className="border-black border-[2px] rounded-sm w-[277px] h-[346px]"
          >
            <img src={bicycle.img} alt="1" className="mx-auto" />
            <div className="p-8">
              <h2 className="text-left">{bicycle.name}</h2>
              <h3 className="text-left">{bicycle.price} &#8364;</h3>
              <div className="flex gap-3 justify-between items-center">
                <table className="table-auto">
                  <tbody className="text-left">
                    <tr className="text-[#7E7368]   text-xs">
                      <td className="pr-5">Color</td>
                      <td>Size</td>
                    </tr>
                    <tr>
                      <td className="pr-5">{bicycle.color}</td>
                      <td>{bicycle.size}</td>
                    </tr>
                  </tbody>
                </table>
                <a href="#">+</a>
              </div>
            </div>
          </div>
        ))}

        {/* <img src="..." alt="..." />
          <div>
            <h5>Card title</h5>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
            <a href="#">Go somewhere</a>
          </div>
        </div> */}

        {/* <ul>
          {bicycles.map((bicycle) => (
            <li key={bicycle.id}>
              {bicycle.name} {bicycle.price}
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
};

export default BicyclesList;
