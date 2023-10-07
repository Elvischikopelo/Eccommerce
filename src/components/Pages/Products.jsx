import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Pages from '../Pagination'
import SingleContent from '../SingleContent'
import NavigationBar from '../Navbar/Navbar'

function Products() {

  const [trends, setTrends] = useState([])
  const [page, setpage] = useState(1)
  const [numberOfPages, setnumberOfPages] = useState()
  const [error, seterror] = useState(false)

  const fetchProducts = async () => {
    const { data } = await axios.get(``)
    const alldata = data.results
    // console.log(alldata)
    setTrends(alldata)
    setnumberOfPages(data.total_pages)
  }

  useEffect(() => {
    fetchProducts()
     //eslint-disable-next-line
     .catch(error => {
      seterror(error.message)
    })
  }, [page])
  return (
    <div className='pb-32'>
      <NavigationBar/>
      <h1 className='flex justify-center text-xl font-bold uppercase pb-6'>Trending</h1>
      <div className='grid grid-col-4 grid-flow-row'>
      {
          error &&
          <div className='absolute laptop:right-72 laptop:mr-72 mt-16 tablet:ml-32 laptop:pl-0 pl-16'>
            <h1 className='text-sm'>
              NetworkError while try to fetch movie data. <br></br>Please check your <span className='font-black'>internet connection</span>
            </h1>
          </div>
        }
        {
          trends.map((trend) => {
            return (
              <div key={trend.id}>
                <SingleContent
                  id={trend.id}
                  title={trend.title || trend.name}
                  image={trend.poster_path}
                  category={trend.category}
                />

                {/* pagination */}

              </div>
            )
          })
        }
      </div>
      
      {error ? " " : <Pages setpage={setpage} numberOfPages={numberOfPages}/>}
    </div>
  )
}

export default Movies