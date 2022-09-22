import React, { useState, useEffect } from "react";
import LogDataService from "../services/LogService";

const LogList = () => {
    const [Log, setLog] = useState([]);

    useEffect(() => {
        retrieveLog();
    }, []);

    const retrieveLog = () => {
        LogDataService.getAll()
            .then(response => {
                setLog(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="list row">
            <div className="col-md-6">
                <h4>Lista de logs</h4>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Metodo</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Log &&
                        Log.map((Log, index) => (
                            <tr>
                                <th scope="row">{Log.id}</th>
                                <td>
                                {Log.metodo}
                                </td>
                                <td>
                                {Log.fecha}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>        
        </div>

    );

};
export default LogList;