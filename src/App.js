import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import './App.css';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стілець',
          img: 'chair.png',
          description: 'qwerty qwerty ',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стілець білий',
          img: 'chair-with-back.png',
          description: 'qwerty qwerty ',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Стіл круглий',
          img: 'shopping.png',
          description: 'qwerty qwerty',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 4,
          title: 'Стіл квадратний ',
          img: 'table-black.png',
          description: 'qwerty qwerty qwerttyqwretwry qwetr ',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 5,
          title: 'Стіл ',
          img: 'table-just.png',
          description: 'qwerty qwerty',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 6,
          title: 'Стіл чорний',
          img: 'table.png',
          description: 'qwerty qwerty  dfgfdhgdf dgfgfd ',
          category: 'tables',
          price: '49.99'
        },
      ],
      showFullItem: false,
      fullItem: {

      }
    }
    this.state.currentItems = this.state.items
    this.addToOder = this.addToOder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShoItem = this.onShoItem.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
       
        <Header orders={this.state.orders} onDelete = {this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShoItem} items = {this.state.currentItems} onAdd={this.addToOder}/>
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShoItem} onAdd={this.addToOder} item={this.state.fullItem}/>}
        <Footer/>
        
      </div>
    )
  }

  onShoItem(item) {
    this.setState({fullItem : item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOder(item){
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id){
        isInArray = true;
      }
    })

    if(!isInArray){
      this.setState({orders: [...this.state.orders, item]})
    }

  }
}

export default App;
