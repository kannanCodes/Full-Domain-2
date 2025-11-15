
export const UserCard = (props) =>{
     const {name,age,location} = props
     return (
          <div>
               <h1>{name}</h1>
               <h2>{age}</h2>
               <h3>{location}</h3>
          </div>
     )
}