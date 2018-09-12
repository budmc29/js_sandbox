const STARS = [1, 2, 3, 4, 5];

const Application = ({ stars }) =>
  <div className="main">
    {stars.map((starId) => <Star key={starId} id={starId} filled={true}/>)}
  </div>;

const Star = ({ id, filled }) =>
  <React.Fragment>
    <span className={filled ? 'star filled' : 'star'}></span>
  </React.Fragment>;

ReactDOM.render(
  <Application stars={STARS}/>,
  document.querySelector('#container')
);
