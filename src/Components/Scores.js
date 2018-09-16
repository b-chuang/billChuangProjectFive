import React from 'react';
/* import './Scores.css' */

class Scores extends React.Component {
    render() {

      
      const lastFour = this.props.listOfNames.slice(-5);
      if (lastFour.length < 6) {
        lastFour.shift();
      }
      /* console.log(this.props.listOfNames);
      console.log(lastFour); */
      
      
        return <div className="scoreDiv">
            <ul>
              {lastFour.map(individualListItem => (
                <li key={individualListItem.id}>
                <h3 className="scoreList">NAME:</h3>
                <h4 className="scoreList">{individualListItem.currentTextValue} &#32;</h4>
                <h3 className="scoreList">TIME:</h3>
                <h4 className="scoreList">{individualListItem.count}</h4>
                </li>
              ))}
            </ul>
          </div>;
    }
}

export default Scores;