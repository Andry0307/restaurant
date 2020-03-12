import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, useRouteMatch} from "react-router-dom";
import {getTables} from '../../store/actions/tablesActions'

function TablesList({tablesList, getTablesList}) {

    useEffect(()=>{
        getTablesList();
    }, [getTablesList]);

    const {url} = useRouteMatch();

    return (
        <ul className='list-group'>
            <h2>tables</h2>
            <form className='d-inline-flex'>
                <input className='form-control form-control-lg'  type='text' placeholder='search'
                       // value={search}
                       // onChange={({target})=> onSearch(target.value)}
                />
                <Link to={`${url}/new`}>
                    <button className='btn btn-success add-new'>Add</button>
                </Link>
            </form>
            {tablesList.map((item)=>
                <li className='list-group-item' key={item.id}>
                    <span><b>name:</b> {item.name}</span> <br/>
                    <span><b>sitsCount:</b> {item.sitsCount}</span> <br/>

                    <div className='float-right'>
                        <Link to={`${url}/${item.id}`}>
                            <button className='btn btn-secondary'>Edit</button>
                        </Link>
                        <button className='btn btn-danger' >delete</button>
                    </div>
                </li>
            )}
        </ul>
    );
}

function mapStateToProps({tables}) {
    return {
        tablesList: tables.list
    }
}

const mapDispatchToProps = {
    getTablesList: getTables
};

export default connect(mapStateToProps, mapDispatchToProps)(TablesList);