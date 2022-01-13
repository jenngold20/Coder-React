import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const ItemList = [
	{ nombre: '👾 Inicio', enlace: '/' },
	{ nombre: '📰 Novedades', enlace: '/novedades' },
	{ nombre: '🎮 Juegos', enlace: '/juegos' },
  { nombre: '💀 Nosotros', enlace: '/nosotros' },
]

function App() {
	return (
		<div className='App'>
      <NavBar data={ItemList} />
      <ItemListContainer greeting="Juegos"/>
		</div>
	)
}

export default App
