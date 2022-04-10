import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import Rater from "react-rater";
import axios from "axios";
import "./App.css";

let baseUrl = "https://fe.dev.dxtr.asia/api";
let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjM4ZTY0YjVlZWFkN2JmMTU0NDliNjJiYjcxNTUyMjZjMWM4MmJmOTk2NmQ3Y2VkZmYwMDYyMWI4NDFkYjk4MTQ4N2QwZTljNDcxNmIxZDEiLCJpYXQiOjE2NDk0ODg4MTcsIm5iZiI6MTY0OTQ4ODgxNywiZXhwIjoxNjgxMDI0ODE3LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.SExEA8K1CrpjStMJsxXJh3ON44An52Qer51CTADDhf5S-tnJqYi49iokxAwoMoXQYtFgrVgZz5tLBf_yIqj1Kz2QxeCFnwhtNFDH4Ji7xYFvYFCp7nInA0TPsdzEZXp7zk3aeRg4XSVrfkzWwENvjvwdR4XpnirbfQKz9cuktxVXXJFkjLDtBBYh4G_Lm4TSO0S3azhFCeqr-vK1aGDOlTYcqWPlinLninCC_rkOgH8PwfaUXYjoKJkoQ33dS5NPzSeaGRppvI0sIcp_kFkLp4cLiie1knG31e7SsmN1UCf7Mpio3Mxxb9hOtbRATVxUxhc8ske6WZIi-8e_-VSfhORq9XIN6lXS2hgc-iyYqheJjv3kMoneBz4qPaTPP8xOD9op72yu5rF2Z8E4kW9O4ze12BM7gb0br-LnJOjYQEQMom3wpqEQ53xxLgJ2ZksUwR3HwAZwM8tHTdVfKT-b4lNvaSkNuB4SQHvYcPnPm3m3T4CwDEwSssCQIUs_WT8T6bCz3AI_Bf6Eos2-qyJBfh8QPZ7O77sKV80hni40POGhkJ8P8i8k23PiIttEb5w1sDvkFpkvr7D6vA5Rk9qDWFC3UqVpIBB9zNFEHT8L98cGAVRvP2psoYaAVtBaXERkvR83VK1W1iUHLaC2ZNMIo-OdA4Qt-44bps0LKxgbOyw";

function App() {

  const [listProduct, setListProduct] = useState([
    "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://blog.hubspot.com/hubfs/image10.jpg",
    "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ]);

  useEffect(() => getProduct(), []);

  //API CORS ORIGIN
  const getProduct = async () => {
    try {
      let response = await axios.get(`${baseUrl}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Credentials": true,
          // "Access-Control-Allow-Headers": "authorization",
        },
      });

      // if(response?.data?.status === 200){
      //   setListProduct(response?.data?.data)
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div style={{ width: "70%" }}>
        <Carousel swipeable={true} infiniteLoop showArrows={false} showIndicators={false}>
          {listProduct.map((item, ind) => (
            <img src={item} />
          ))}
        </Carousel>
      </div>

      <div style={{ width: "30%", padding: "2rem" }}>
        <div className="label-sale">{"SALE"}</div>
        <div className="title">{"LENSA"}</div>

        <div className="con-rate">
          <Rater total={5} rating={4.5} /> <p className="label-view">{"(100 reviews)"}</p>
        </div>
        <div className="price">{"$46.99"}</div>

        <div style={{ borderTop: "1px dashed black" }} />

        <div className="con-button">
          <button className="btn-add">{"Add To Cart"}</button>
          <button className="btn-buy">{"Buy Now"}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
