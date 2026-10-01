import CreatorsBanner from '@/components/creatorsComponent/CreatorsBanner'
import FilterBar from '@/components/filter/FilterBar'
import Discover from '@/components/home/Discover'
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
       <Discover />
       </section>
    </div>
  )
}

export default page
