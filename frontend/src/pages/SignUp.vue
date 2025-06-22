<template>
  <div class="container">
    <div class="left-side">

    </div>
    <div class="right-side">
      <div class="form-container">
        <div class="heading">Sign Up</div>
        <div class="input-group">
          <input
            type="text"
            placeholder="First Name"
            class="input"
          />
          <input
            type="text"
            placeholder="Last Name"
            class="input"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          class="input"
        />
        <div class="input-group">
          <input
            type="number"
            placeholder="Age"
            class="input"
          />
          <input
            type="number"
            placeholder="Phone No."
            class="input"
          />
        </div>
        <button class="submit-button">
          Submit
        </button>
        <div class="remark">Already have an account?</div>
        <a href="/sign-in">Sign In</a>
      </div>
    </div>
  </div>
</template>

<style>
.container
{
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  background-color: #B0D8DA;
}
.left-side
{
  width: 45%;
}
.right-side
{
  width: 55%;
  background-color: white;
  background-image: url('../../public/background-image.png');
  background-repeat: repeat;
  background-size: 15rem 15rem;
  border-bottom-left-radius: 10rem;
  border-top-left-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-container
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #31A8AE;
  width: 25rem;
  height: 32rem;
  border-radius: 4rem;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.25);
  font-family: 'Ribeye', cursive;
}
.heading
{
  font-size: 4rem;
  font-family: 'Ribeye', cursive;
  margin-bottom: 30px;
}
.input
{
  color: #31A8AE;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  outline: none;
  border: 2px solid #31A8AE;
  border-radius: 0.75rem;
  width: 80%;
  height: 2.5rem;
  margin: 15px auto 15px auto;
  font-size: 1.5rem;
  text-align: center;
}
.input-group
{
  display: flex;
  flex-direction: row;
  width: 80%;
  gap: 1rem;
}
.input::placeholder
{
  color: #31A8AE;
  opacity: 1;
  font-family: 'Ribeye', cursive;
}
.submit-button
{
  background-color: #31A8AE;
  color: white;
  border-style: none;
  font-family: 'Ribeye', cursive;
  width: 14rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  font-size: 1.5rem;
  margin: 15px auto 15px auto;
}

.remark, a
{
  color: #31A8AE;
  font-family: 'Ribeye', cursive;
  font-size: 1.3rem;
}

@media (max-width: 768px)
{
  .container
  {
    font-size: lg;
  }
}
@media (max-width: 480px) {
  .container
  {
    font-size: x-small;
  }
}
</style>