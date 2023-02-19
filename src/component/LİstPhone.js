import React from "react";







const LİstPhone = ({persons}) => {
    console.log(LİstPhone)
  return (
    <div className="container my-5 ">
      <p>Add Number</p>
      <table class="table">
        <thead>
          <tr >
            
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
         {
            persons.lenght === 0 ? (
                <tr>
                <td colSpan={3}>Kayıtlı numara bulunmamaktadır </td>
                </tr>

            ) : (
                <>

 {persons.map((person,index )=>(

        <tr key={person.id}>
    <th scope="row">{index+1}</th>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.phoneNumber}</td>
  
    </tr>
                ) )}

                </>
            )
            
         }
        </tbody>
      </table>
    </div>
  );
};
export default LİstPhone;
