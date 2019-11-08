import React from "react";
import "./List.css";
import Tackle from "../Tackle"

export function List(props)
{

  return (
    <div>
      <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Notes</th>
                  <th scope="col"></th>
                </tr>  
              </thead> 
              <tbody>
    {
      
        props.tackleData.map((tackle) =>
        {
          const tackleDetails = tackle;

          return (
            
                <Tackle
                    tackleId={tackleDetails["tackle-id"]}
                    userId={tackleDetails["user-id"]}
                    name={tackleDetails["name"]}
                    description={tackleDetails["description"]}
                    notes={tackleDetails["notes"]}
                    quantity={tackleDetails["quantity"]}
                    deleted={tackleDetails["deleted"]}
                    key={tackleDetails["tackle-id"]} 
                    profile={props.profile}            
                />
          )
        }
        )
    }
                  </tbody>
            </table>
    </div>
  );
}

export default List;