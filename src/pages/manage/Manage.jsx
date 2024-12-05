import React,{useState,useEffect} from 'react';
import axios from 'axios';
import NavBar from '../home/components/AppBar';
import Grid from "@mui/material/Grid2";
import EnhancedTable from './components/EnhancedTable'

export default function Manage() {
const [articles,setArticles]=useState([])
const [loading,setLoading]=useState(true)
const [page,setPage]=useState(1)
const url= "http://localhost:3000/article/articles?page="


useEffect(()=>{
  getArticles(page)

},[page])



const getArticles= async(page=1)=>{

  const link = url+page
  console.log(link)
 const response= await axios.get(link)
 console.log("response",response.data)

 if (response.data.status){
  setArticles(response.data.articles)
  setLoading(false)

 }
}
  return (
    <div>
    <NavBar />
      <div className="container">
       <Grid container spacing={2}>
        <Grid  size={{ xs: 12, md: 12, sm: 12 }} sx={{mt:5}}>
          <h2>Listado de artículos</h2>
          </Grid>
          <Grid size={{ xs: 12, md: 12, sm: 12 }} >
  {!loading && (
    <EnhancedTable rows={articles} />
  )}
</Grid>

       </Grid>
      </div>
    </div>
  )
}