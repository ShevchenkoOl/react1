import "./style.css";

const Inbox = ({ account, messages }) => {
  return (
    <div className="inbox-container">
      <h1 className="inbox-title">Vítejte na stránce zprav</h1>
      <div className="inbox-details">
        <p className="inbox-account">Účet: {account}</p>
        {messages === 0 ? (
          <p className="no-unread">Žádné nové zprávy</p>
        ) : (
          <p className="unread">Počet zpráv: {messages}</p>
        )}
      </div>
    </div>
  );
};

export default Inbox;
