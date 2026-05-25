import Button from "./Button";

const BookingForm = ({ compact = false }) => (
  <form className={`form-card ${compact ? "compact" : ""}`} onSubmit={(event) => event.preventDefault()}>
    <div className="form-grid">
      <label>Name<input required type="text" placeholder="Your name" /></label>
      <label>Email<input required type="email" placeholder="you@example.com" /></label>
      <label>Phone<input required type="tel" placeholder="+44" /></label>
      <label>Date<input required type="date" /></label>
      <label>Time<select defaultValue="12:00"><option>09:00</option><option>10:30</option><option>12:00</option><option>14:30</option><option>18:00</option></select></label>
      <label>Guests<input required type="number" min="1" max="12" defaultValue="2" /></label>
    </div>
    <label>Notes<textarea placeholder="Dietary requirements, high chair requests, celebrations..." /></label>
    <Button type="submit">Request booking</Button>
  </form>
);

export default BookingForm;
