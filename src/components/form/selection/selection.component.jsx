import { useEffect } from "react"

export const Selection = ({setUsers}) => {

     let onSelect = (evt) => {

          fetch(`https://restcountries.com/v3.1/region/${evt.target.value}`)
          .then((res) => res.json())
          .then((data) => setUsers(data))
     }

     return (
          <>
               <div className="ms-auto">
                    <select className="form-select" id="sortBy" onChange={onSelect}>
                         <option selected disabled>Filter by region</option>
                         <option value='America'>America</option>
                         <option value='Asia'>Asia</option>
                         <option value='Africa'>Africa</option>
                         <option value='Europe'>Europe</option>
                         <option value='Oceania'>Oceania</option>
                    </select>
               </div>
          </>
     )
}