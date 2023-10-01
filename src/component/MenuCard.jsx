import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description, price } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <div className="iconDiv">
                      <button className="btn-cart">For Rent</button>
                      <span className="card-number subtle">
                        <i class="fa-regular fa-heart icon"></i>
                      </span>
                    </div>
                    <img src={image} alt="images" className="card-media" />
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="all">
                      <i class="fa-solid fa-house"></i>
                      <i class="fa-solid fa-bed"></i>
                      <i class="fa-solid fa-bath"></i>
                      <i class="fa-solid fa-list"></i>
                    </div>
                  </div>
                  <div className="last">
                    <span>{price}</span>
                    <span className="card-tag btn-cart subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
