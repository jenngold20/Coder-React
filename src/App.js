import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const ItemList = [
	{ nombre: ' Inicio', enlace: '/' },
	{ nombre: ' Novedades', enlace: '/novedades' },
	{ nombre: 'Productos', enlace: '/productos' },
  { nombre: ' Nosotros', enlace: '/nosotros' },
]

function App() {
	return (
		<div className='App'>
      <NavBar data={ItemList} />
      <ItemListContainer greeting="Barbie"/>
		</div>
	)
}

export default App
