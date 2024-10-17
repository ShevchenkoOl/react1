import './style.css';

export const Candidate = ({ name, avatar, onVote }) => {
  return (
    <div className="candidate">
      <h3 className="candidate__name">{name}</h3>
      <img className="candidate__avatar" src={avatar} />
      <button
            className="btn-vote"
            onClick={() => onVote(name)}
            >Vybrat</button>
    </div>
  );
};
