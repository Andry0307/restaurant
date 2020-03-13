import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from "react-router-dom";
import {saveTable} from "../../store/actions/tablesActions";

function TableForm({item, onSave}) {
    const [tableItem, setTableItem] = useState(item);

    const  history  = useHistory();

    function onValueChange(target) {
        setTableItem({
            ...tableItem,
            ...{[target.name]: target.value}
        })
    }

    function onSaveClick(e) {
        e.preventDefault();
        onSave(tableItem);
        history.push('/tables')
    }

    return (
        <form className='form-group'>
            <input className='form-control form-control-lg' placeholder='name'
                   name='name'
                   value={tableItem.name}
                   onChange={({target})=> {onValueChange(target)}}
            />
            <input className='form-control form-control-lg' placeholder='description'
                   name='description'
                   value={tableItem.description}
                   onChange={({target})=> {onValueChange(target)}}
            />
            <input className='form-control form-control-lg' placeholder='sitsCount'
                   name='sitsCount'
                   value={tableItem.sitsCount}
                   onChange={({target})=> {onValueChange(target)}}
            />
            <button className='btn btn-success float-right' onClick={onSaveClick}>Add</button>
        </form>
    );
}

function mapStateToProps({tables}, {id}) {
    return {
        item: id !== 'new'
            ? tables.list.find(item => item.id === id)
            : {name: '', description: '', sitsCount: ''}
    }
}

const mapDispatchToProps = {
    onSave: saveTable
};

export default connect(mapStateToProps, mapDispatchToProps)(TableForm);