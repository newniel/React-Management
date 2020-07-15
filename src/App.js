import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/128/128/1',
    'name' :  '니엘',
    'birthday' : '830407',
    'gender' : '남자',
    'job' : 'programmer'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/128/128/2',
    'name' :  '다니',
    'birthday' : '930407',
    'gender' : '여자',
    'job' : '직장인'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/128/128/3',
    'name' :  '니엘',
    'birthday' : '950407',
    'gender' : '여자',
    'job' : '디자이너'
  },
]
  


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
           return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
           );
          })
        }
      </div>
    );
  }
}

export default App;
