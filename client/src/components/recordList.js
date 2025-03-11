import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types";

const Employee = (props) => {
    return (
        <tr>
            <td>{props.employee.name}</td>
            <td>{props.employee.position}</td>
            <td>{props.employee.level}</td>
            <td>
                <Link className="btn btn-link" to={`/edit/${props.employee._id}`}>Edit</Link> |
                <button
                    className="btn btn-link"
                    onClick={() => {
                        props.deleteEmployee(props.employee._id)
                    }}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

//Expected Props per Employee
Employee.propTypes = {
    employee:PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired,
    }).isRequired,
    deleteEmployee: PropTypes.func.isRequired
};

export default function RecordList() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        async function getEmployees() {
            const response = await fetch(`${process.env.MERN_APP}/employee/`)

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`
                window.alert(message)
                return
            }

            const employees = await response.json()
            setEmployees(employees)
        }

        getEmployees()

        return
    }, [])

    async function deleteEmployee(id) {
        const result = window.confirm("Will this employee be removed from the list?")
        if (!result) {
            return
        }

        await fetch(`${process.env.MERN_APP}/${id}`, {
            method: "DELETE"
        })

        const newEmployees = employees.filter((employee) => employee._id !== id)
        setEmployees(newEmployees)
    }

    function recordList() {
        return employees.map((employee) => {
            return (
                <Employee
                    key={employee._id}
                    employee={employee}
                    deleteEmployee={() => deleteEmployee(employee._id)}
                />
            )
        })
    }

    return (
        <div>
            <h3 className="ps-2">Record List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>
        </div>
    )
}