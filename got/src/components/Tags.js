import React from 'react';
import data from '../got.json';
import People from './people';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHouse: '',
    };
  }
  handleClick = (house) => {
    this.setState({
      activeHouse: house,
    });
  };
  render() {
    let houseNames = data.map((house) => house.name);
    let everyOne;
    if (!this.state.activeHouse) {
      everyOne = data.reduce((acc, house) => {
        acc = acc.concat(house.people);
        return acc;
      }, []);
    } else {
      everyOne = data.find(
        (house) => house.name === this.state.activeHouse
      ).people;
    }
    return (
      <>
        <ul className="tags flex jcb aic ">
          {houseNames.map((house) => (
            <li
              key={house}
              className={house === this.state.activeHouse ? 'active' : ''}
              onClick={() => this.handleClick(house)}
            >
              {house}
            </li>
          ))}
        </ul>
        <People everyOne={everyOne} />
      </>
    );
  }
}

export default Tags;
