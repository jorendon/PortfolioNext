import React, {useState} from 'react';

export default function Crud(props) {

    const [viewList, setViewList] = useState(true)
    const [viewForm, setViewForm] = useState(false)
    const [person, setPerson] = useState(null)
    const [list, setList] = useState([
        {id: 1, 'name': 'Jonathan', 'lastname': 'Rendón', 'age': '35'},
        {id: 2, 'name': 'Luis', 'lastname': 'Perez', 'age': '35'},
        {id: 3, 'name': 'Manuel', 'lastname': 'León', 'age': '35'},
        {id: 4, 'name': 'Ramón', 'lastname': 'Fernandez', 'age': '35'},
        {id: 5, 'name': 'Miguel', 'lastname': 'Liendo', 'age': '35'}
    ])

    const addPerson = () => {
        setViewList(false);
        setViewForm(true);

    }
    const deletePerson = (person) => {
        const persons=list.filter(register=>(register.id!==person.id));
        setList(persons)
    }
    const addPersonForm = () => {
        setPerson( null)
        setViewList(false);
        setViewForm(true);

    }
    const editPerson = (person) => {
        setPerson(person)
        setViewList(false);
        setViewForm(true);

    }
    const addCancel = () => {
        setViewForm(false);
        setViewList(true);
    }

    function handleInputChange(event) {
        console.log(event.currentTarget.name)
        console.log(event.currentTarget.value)
       // setDataPay({ ...dataPay, [event.currentTarget.name]: event.currentTarget.value })
    }

    return (
        <div className="card border-secondary mb-3">
            {viewList &&
            <>
                <div className="card-header">List</div>
                <div className="card-body">
                    <button type="button" className="btn btn-success btn-sm mb-1" onClick={addPerson}>Add</button>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Last</th>
                            <th scope="col">Age</th>
                            <th scope="col" className="text-center">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            list.map(person => (
                                <tr key={person.id}>
                                    <td>{person.name}</td>
                                    <td>{person.lastname}</td>
                                    <td>{person.age}</td>
                                    <td className="text-center">
                                        <button type="button"  onClick={()=>deletePerson(person)} className="btn btn-danger btn-sm mr-md-1">Delete</button>
                                        <button type="button" onClick={()=>editPerson(person)} className="btn btn-warning btn-sm">Edit</button>
                                    </td>

                                </tr>

                            ))

                        }

                        </tbody>
                    </table>
                </div>
            </>}
            {viewForm &&
            <>
                <div className="card-header">Form</div>
                <div className="card-body">
                    <form onSubmit={addPersonForm}>
                    <div className="form-group">
                        <label className="col-form-label col-form-label-sm" htmlFor="name">Name</label>
                        <input className="form-control form-control-sm" type="text" placeholder="Name"
                               id="name" value={person && person.name} onChange={handleInputChange} required/>
                        <label className="col-form-label col-form-label-sm" htmlFor="last">Last</label>
                        <input className="form-control form-control-sm" type="text" placeholder="Last"
                               id="last" value={person && person.lastname} onChange={handleInputChange} required/>
                        <label className="col-form-label col-form-label-sm" htmlFor="age">Age</label>
                        <input className="form-control form-control-sm" type="text" placeholder="Age"
                               id="age" value={person && person.age} onChange={handleInputChange} required/>
                    </div>
                        <button type="submit" className="btn btn-success btn-sm mb-1 mr-md-1">Add</button>
                        <button type="button" onClick={addCancel} className="btn btn-warning btn-sm mb-1">Cancel</button>
                    </form>
                </div>
            </>


            }
        </div>
    )
}