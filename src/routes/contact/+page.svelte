<head>
  <title>Contact - CSMA Technology</title>
</head>

<h1>Contact Us</h1>
<p>Tell us what you need, and we'll work together to bring it to life.</p>
<div class="contact-form">
  <form name="email-form" action="/contact/email-success" method="POST" netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="form-name" value="email-form" />
    <div class="inputs">
      <div class="text-field">
        <input type="text" name="name" id="name" />
        <label for="first-name">Name</label>
      </div>
      <div class="text-field">
        <input type="email" name="email" id="email" />
        <label for="email">Email</label>
      </div>
      <div class="text-field">
        <textarea id="msg" name="message" rows=10 cols=40 />
        <label for="msg">Message</label>
      </div>
    </div>
    <button>Submit</button>
  </form>
</div>

<style>
  input[type=text], input[type=email] {
    height: 40px;
    border: 1px solid #000000;
    border-radius: 5px;
    /* min-width: 300px; */
    font-family: 'Roboto';
    font-size: 16px;
  }

  textarea {
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: 'Roboto';
    font-size: 16px;
    padding: 0.5em;
  }

  @media(prefers-color-scheme: dark) {
    input, textarea {
      background-color: #303e47;
    }
  }

  .inputs {
    min-width: min(40vw, 700px);
    display: flex;
    flex-flow: column wrap;
  }

  .contact-form {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
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