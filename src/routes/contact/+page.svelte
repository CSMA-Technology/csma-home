<h1>Contact Us</h1>
<p>Tell us what you need, and we'll work together to bring it to life.</p>
<div class="contact-form">
  <div class="inputs">
    <div class="names">
      <div class="text-field">
        <input type="text" id="first-name" />
        <label for="first-name">First Name</label>
      </div>
      <div class="text-field">
        <input type="text" id="last-name" />
        <label for="last-name">Last Name</label>
      </div>
    </div>
    <div class="text-field">
      <input type="text" id="email" />
      <label for="email">Email</label>
    </div>
    <div class="text-field">
      <textarea id="msg" rows=10 cols=40 />
      <label for="msg">Message</label>
    </div>
  </div>
  <button>Submit</button>
</div>

<style>
  input[type=text] {
    height: 40px;
    border: 1px solid #000000;
    border-radius: 5px;
    min-width: 300px;
    font-family: 'Roboto';
    font-size: 16px;
  }

  textarea {
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: 'Roboto';
    font-size: 16px;
  }

  .inputs {
    width: 700px;
    display: flex;
    flex-flow: column wrap;
  }

  .contact-form {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  .names {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .text-field {
    display: flex;
    flex-flow: column wrap;
    text-align: left;
  }

  label {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 10px;
  }
</style>