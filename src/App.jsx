import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import CreateChamp from './components/CreateChamp'
import Gallery from './components/Gallery'
import EditChamp from './components/EditChamp'
import SideNav from './components/SideNav'
import { Routes, Route } from 'react-router-dom'
import { supabase } from './client'

function App() {
  const [champs, setChamps] = useState()
 
  useEffect(()=> {
    const fetchPosts = async () => {
      const {data} = await supabase.from('Champions').select().order('created_at', { ascending: true });

      setChamps(data);
    }
    fetchPosts();
  }, [])

  return (
    <div className="App">

      <SideNav/>
      <div className="page">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreateChamp/>}/>
          <Route path="/gallery" element={<Gallery data={champs}/>}/>
          <Route path="/edit/:id" element={<EditChamp data={champs}/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App
