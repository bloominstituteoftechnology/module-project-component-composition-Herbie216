import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './card'

const api_key = "DEMO_KEY"
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    //fetchPhoto()
    setApod({
      'date': "2024-02-14",
      'explanation': "Can you find the Rosette Nebula? The large, red, and flowery-looking nebula on the upper left may seem the obvious choice, but that is actually just diffuse hydrogen emission surrounding the Cone and Fox Fur Nebulas. The famous Rosette Nebula is really located on the lower right and connected to the other nebulas by irregular filaments.  Because the featured image of Rosetta's field is so wide and deep, it seems to contain other flowers.  Designated NGC 2237, the center of the Rosette nebula is populated by the bright blue stars of open cluster NGC 2244, whose winds and energetic light are evacuating the nebula's center.  The Rosette Nebula is about 5,000 light years distant and, just by itself, spans about three times the diameter of a full moon. This flowery field can be found toward the constellation of the Unicorn  (Monoceros).",
      'hdurl': "https://apod.nasa.gov/apod/image/2402/RosetteCone_Bernard_5398.jpg",
      'media_type': "image",
      'service_version': "v1",
      'title': "Rosette Deep Field",
      'url': "https://apod.nasa.gov/apod/image/2402/RosetteCone_Bernard_960.jpg"
    })
  }, [])
  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
