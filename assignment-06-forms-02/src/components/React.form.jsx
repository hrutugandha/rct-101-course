import { useEffect , useState } from "react";
import { Body } from "./Body";

const Form = () => {
    const [table, setTable] = useState([]);
    const [data, setData] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.married) {
            data.married = "No";
        } else {
            data.married = "Yes";
        }

        fetch("http://localhost:8080/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(dbData => {
                setTable([...table, dbData]);
            })
    }

    const handleChange = (e) => {
        if (e.target.name === "married") {
            setData({
                ...data,
                [e.target.name]: e.target.checked
            })
        } else {
            setData({
                ...data,
                [e.target.name]: e.target.value
            })
        }
    }


    useEffect(
        () => {
            fetch("http://localhost:5000/users")
                .then((res) => res.json())
                .then((dbData) => {
                    setTable(dbData);

                    console.log("dbData", dbData);
                })
        },
        []
    );

    useEffect(
        () => {
            console.log("table: ", table);
        },
        [table]
    )

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    name="name"
                    type="text"
                    placeholder="Enter Name">
                </input><br></br>

                <input
                    onChange={handleChange}
                    name="age"
                    type="number"
                    placeholder="Enter Age">
                </input><br></br>

                <input
                    onChange={handleChange}
                    name="address"
                    type="text"
                    placeholder="Enter Address">
                </input><br></br>

                <select
                    onChange={handleChange}
                    name="department">
                    <option value="">--</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select><br></br>

                <input
                    onChange={handleChange}
                    name="salary"
                    type="number"
                    placeholder="Enter Salary">
                </input><br></br>

                <input
                    checked={this}
                    onChange={handleChange}
                    type="checkbox"
                    id="married"
                    name="married">
                </input>
                <label htmlFor="married"> I am married </label><br></br>

                <input type="submit" value="Submit"></input>
            </form>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Department</th>
                    <th>Married</th>
                </tr>
                {table.map((e) => {
                    return < Body user={e} />
                })}
            </table>
        </>
    )
}

export { Form }