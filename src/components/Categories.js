import React, { Component } from 'react'

export default class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    id: 'all',
                    name: 'Все'
                },
                {
                    id: 'chairs',
                    name: 'Стільці'
                },
                {
                    id: 'tables',
                    name: 'Столи'
                },
                {
                    id: 'sofa',
                    name: 'Дівани'
                },
                {
                    id: 'light',
                    name: 'Лампи'
                },

            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.id} onClick ={() => this.props.chooseCategory(el.id)}>{el.name}</div>
        ))}
      </div>
    )
  }
}
