import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getWaiters} from '../../store/actions/waitersActions'
import {Link, useRouteMatch} from "react-router-dom";

function WaitersList({waitersList, getWaitersList}) {

    useEffect(()=> {
        getWaitersList()
    },[getWaitersList]);

    const {url} = useRouteMatch();

    return (
        <ul className='list-group'>
            <h2>waiters</h2>
            <form className='d-inline-flex'>
                <input className='form-control form-control-lg'  type='text' placeholder='search'
                    // value={search}
                    // onChange={({target})=> onSearch(target.value)}
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
                        <button className='btn btn-danger' >delete</button>
                    </div>
                </li>
            )}
        </ul>
    );
}

function mapStateToProps(state) {
    return {
        waitersList: state.waiters.list
    }
}

const mapDispatchToProps = {
    getWaitersList: getWaiters
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitersList);