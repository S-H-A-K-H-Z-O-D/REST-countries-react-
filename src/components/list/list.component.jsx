export const List = ({users}) => {
     return (
          <>
               <ul className="d-flex justify-content-around flex-wrap list-unstyled mx-3">
                    {users.map((item, id) => {
                         return (
                              <li className="m-4 card w-25" key={id}>
                                   <img className="card-img-top" height={220} src={item.flags.svg}  />
                                   <div className="card-body">
                                        <h5 className="card-title mb-3 ms-2">{item.name.common}</h5>
                                        <p className="m-2"><b>Population:</b> <span>{item.population}</span></p>
                                        <p className="m-2"><b>Region:</b> <span>{item.region}</span></p>
                                        <p className="m-2"><b>Capital:</b> <span>{item.capital}</span></p>
                                   </div>
                              </li>
                         )
                    }
                    )}
               </ul>  
          </>
     )
}