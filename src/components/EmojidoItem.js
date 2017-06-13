import React from 'react'

const buttonStyle = {
  fontSize: '2rem',
  background: 'none',
  border: 'none'
}

export default function EmojidoItem({
    completed,
    description,
    onToggleComplete,
    onChangeDescription
}) {
    return (
        <div>
            <button
              style = { buttonStyle }
              onClick={ onToggleComplete }
            >{ completed ? '👍' : '❌' }</button>
            <input
              type='text'
              value={ description }
              onChange={ onChangeDescription }
            />
        </div>
    )
}
