import { useRef } from 'react'
import { List } from '../list/list.component'
import { Selection } from './selection'

export const Form = ({users, setUsers}) => {

     let elSearch = useRef()
     
     
     let onSearch = (evt) => {
          evt.preventDefault();
          
          fetch(`https://restcountries.com/v3.1/name/${elSearch.current.value}`)
          .then((res) => res.json())
          .then((data) => setUsers(data))
     }

     return (
          <>
               <div>
                    <form className="d-flex m-5 px-3" onSubmit={onSearch}>
                         <div className="d-flex w-50">
                              <input ref={elSearch} className="form-control" type="text" required/>
                              <button className="btn btn-primary ms-3">Search</button>
                         </div>
                         <Selection users={users} setUsers={setUsers} />
                    </form>
                    <List users={users} />
               </div>
          </>
     )
}