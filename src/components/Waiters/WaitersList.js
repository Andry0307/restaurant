import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {deleteWaiter, getWaiters, searchWaiter} from '../../store/actions/waitersActions'
import {Link, useRouteMatch} from "react-router-dom";

function WaitersList({waitersList, getWaitersList, onSearch, search, onDelete}) {

    useEffect(()=> {
        getWaitersList()
    },[getWaitersList]);

    const {url} = useRouteMatch();

    function onDeleteWaiter(e, id) {
        e.stopPropagation();
        onDelete(id)
    }

    return (
        <ul className='list-group'>
            <h2>waiters</h2>
            <form className='d-inline-flex'>
                <input className='form-control form-control-lg'  type='text' placeholder='search'
                    value={search}
                    onChange={({target})=> onSearch(target.value)}
                />
                <Link to={`${url}/new`}>
                    <button className='btn btn-success add-new'>Add</button>
                </Link>
            </form>
            {waitersList.map((item)=>
                <li className='list-group-item' key={item.id}>
                    <span><b>name:</b> {item.name}</span> <br/>
                    <span><b>salary:</b> {item.salary}</span> <br/>
                    <span><b>startDate:</b> {item.startDate}</span> <br/>

                    <div className='float-right'>
                        <Link to={`${url}/${item.id}`}>
                            <button className='btn btn-secondary'>Edit</button>
                        </Link>
                        <button className='btn btn-danger' onClick={(e)=>{onDeleteWaiter(e, item.id)}}>delete</button>
                    </div>
                </li>
            )}
        </ul>
    );
}

const listSelector = (waiters) => waiters.list;
const searchSelector = (waiters) => waiters.search;

const getFilteredWaiters = createSelector(
    [listSelector,searchSelector],
    (list, search) => {
        const searchRegExp = new RegExp(search, 'gi');
        return search
            ? list.filter(item => item.name.match(searchRegExp))
            : list
    }
);

function mapStateToProps({waiters}) {
    return {
        waitersList: getFilteredWaiters(waiters),
        search: waiters.search
    }
}

const mapDispatchToProps = {
    getWaitersList: getWaiters,
    onSearch: searchWaiter,
    onDelete: deleteWaiter
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitersList);