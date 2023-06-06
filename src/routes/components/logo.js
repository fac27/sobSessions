export default function logo(page) {
  const isLogin = page === "login";
  return /*html*/ `
    <div class="logo ${isLogin ? "logo--login" : "logo--header"}">
    <p class="logo-text--login">ಥ_ಥ</p>
    </div>`;
}
