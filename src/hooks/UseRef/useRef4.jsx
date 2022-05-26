import { useEffect, useRef, useState } from "react";

function Card (props) {
  
    let toggled = useRef(false);
    
    const handleToggleBody  = () => {
      toggled.current = !toggled.current;
    }
    
    console.log("render CARD")

    return (
      <section className="card">
        <h3 className="card__title" onMouseMove={handleToggleBody}>
          {props.title}
        </h3>
  
        {toggled && <article className="card__body">{props.body}</article>}
      </section>
    );
  }

  export function UseRef4 () {
  
    const [cardDetails, setCardDetails] = useState({
      title: "Something",
      body: "uniquely done",
    });
  
    useEffect(() => {
      setTimeout(() => {
        setCardDetails({
          title: "We",
          body: "have updated something nice”",
        });
      }, 3000); // Force an update after 5s
    }, []);
  
    return (
      <div>
        <Card title={cardDetails.title} body={cardDetails.body} />
      </div>
    );
  }