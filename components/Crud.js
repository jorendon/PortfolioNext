import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export default function Crud(props) {

    const [viewList, setViewList] = useState(true)
    const [message, setMessage] = useState('')
    const [edit, setEdit] = useState(false)
    const [viewForm, setViewForm] = useState(false)
    const [viewAlert, setViewAlert] = useState(false)
    const [person, setPerson] = useState({id: '', 'name': '', 'lastname': '', 'age': ''})
    const [list, setList] = useState([
        {id: '1', 'name': 'Jonathan', 'lastname': 'Rendón', 'age': '35'},
        {id: '2', 'name': 'Luis', 'lastname': 'Perez', 'age': '35'},
        {id: '3', 'name': 'Manuel', 'lastname': 'León', 'age': '35'},
        {id: '4', 'name': 'Ramón', 'lastname': 'Fernandez', 'age': '35'},
        {id: '5', 'name': 'Miguel', 'lastname': 'Liendo', 'age': '35'}
    ])

    const addPerson = () => {
        setPerson(null)
        setEdit(false)
        setViewList(false);
        setViewForm(true);

    }
    const deletePerson = (person) => {
        const persons = list.filter(register => (register.id !== person.id));
        setList(persons)
        setMessage('Delete Ok')
        setViewAlert(true);
    }
    const addPersonForm = (e) => {
        e.preventDefault()
        if (!edit) {
            const newPerson = {...person, 'id': uuidv4()}
            list.push(newPerson)
            setList(list)
            setMessage('Add Ok')
        } else {
            const arrayPersons = list.map(register => {
                if (register.id === person.id) {
                    return {
                        ...register,
                        ...person
                    }
                } else {
                    return register
                }
            })
            setList(arrayPersons)
            setMessage('Update Ok')
        }


        setViewList(true);
        setViewForm(false);

        setViewAlert(true);

    }
    const editPerson = (person) => {
        setPerson(person)
        setEdit(true)
        setViewList(false);
        setViewForm(true);

    }
    const addCancel = () => {
        setViewForm(false);
        setViewList(true);
    }
    const alertCLose = () => {
        setViewAlert(false);
    }

    function handleInputChange(event) {
        setPerson({...person, [event.currentTarget.id]: event.currentTarget.value})
    }

    return (
        <div className="card border-secondary mb-3 animate__animated animate__fadeInLeft animate__slower" style={{minHeight: 550}}>
            {viewAlert && <Alert message={message} handleClose={alertCLose}/>}
            {viewList &&
            <>
                <div className="card-header">Persons</div>
                <div className="card-body">
                    <button type="button" className="btn btn-success btn-sm mb-1" onClick={addPerson}>Add Person</button>
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
                                        <button type="button" onClick={() => deletePerson(person)}
                                                className="btn btn-danger btn-sm mr-md-1">Delete
                                        </button>
                                        <button type="button" onClick={() => editPerson(person)}
                                                className="btn btn-warning btn-sm">Edit
                                        </button>
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
                            <input type="hidden" id="id" value={person && person.id}/>
                            <label className="col-form-label col-form-label-sm" htmlFor="name">Name</label>
                            <input className="form-control form-control-sm" type="text" placeholder="Name"
                                   id="name" value={person && person.name} onChange={handleInputChange} required/>
                            <label className="col-form-label col-form-label-sm" htmlFor="lastname">Last</label>
                            <input className="form-control form-control-sm" type="text" placeholder="Last"
                                   id="lastname" value={person && person.lastname} onChange={handleInputChange}
                                   required/>
                            <label className="col-form-label col-form-label-sm" htmlFor="age">Age</label>
                            <input className="form-control form-control-sm" type="text" placeholder="Age"
                                   id="age" value={person && person.age} onChange={handleInputChange} required/>
                        </div>
                        <button type="submit"
                                className="btn btn-success btn-sm mb-1 mr-md-1">{edit ? 'Edit' : 'Add'}</button>
                        <button type="button" onClick={addCancel} className="btn btn-warning btn-sm mb-1">Cancel
                        </button>
                    </form>
                </div>
            </>


            }
        </div>
    )
}

export function Alert(props) {

    return (<div className="alert alert-dismissible alert-success">
        <button type="button" className="close" onClick={props.handleClose} data-dismiss="alert">&times;</button>
        <strong>{props.message}</strong>
    </div>)

}