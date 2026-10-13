function Card({ numero }) {
  return (
    <div className="card">
      <span className="card-numero">{numero}</span>
      <p>Cartão {numero}</p>
    </div>
  )
}

export default Card
