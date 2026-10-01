import Card from '@/components/creatorsComponent/Card'
import CreatorsBanner from '@/components/creatorsComponent/CreatorsBanner'
import FilterBar from '@/components/filter/FilterBar'

import React from 'react'

const page = () => {
  return (
    <div>
       <section>
        <CreatorsBanner></CreatorsBanner>
       </section>
       <section>
         <FilterBar></FilterBar>
       </section>
       <section>
       <Card></Card>
       </section>
    </div>
  )
}

export default page
