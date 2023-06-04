<template>
  <div class="register">
    <div class="container">
      <div class="register__wrapper">
        <div>
          <img src="@/assets/images/Logo.svg" alt="logo" />
        </div>
        <h2 class="register__title">Create an account</h2>
        <div class="register__user-name">
          <input type="text" placeholder="Username" class="register__input" />
        </div>
        <div class="register__email">
          <input
            type="text"
            placeholder="Enter your email address"
            class="register__input"
          />
        </div>
        <div class="register__paswd">
          <input type="text" placeholder="Password" class="register__input" />
        </div>
        <div class="register__conf-paswd">
          <input
            type="text"
            placeholder="Confirm Password"
            class="register__input"
          />
        </div>

        <button class="register__btn-create">Create an account</button>

        <div class="login-element">
          <div class="line"></div>
          <p class="login-element__txt">Or login with</p>
          <div class="line"></div>
        </div>

        <div class="login__alternative">
          <button class="login__alternative-google">
            <div>
              <img src="@/assets/images/icons/google.svg" alt="icon-google" />
            </div>
            <p class="login__alternative-google-txt">Login with Google</p>
          </button>
          <button class="login__alternative-facebook">
            <div>
              <img
                src="@/assets/images/icons/facebook.svg"
                alt="icon-facebook"
              />
            </div>
            <p class="login__alternative-facebook-txt">Login with Facebook</p>
          </button>
        </div>

        <div class="login__sign-up">
          <h3 class="login__sign-txt">Don’t have an account?</h3>
          <button class="login__sign-btn">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
};
</script>
<style lang="scss" scoped></style>
