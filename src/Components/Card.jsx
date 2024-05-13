/* eslint-disable react/prop-types */


const Card = ({item}) => {
    const {nombre, imagen, precio} = item
  return (
    <div>
        <img src={imagen} alt={nombre} />
        <h4>{nombre}</h4>
        <h4>{precio}</h4>
        <button>🛒</button>
    </div>
  )
}

export default Card