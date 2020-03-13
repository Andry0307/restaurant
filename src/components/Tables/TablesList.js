import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {Link, useRouteMatch} from "react-router-dom";
import {getTables, searchTable, deleteTable} from '../../store/actions/tablesActions'

function TablesList({tablesList, getTablesList, search, onSearch, onDelete}) {

    useEffect(()=>{
        getTablesList();
    }, [getTablesList]);

    const {url} = useRouteMatch();

    function onDeleteTable(e, id) {
        e.stopPropagation();
        onDelete(id)
    }

    return (
        <ul className='list-group'>
            <h2>tables</h2>
            <form className='d-inline-flex'>
                <input className='form-control form-control-lg'  type='text' placeholder='search'
                       value={search}
                       onChange={({target})=> onSearch(target.value)}
                />
                <Link to={`${url}/new`}>
                    <button className='btn btn-success add-new'>Add</button>
                </Link>
            </form>
            {tablesList.map((item)=>
                <li className='list-group-item' key={item.id}>
                    <span><b>name:</b> {item.name}</span> <br/>
                    <span><b>description:</b> {item.description}</span> <br/>
                    <span><b>sitsCount:</b> {item.sitsCount}</span> <br/>

                    <div className='float-right'>
                        <Link to={`${url}/${item.id}`}>
                            <button className='btn btn-secondary'>Edit</button>
                        </Link>
                        <button className='btn btn-danger' onClick={(e)=>{onDeleteTable(e, item.id)}}>delete</button>
                    </div>
                </li>
            )}
        </ul>
    );
}

const listSelector = (tables) => tables.list;
const searchSelector = (tables) => tables.search;

const getFilteredTables = createSelector(
    [listSelector, searchSelector],
    (list, search) => {
        const searchRegExp = new RegExp(search, 'gi');
        return search ? list.filter(item => item.name.match(searchRegExp)) : list
    }
);

function mapStateToProps({tables}) {
    return {
        tablesList: getFilteredTables(tables),
        search: tables.search
    }
}

const mapDispatchToProps = {
    getTablesList: getTables,
    onSearch: searchTable,
    onDelete: deleteTable
};

export default connect(mapStateToProps, mapDispatchToProps)(TablesList);