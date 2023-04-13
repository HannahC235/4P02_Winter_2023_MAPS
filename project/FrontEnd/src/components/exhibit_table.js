import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
const Table = ({ exhibit }) => {
    return (
        <div class='table_div'>
            <table>
                <tr>
                    <th>Exhibit Id</th>
                    <th>Exhibit Name</th>
                    <th>Exhibit Description</th>
                    <th></th>
                </tr>
                <tr>
                    <td>{exhibit.exhibit_id}</td>
                    <td>{exhibit.exhibit_name}</td>
                    <td>{exhibit.exhibit_description}</td>
                </tr>
            </table>
        </div>
    )
}

export default Table