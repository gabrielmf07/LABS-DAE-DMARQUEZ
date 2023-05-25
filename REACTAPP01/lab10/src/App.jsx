import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    productos:[
      {
        "codigo": 1,
        "descripcion": "Coca cola",
        "precio": 2.33
        },
        {
        "codigo": 2,
        "descripcion": "Fanta",
        "precio": 1.7
        },
        {
          "codigo": 3,
          "descripcion": "Sublime",
          "precio": 2.50
        }
    ]
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/producto')
      .then((response) => {
        return response.json()
      })
      .then((prod) => {
        console.log(prod)
        this.setState({ productos: prod })
      })    
  } 

  render() {
    return (
      <div>
        <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>                    
          </tr>
        </thead>
        <tbody>  
          {this.state.productos.map(producto => {
            return (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }

}
export default App