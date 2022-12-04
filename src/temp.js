{
  temp != 0 && temp < 20 ? (
    <div>
      The Temperature in <strong>{city} </strong>is {temp} &#8451; &nbsp; so
      please carry a warmer
    </div>
  ) : temp != 0 && temp >= 20 && temp <= 35 ? (
    <div>
      The Temperature in <strong>{city} </strong>is {temp} &#8451; &nbsp; it's a
      great day today
    </div>
  ) : temp != 0 && temp > 35 ? (
    <div>
      The Temperature in <strong>{city} </strong>is {temp} &#8451; &nbsp; so
      please carry your sunscreen
    </div>
  ) : null;
}
