<template>
  <div class="login">
    <div class="container">
      <div class="login__wrapepr">
        <div class="login__logo">
          <img src="@/assets/images/Logo.svg" alt="logo" />
        </div>

        <h1 class="login__title">Login</h1>

        <div class="login__user-name">
          <input
            type="text"
            placeholder="almamun_uxui@outlook.com"
            class="login__input-login"
          />
          <p class="login__error-input">Почта</p>
        </div>
        <div class="login__user-paswd">
          <input
            type="text"
            placeholder="password"
            class="login__input-login"
          />
          <p class="login__error-input">Пароль</p>
        </div>
        <button class="login__forgot-paswd">Forgot Password?</button>
      </div>

      <button class="login__btn" @click="$router.push('main')">Login</button>

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
            <img src="@/assets/images/icons/facebook.svg" alt="icon-facebook" />
          </div>
          <p class="login__alternative-facebook-txt">Login with Facebook</p>
        </button>
      </div>
      <div class="login__sign-up">
        <h3 class="login__sign-txt">Don’t have an account?</h3>
        <button class="login__sign-btn" @click="$router.push('register')">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 350px;
  margin: 0 auto;
}
.login {
  padding: 0px 10px;
  &__wrapepr {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__logo {
    margin: 40px 0;
  }
  &__title {
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    color: #3d3d3d;
  }
  &__user-paswd {
    margin: 20px 0px 12px 0px;
  }
  &__forgot-paswd {
    align-self: flex-end;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #46a358;
  }
  &__input-login {
    width: 358px;
    height: 50px;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    padding: 16px 0px 16px 16px;
  }
  &__btn {
    margin-top: 40px;
    padding: 22px 158px;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #ffffff;
    width: 358px;
    height: 60px;
    background: #46a358;
    border-radius: 10px;
  }
  &__alternative-google {
    margin-bottom: 20px;
    display: flex;
    padding: 0px 0px 0px 100px;
    align-items: center;
    width: 358px;
    height: 50px;
    background: #4086f4;
    border-radius: 10px;
  }
  &__alternative-facebook {
    margin-bottom: 30px;
    display: flex;
    padding: 0px 0px 0px 100px;
    align-items: center;
    width: 358px;
    height: 50px;
    background: #3b5999;
    border-radius: 10px;
  }
  &__alternative-facebook-txt {
    font-weight: 500;
    margin-left: 10px;
    font-size: 15px;
    line-height: 16px;
    color: #ffffff;
  }
  &__alternative-google-txt {
    font-weight: 500;
    margin-left: 10px;
    font-size: 15px;
    line-height: 16px;
    color: #ffffff;
  }
  &__sign-up {
    max-width: 210px;
    margin: 0 auto;
    display: flex;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #727272;
  }
  &__sign-txt {
    margin-right: 5px;
  }
  &__sign-btn {
    color: #46a358;
    font-weight: 700;
    font-size: 16px;
  }
  &__error-input {
    color: red;
    margin: 5px 0 0 10px;
  }
}

.login__input-login::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #a5a5a5;
}
.login-element {
  display: flex;
  align-items: center;
  &__txt {
    margin: 0px 10px;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #3d3d3d;
  }
}

.line {
  flex-grow: 1;
  border: 1px solid #eaeaea;
}

.login-element span {
  padding: 0 10px;
}

.login-element {
  margin: 30px 0;
}
input:focus {
  border: 1px solid #46a358;
}
</style>
