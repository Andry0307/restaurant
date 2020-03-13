import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from "react-router";
import {saveWaiter} from "../../store/actions/waitersActions";

function WaiterForm({item, onSave}) {
    const [waiterItem, setWaiterItem] = useState(item);

    const history = useHistory();

    function onValueChange(target) {
        setWaiterItem({
            ...waiterItem,
            ...{[target.name]: target.value},
        })
    }

    function onSaveClick(e) {
        e.preventDefault();
        onSave(waiterItem);
        history.push('/waiters')
    }

    return (
        <form className='form-group'>
            <input className='form-control form-control-lg' placeholder='name'
                   name='name'
                   value={waiterItem.name}
                   onChange={({target})=> {onValueChange(target)}}
            />
            <input className='form-control form-control-lg' placeholder='salary'
                   name='salary'
                   value={waiterItem.salary}
                   onChange={({target})=> {onValueChange(target)}}
            />
            {/*<input className='form-control form-control-lg' placeholder='startDate'*/}
            {/*       name='startDate'*/}
            {/*       value={waiterItem.startDate}*/}
            {/*       onChange={({target})=> {onValueChange(target)}}*/}
            {/*/>*/}
            <button className='btn btn-success float-right' onClick={onSaveClick}>Add</button>
        </form>
    );
}

function mapStateToProps({waiters}, {id}) {
    return {
        item: id !== 'new'
            ? waiters.list.find(item => item.id === id)
            : {name: '', salary: '', startDate: ''}
    }
}

const mapDispatchToProps = {
    onSave: saveWaiter,
};

export default connect(mapStateToProps, mapDispatchToProps)(WaiterForm);