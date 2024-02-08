import React from "react";
import background from "../assets/images/home/back.jpg";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-white border-0">
        <img src={background} className="card-img" alt="Background"/>
        <div className="card-img-overlay d-flex flex-collumn justify-content-center py-4" style={{ marginTop: "60px" }}> {/* Adicionado marginTop para afastar do topo */}
          <div className="container">
            <div className="row justify-content-start">            
                <h5 className="card-title display-3 fw-bolder mb-0 ">CHEGADA DA NOVA TEMPORADA</h5>
                <p className="card-text LEAD fs-2">
                  CONFIRA AS NOVAS TENDÊNCIAS
                </p>
             
            </div>
          </div>
        </div>
        <Products/>
      </div>
    </div>
  );
}


